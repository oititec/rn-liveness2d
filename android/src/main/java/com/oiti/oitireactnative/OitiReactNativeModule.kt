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
import com.facebook.react.modules.core.PermissionListener

class OitiReactNativeModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

    private val DOCUMENTSCOPY_RESULT_REQUEST = 1
    private val FACECAPTCHA_RESULT_REQUEST = 2

    private val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"

  override fun getName(): String {
    return NAME
  }

  @NonNull
  @ReactMethod
  fun startfacecaptcha(appKey: String, promise: Promise) {

  val currentActivity = currentActivity

  if (currentActivity == null) {
    promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
    return;
  }

  try {

    val userData = UserData(appKey = appKey)
    val intent =  Intent(getCurrentActivity(), FaceCaptchaActivity::class.java).apply{
      putExtra(FaceCaptchaActivity.PARAM_USER_DATA, userData)
      putExtra(FaceCaptchaActivity.PARAM_SHOW_INSTRUCTIONS, false)
      putExtra(FaceCaptchaActivity.PARAM_ENVIRONMENT, Environment.HML)
    }
    getCurrentActivity()?.startActivityForResult(intent, FACECAPTCHA_RESULT_REQUEST)

    } catch (e: Exception) {
    }
  }

  @ReactMethod
  fun startdocumentscopy(appKey: String, ticket: String, promise: Promise) {

    val intent = Intent(currentActivity, DocumentscopyActivity::class.java).apply{
        putExtra(DocumentscopyActivity.PARAM_APP_KEY, appKey)
        if(ticket?.isNotEmpty() == true) {
          putExtra(DocumentscopyActivity.PARAM_TICKET, ticket)
        }
       // putExtra(DocumentscopyActivity.PARAM_HYBRID, true)
        putExtra(DocumentscopyActivity.PARAM_ENVIRONMENT, Environment.HML)
        putExtra(DocumentscopyActivity.PARAM_DEBUG_ON,false)
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
  }
}
