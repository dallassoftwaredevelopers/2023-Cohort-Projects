package com.example.medlista.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.medlista.android.ui.theme.MedlistaTheme

class RegisterActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MedlistaTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    RegisterView("Android")
                }
            }
        }
    }
}

@Composable
fun RegisterView(name: String) {
    Text(text = "Hello $name!")
}

@Preview(showBackground = true)
@Composable
fun RegisterViewPreview() {
    MedlistaTheme {
        RegisterView("Android")
    }
}