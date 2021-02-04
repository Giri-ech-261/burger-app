package com.petfoodapp;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
  public static Context mContext;
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "PetFoodApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SharedPreferences prefs = getSharedPreferences("LANGUAGE", MODE_PRIVATE);
    String name = prefs.getString("local", "");//"No name defined" is the default value.
    if (name.equalsIgnoreCase("ar")){
//      Toast.makeText(getApplicationContext(), "ARABIC", Toast.LENGTH_SHORT).show();
      setTheme(R.style.AppThemeArabic);
    }else{
      setTheme(R.style.AppTheme);
//      Toast.makeText(getApplicationContext(), "EN", Toast.LENGTH_SHORT).show();
    }
    SplashScreen.show(this, R.style.SplashScreenTheme);  // here
    super.onCreate(savedInstanceState);

  }
}
