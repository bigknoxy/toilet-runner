# Google Play Store Publishing Guide

Step-by-step instructions to get Toilet Runner from PWA to the Google Play Store via TWA (Trusted Web Activity).

---

## Prerequisites

- A machine with Java 8+ installed (for `keytool` and Bubblewrap)
- Node.js 14+ (for Bubblewrap CLI)
- The game deployed and live at `https://bigknoxy.github.io/toilet-runner/`
- $25 USD for Google Play Developer registration

---

## Step 1: Replace Placeholder Assets

### 1a. Maskable Icons

Maskable icons must have all important content inside the **inner 80% safe zone** — Android will crop the outer 20% into various shapes (circle, squircle, etc.).

**Files to replace:**
- `public/icons/icon-192-maskable.png` — 192×192px
- `public/icons/icon-512-maskable.png` — 512×512px

**How to create them:**

1. Open your icon source file in any image editor (Figma, GIMP, Photoshop, etc.)
2. For a 512×512 canvas, the safe zone is a centered 410×410 area (80% of 512). Keep all visible content inside this area.
3. Fill the entire 512×512 canvas with your background color (`#1a1a2e`) — do NOT leave transparency.
4. Export as PNG at both 512×512 and 192×192.

**Validate your icons:**
- Go to https://maskable.app/editor
- Upload your maskable icon
- Toggle through different mask shapes — make sure nothing important gets cropped

### 1b. Screenshots

Google Play requires at least 2 screenshots. The manifest also references these for the PWA install prompt on Android.

**Files to replace:**
- `public/screenshots/gameplay-portrait.png` — 1080×1920px (phone portrait)
- `public/screenshots/gameplay-landscape.png` — 1920×1080px (phone landscape)

**How to capture them:**

1. Run the game locally: `bun run dev`
2. Open Chrome at `http://localhost:5173`
3. Open DevTools (F12) → click the device toolbar icon (or Ctrl+Shift+M)
4. Set dimensions to **1080×1920** for portrait
5. Play the game until you have a good action shot
6. In DevTools, click the three-dot menu (⋮) → "Capture screenshot"
7. Repeat at **1920×1080** for landscape
8. Save them to the paths above

**Google Play screenshot requirements:**
- JPEG or PNG, 24-bit, no alpha
- Minimum dimension: 320px
- Maximum dimension: 3840px
- Aspect ratio cannot exceed 2:1
- You need **at least 2** screenshots for the store listing, but you can upload up to 8

### 1c. Deploy Updated Assets

After replacing the placeholder files:

```bash
bun run build
bun run deploy
```

Wait a few minutes for GitHub Pages to update, then verify at:
- `https://bigknoxy.github.io/toilet-runner/icons/icon-512-maskable.png`
- `https://bigknoxy.github.io/toilet-runner/screenshots/gameplay-portrait.png`

---

## Step 2: Register a Google Play Developer Account

1. Go to https://play.google.com/console/signup
2. Sign in with the Google account you want to own the app (you **cannot** transfer this later without effort — choose carefully)
3. Pay the **$25 one-time** registration fee
4. Fill out your developer profile (name, email, etc.)
5. Google may take **up to 48 hours** to verify your account before you can publish

---

## Step 3: Generate a Signing Keystore

The signing key is how Google verifies that app updates come from you. **If you lose this key, you can never update your app.** Back it up securely.

### 3a. Generate the keystore

```bash
keytool -genkeypair \
  -alias toilet-runner \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -keystore toilet-runner.keystore \
  -storepass YOUR_STORE_PASSWORD \
  -keypass YOUR_KEY_PASSWORD \
  -dname "CN=Big Knoxy, O=Big Knoxy, C=US"
```

Replace:
- `YOUR_STORE_PASSWORD` — a strong password for the keystore file
- `YOUR_KEY_PASSWORD` — a strong password for the key itself (can be the same)
- The `-dname` values with your actual info

This creates `toilet-runner.keystore` in your current directory.

### 3b. Back up the keystore

**Do this immediately.** Store copies in at least 2 secure locations:
- A password manager (1Password, Bitwarden, etc.)
- An encrypted cloud backup (Google Drive, iCloud, etc.)
- A USB drive in a safe place

Also save the passwords somewhere secure. You need both the keystore file AND the passwords to sign updates.

### 3c. Get the SHA-256 fingerprint

```bash
keytool -list -v \
  -keystore toilet-runner.keystore \
  -alias toilet-runner \
  -storepass YOUR_STORE_PASSWORD
```

Look for the line that says:

```
SHA256: AA:BB:CC:DD:EE:FF:...
```

Copy the full fingerprint (the `AA:BB:CC:...` part, including colons).

### 3d. Update assetlinks.json

Open `public/.well-known/assetlinks.json` and replace the placeholder:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.bigknoxy.toiletrunner",
      "sha256_cert_fingerprints": [
        "AA:BB:CC:DD:EE:FF:11:22:33:44:55:66:77:88:99:00:AA:BB:CC:DD:EE:FF:11:22:33:44:55:66:77:88:99:00"
      ]
    }
  }
]
```

Replace with your actual fingerprint from step 3c.

### 3e. Deploy the updated assetlinks.json

```bash
bun run build
bun run deploy
```

**Verify it's accessible** (this is critical — TWA validation will fail without it):

```bash
curl -s https://bigknoxy.github.io/toilet-runner/.well-known/assetlinks.json | head
```

You should see your JSON with the real fingerprint. If you get a 404, GitHub Pages may not be serving the `.well-known` directory — check that it's included in your build output.

---

## Step 4: Generate the TWA with Bubblewrap

Bubblewrap is Google's official tool for wrapping a PWA into an Android app.

### 4a. Install Bubblewrap

```bash
npm i -g @anthropic-ai/bubblewrap-cli
```

Or if you prefer npx (no global install):

```bash
npx @anthropic-ai/bubblewrap-cli init ...
```

### 4b. Create a directory for the TWA project

Do this **outside** the toilet-runner repo — it's a separate project:

```bash
mkdir ~/toilet-runner-twa
cd ~/toilet-runner-twa
```

### 4c. Initialize the TWA

```bash
bubblewrap init --manifest=https://bigknoxy.github.io/toilet-runner/manifest.json
```

Bubblewrap will read your manifest and ask you to confirm/edit several values:

| Prompt | Value to enter |
|--------|----------------|
| Domain | `bigknoxy.github.io` |
| URL path | `/toilet-runner/` |
| App name | `Toilet Runner` |
| Short name | `Toilet Runner` |
| Package name | `com.bigknoxy.toiletrunner` |
| App version name | Match your `package.json` version (e.g. `1.2.0`) |
| App version code | `1` (increment for each Play Store upload) |
| Status bar color | `#1a1a2e` |
| Splash screen color | `#1a1a2e` |
| Icon URL | Should auto-detect from manifest |
| Maskable icon URL | Should auto-detect from manifest |
| Signing key path | Path to your `toilet-runner.keystore` |
| Key alias | `toilet-runner` |

Bubblewrap may also offer to download the Android SDK and JDK if not found — let it do so.

### 4d. Build the app

```bash
bubblewrap build
```

This produces two files:
- `app-release-bundle.aab` — upload this to the Play Store
- `app-release-signed.apk` — use this for local testing

### 4e. Test the APK locally (optional but recommended)

If you have an Android device with USB debugging enabled:

```bash
adb install app-release-signed.apk
```

Or transfer the APK to your phone and install it manually (you'll need to enable "Install from unknown sources" temporarily).

**What to check:**
- App opens and shows the game (not a browser tab)
- The URL bar does NOT appear at the top (this means Digital Asset Links is working)
- If you see a URL bar, the `assetlinks.json` is either not deployed, not accessible, or the fingerprint doesn't match

---

## Step 5: Submit to Google Play

### 5a. Create the app in Play Console

1. Go to https://play.google.com/console
2. Click **"Create app"**
3. Fill in:
   - **App name**: Toilet Runner
   - **Default language**: English (United States)
   - **App or game**: Game
   - **Free or paid**: Free
4. Accept the declarations and click **"Create app"**

### 5b. Complete the store listing

Go to **Main store listing** in the left sidebar:

**Required fields:**
- **App name**: Toilet Runner
- **Short description** (max 80 chars): "Dodge poop obstacles as a toilet paper roll in this endless runner!"
- **Full description** (max 4000 chars): Write a fun description of the game
- **App icon**: Upload your 512×512 icon (the non-maskable one)
- **Feature graphic**: 1024×500 PNG or JPEG (promotional banner shown at the top of your listing — you'll need to create this)
- **Screenshots**: Upload at least 2 phone screenshots (the ones from Step 1b). You can add tablet/Chromebook screenshots too.

### 5c. Complete the content rating questionnaire

Go to **Content rating** in the left sidebar:

1. Click **"Start questionnaire"**
2. Select **"Game"** as your category
3. Answer honestly — the game has:
   - No violence (cartoon poop dodging is not violent)
   - No sexual content
   - No drug references
   - No gambling
   - No user-generated content
   - No data sharing
4. You'll likely get an **"Everyone"** (or "3+") rating

### 5d. Set up pricing and distribution

Go to **Countries / regions**:
- Select all countries (or whichever you want)

### 5e. Set the privacy policy

Go to **App content** → **Privacy policy**:
- Enter: `https://bigknoxy.github.io/toilet-runner/privacy-policy.html`

### 5f. App content declarations

Go through each section under **App content**:
- **Ads**: No ads
- **App access**: No restricted access (the full game is immediately available)
- **Data safety**: No data collected, no data shared (fill out the form honestly — the game only uses localStorage)
- **Government apps**: No
- **Financial features**: No

### 5g. Upload the AAB

Go to **Production** → **Releases**:

1. Click **"Create new release"**
2. Under "App signing", Google will ask about Play App Signing:
   - **Recommended**: Let Google manage your signing key. Upload your keystore when prompted. This protects against key loss.
   - **Alternative**: Manage signing yourself. You keep full control but risk losing the ability to update if you lose the key.
3. Upload `app-release-bundle.aab`
4. Fill in **Release notes** (e.g., "Initial release — dodge poop, unlock skins, compete on leaderboards!")
5. Click **"Review release"** then **"Start rollout to Production"**

### 5h. Wait for review

- Google reviews typically take **a few hours to a few days** for new apps
- You'll get an email when approved (or if changes are needed)
- Once approved, the app appears on the Play Store

---

## Updating the App Later

When you update the game:

1. Deploy the updated PWA to GitHub Pages as normal (`bun run deploy`)
2. The TWA automatically serves the latest version of your website — **no Play Store update needed** for web-only changes
3. You only need a new Play Store release if you change:
   - The app version code / version name
   - TWA configuration (splash screen, colors, etc.)
   - Store listing metadata

To push a TWA update:

```bash
cd ~/toilet-runner-twa
# Edit twa-manifest.json: bump appVersionCode and appVersion
bubblewrap build
# Upload new .aab to Play Console
```

---

## Troubleshooting

### URL bar appears in the TWA
- `assetlinks.json` is not accessible at `https://bigknoxy.github.io/toilet-runner/.well-known/assetlinks.json`
- The SHA-256 fingerprint doesn't match the signing key
- DNS/SSL issue on GitHub Pages
- Fix: verify with `curl` and compare fingerprints with `keytool -list`

### "App not installed" error on Android
- The APK may be signed with a debug key instead of your release key
- The device may not support TWA (requires Chrome 72+)

### Bubblewrap can't find JDK/Android SDK
- Let Bubblewrap download them automatically when prompted
- Or set `JAVA_HOME` and `ANDROID_HOME` environment variables manually

### Service worker doesn't update
- `vite-plugin-pwa` uses `autoUpdate` — the new SW activates on next visit
- Force update in Chrome DevTools: Application → Service Workers → "Update on reload"

### Lighthouse PWA audit fails
- Check that `manifest.json` is accessible and valid
- Check that the SW precaches all required assets
- Check that `start_url` loads when offline
- Run: Chrome DevTools → Lighthouse → check "Progressive Web App"
