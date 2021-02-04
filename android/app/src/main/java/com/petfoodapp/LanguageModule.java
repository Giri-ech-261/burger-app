package com.petfoodapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import static android.content.Context.MODE_PRIVATE;


public class LanguageModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public LanguageModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void passLocal(String message){
//        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
        System.out.println("Language--> Pass From RN" +message);
        SharedPreferences.Editor editor = getReactApplicationContext().getSharedPreferences("LANGUAGE", MODE_PRIVATE).edit();
        editor.putString("local", message);
        editor.apply();


    }
//    @ReactMethod
//    public void show(String message, int duration) {
//        if (!Utils.mStringDeeplink.equalsIgnoreCase("")){
//            Toast.makeText(getReactApplicationContext(), message, duration).show();
//        }
//
//    }
//
//    @ReactMethod
//    public void getActualDeepLink( Callback errorCallback, Callback successCallback) {
//        if (!Utils.mStringDeeplink.equalsIgnoreCase(""))
//            try {
//                successCallback.invoke(Utils.mStringDeeplink);
//                Utils.mStringDeeplink = "";
//            } catch (IllegalViewOperationException e) {
//                errorCallback.invoke(e.getMessage());
//            }
//    }

    /**
     * this method is sample method
     *
     * @param a
     * @param b
     * @param errorCallback
     * @param successCallback
     */
    @ReactMethod
    public void sum(int a, int b, Callback errorCallback, Callback successCallback) {
        try {
            successCallback.invoke(a + b);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }


    @Override
    public String getName() {
        return "LanguageModule";
    }
}
