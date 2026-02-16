# RustDesk PWA - TWA Wrapper for Google Play

This directory contains an Android TWA (Trusted Web Activity) project that wraps the RustDesk PWA for distribution on Google Play Store. The same APK/AAB works on both Android phones and Chromebooks.

## Prerequisites

- Java JDK 17+
- Android SDK (API 34)
- Android Studio (recommended) or command-line build tools

## Configuration

### 1. Update the PWA URL

Edit `app/build.gradle` and update the `manifestPlaceholders`:

```groovy
hostName      : "your-domain.com",
defaultUrl    : "https://your-domain.com",
```

### 2. Generate a signing key

```bash
keytool -genkey -v -keystore rustdesk-pwa.keystore -alias rustdesk -keyalg RSA -keysize 2048 -validity 10000
```

### 3. Get the SHA-256 fingerprint

```bash
keytool -list -v -keystore rustdesk-pwa.keystore -alias rustdesk | grep SHA256
```

### 4. Update Digital Asset Links

Replace the fingerprint in `../public/.well-known/assetlinks.json` with your signing key's SHA-256 fingerprint. This file must be served at `https://your-domain.com/.well-known/assetlinks.json`.

### 5. Build the AAB (Android App Bundle)

```bash
./gradlew :app:bundleRelease
```

The AAB will be at `app/build/outputs/bundle/release/app-release.aab`.

### 6. Build a debug APK for testing

```bash
./gradlew :app:assembleDebug
```

## How TWA Works

- The app launches Chrome's TWA mode, which renders your PWA in a full-screen Chrome tab without any browser UI
- Digital Asset Links verification proves you own both the app and the website
- When verified, the PWA runs identically to a native app (no URL bar, runs from launcher)
- If Chrome isn't installed, it falls back to a Custom Tab (with minimal browser UI)

## Google Play Submission

1. Build the release AAB
2. Create a Google Play Developer account ($25 one-time fee)
3. Create a new app listing
4. Upload the AAB under "Production" release
5. Fill in the store listing (screenshots, description, etc.)
6. Submit for review

## ChromeOS Notes

- This same APK/AAB works on Chromebooks via Google Play Store
- ChromeOS runs Android apps natively, so the TWA launches Chrome in TWA mode
- No separate Chromebook store exists - Google Play is the distribution channel
