package com.oiti.oitireactnative

import android.Manifest
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager

import androidx.annotation.NonNull
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

import br.com.oiti.certiface.facecaptcha.FaceCaptchaActivity
import br.com.oiti.certiface.facecaptcha.UserData
import br.com.oiti.certiface.documentscopy.DocumentscopyActivity
import br.com.oiti.certiface.documentscopy.DocumentscopyErrorCode
import br.com.oiti.certiface.data.util.Environment

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.PermissionAwareActivity
import com.oiti.oitireactnative.doccore.DocTheme

class OitiReactNativeModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  private var mDocCorePromisse: Promise? = null
  private var mFaceCaptchaPromisse: Promise? = null

  private val mActivityEventListener: ActivityEventListener = object : BaseActivityEventListener() {
    override fun onActivityResult(
      activity: Activity,
      requestCode: Int,
      resultCode: Int,
      data: Intent?
    ) {
      super.onActivityResult(requestCode, resultCode, data)

      when (requestCode) {
        DOCUMENTSCOPY_RESULT_REQUEST -> {
          mDocCorePromisse?.let {
            when (resultCode) {
              Activity.RESULT_CANCELED -> it.reject(RESULT_CANCELED, RESULT_CANCELED)
              Activity.RESULT_OK -> it.resolve(RESULT_OK)
            }
            mDocCorePromisse = null
          }
        }

        FACECAPTCHA_RESULT_REQUEST -> {
          mFaceCaptchaPromisse?.let {
            when (resultCode) {
              Activity.RESULT_CANCELED -> it.reject(RESULT_CANCELED, RESULT_CANCELED)
              Activity.RESULT_OK -> it.resolve(RESULT_OK)
            }
            mFaceCaptchaPromisse = null
          }
        }
      }
    }
  }
  override fun getName(): String {
    return NAME
  }
  init {
    reactContext.addActivityEventListener(mActivityEventListener)
  }

  @NonNull
  @ReactMethod
  fun startfacecaptcha(appKey: String, promise: Promise) {
    mFaceCaptchaPromisse = promise
    if (currentActivity == null) {
      promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
      return;
    }

    val userData = UserData(appKey = appKey)
    val intent =  Intent(getCurrentActivity(), FaceCaptchaActivity::class.java).apply{
      putExtra(FaceCaptchaActivity.PARAM_USER_DATA, userData)
      putExtra(FaceCaptchaActivity.PARAM_SHOW_INSTRUCTIONS, false)
      putExtra(FaceCaptchaActivity.PARAM_ENVIRONMENT, Environment.HML)
    }
    currentActivity?.startActivityForResult(intent, FACECAPTCHA_RESULT_REQUEST)

  }

  @ReactMethod
  fun startdocumentscopy(
    appKey: String,
    ticket: String,
    themeJson: ReadableMap?,
    nativeCustom: Boolean,
    environment: String,
    promise: Promise
  ) {
    mDocCorePromisse = promise
    val env: Environment = if (environment.equals("PRD")) Environment.PRD else Environment.HML
    val themeBuilder = themeJson?.let { DocTheme(it).getNewTheme() }
    val loadingSize: Int = themeJson?.getInt("setLoadingSpinnerScale")?.times(100) ?: 100

    val intent = Intent(currentActivity, DocumentscopyActivity::class.java).apply {
      putExtra(DocumentscopyActivity.PARAM_APP_KEY, appKey)
      if (ticket?.isNotEmpty() == true) {
        putExtra(DocumentscopyActivity.PARAM_TICKET, ticket)
      }
      putExtra(DocumentscopyActivity.PARAM_HYBRID, !nativeCustom)
      putExtra(DocumentscopyActivity.PARAM_ENVIRONMENT, env)

      themeBuilder?.let { putExtra(DocumentscopyActivity.PARAM_THEME, it) }

      putExtra(DocumentscopyActivity.PARAM_DEBUG_ON, false)
      putExtra(
        DocumentscopyActivity.PARAM_CUSTOM_LOADING_BACKGROUND,
        themeJson?.getString("setLoadingBackgroundColor") ?: "#FFFFFF"
      )
      putExtra(
        DocumentscopyActivity.PARAM_CUSTOM_LOADING_SPINNER_COLOR,
        themeJson?.getString("setLoadingSpinnerColor") ?: "#000000"
      )
      putExtra(DocumentscopyActivity.PARAM_CUSTOM_LOADING_SIZE, loadingSize)
    }
    currentActivity?.startActivityForResult(intent, DOCUMENTSCOPY_RESULT_REQUEST)
  }

  @ReactMethod
  fun checkcamerapermission(promise: Promise) {
    val currentActivity = currentActivity
    if (currentActivity != null) {
      if (ContextCompat.checkSelfPermission(currentActivity, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
        promise.resolve(true)
      } else {
        promise.resolve(false)

      }
    } else {
      promise.reject("UNAVAILABLE", "Could not get current activity.")
    }
  }

  @ReactMethod
  fun askcamerapermission(promise: Promise) {
    val currentActivity = currentActivity

    if (currentActivity != null) {
      if (ContextCompat.checkSelfPermission(currentActivity, Manifest.permission.CAMERA)
        == PackageManager.PERMISSION_GRANTED
      ) {
        promise.resolve(true)
      } else {
        val activity = currentActivity
        if (activity is PermissionAwareActivity) {
          ActivityCompat.requestPermissions(
            activity,
            arrayOf(Manifest.permission.CAMERA),
            CAMERA_PERMISSION_REQUEST_CODE
          )
        } else {
          promise.resolve(false)
        }
      }
    } else {
      promise.resolve(true)
    }
  }

  companion object {
    const val NAME = "OitiReactNative"
    const val CAMERA_PERMISSION_REQUEST_CODE = 1111
    const val CAMERA_PERMISSION_ASK_CODE = 1222
    const val DOCUMENTSCOPY_RESULT_REQUEST = 1
    const val FACECAPTCHA_RESULT_REQUEST = 2
    const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
    const val RESULT_CANCELED = "RESULT_CANCELED"
    const val RESULT_OK = "RESULT_OK"
  }
}
