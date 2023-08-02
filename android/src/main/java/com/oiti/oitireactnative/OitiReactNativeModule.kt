package com.oiti.oitireactnative

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import android.app.Activity
import android.content.Intent

import androidx.annotation.NonNull

import br.com.oiti.certiface.facecaptcha.FaceCaptchaActivity
import br.com.oiti.certiface.facecaptcha.UserData
import br.com.oiti.certiface.documentscopy.DocumentscopyActivity
import br.com.oiti.certiface.documentscopy.DocumentscopyErrorCode

import com.facebook.react.bridge.*

class OitiReactNativeModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

    private val DOCUMENTSCOPY_RESULT_REQUEST = 1
    private val FACECAPTCHA_RESULT_REQUEST = 2

    private val ENDPOINT = "https://comercial.certiface.com.br:8443"

    private val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
    private val E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER"

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
      putExtra(FaceCaptchaActivity.PARAM_ENDPOINT, ENDPOINT)
      putExtra(FaceCaptchaActivity.PARAM_USER_DATA, userData)
      putExtra(FaceCaptchaActivity.PARAM_SHOW_INSTRUCTIONS, false)
    }
    getCurrentActivity()?.startActivityForResult(intent, FACECAPTCHA_RESULT_REQUEST)

    } catch (e: Exception) {
    }
  }

    @ReactMethod
    fun startdocumentscopy(appKey: String, token: String, baseUrl: String, promise: Promise) {

    val intent = Intent(getCurrentActivity(), DocumentscopyActivity::class.java).apply{
        putExtra(DocumentscopyActivity.PARAM_ENDPOINT, baseUrl)
        putExtra(DocumentscopyActivity.PARAM_APP_KEY, appKey)
        putExtra(DocumentscopyActivity.PARAM_TICKET,token )
        putExtra(DocumentscopyActivity.PARAM_HYBRID, true)
        putExtra(DocumentscopyActivity.PARAM_HYBRID, true)
      //  putExtra(DocumentscopyActivity.PARAM_CERTIFACE_ENV, CertifaceEnviroment.HML)
        putExtra(
                    DocumentscopyActivity.PARAM_DEBUG_ON,
                    false
      )
    }
    getCurrentActivity()?.startActivityForResult(intent, DOCUMENTSCOPY_RESULT_REQUEST)
  }

  companion object {
    const val NAME = "OitiReactNative"
  }
}
