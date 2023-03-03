buildscript {
    val compose_ui_version by extra("1.1.1")
}
plugins {
    //trick: for the same plugin versions in all sub-modules
    id("com.android.application").version("7.3.1").apply(false)
    id("com.android.library").version("7.3.1").apply(false)
    kotlin("android").version("1.7.10").apply(false)
    kotlin("multiplatform").version("1.7.10").apply(false)
    //id("org.jetbrains.kotlin.android") version "1.6.10" apply false
    id("io.realm.kotlin") version "1.6.0"
}

tasks.register("clean", Delete::class) {
    delete(rootProject.buildDir)
}
