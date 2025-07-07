# QR Code Scanner

A React Native application built with Expo for scanning QR codes using the device's camera.

## Features

- 📱 **Camera Integration**: Uses device camera to scan QR codes
- 🔐 **Permission Handling**: Automatically requests camera permissions
- 🎯 **QR Code Detection**: Real-time QR code scanning and detection
- 🚫 **Duplicate Prevention**: Prevents multiple scans of the same QR code
- 📱 **Cross Platform**: Works on both iOS and Android

## Screenshots

*Add screenshots of your app here*

## Tech Stack

- **React Native**: 0.79.5
- **Expo**: ~53.0.17
- **TypeScript**: ~5.8.3
- **expo-camera**: ~16.1.10
- **expo-status-bar**: ~2.2.3

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd projectFinalM3/rn-qrcode
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

## Running the App

### Development Mode

```bash
# Start Expo development server
npm start
```

This will open the Expo DevTools in your browser. You can then:
- Scan the QR code with the Expo Go app on your phone
- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator

### Platform Specific

```bash
# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run on Web
npm run web
```

## How to Use

1. **Launch the app** on your device or emulator
2. **Tap "ler QR Code"** button to open the camera
3. **Grant camera permissions** when prompted
4. **Point your camera** at a QR code
5. **The app will automatically detect** and display the QR code content
6. **Tap "Fechar"** to close the camera view

## Project Structure

```
rn-qrcode/
├── App.tsx                 # Main application component
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── metro.config.js        # Metro bundler configuration
├── app.json              # Expo configuration
├── android/              # Android specific files
├── ios/                  # iOS specific files
└── index.js              # Entry point
```

## Key Components

### App.tsx
- Main application component
- Handles camera permissions
- Manages QR code scanning functionality
- Implements duplicate scan prevention

### Features Implemented
- **Camera Permission Management**: Uses `useCameraPermissions` hook
- **QR Code Scanning**: Real-time barcode detection with `CameraView`
- **Modal Interface**: Camera view opens in a modal
- **Scan Lock**: Prevents multiple scans of the same QR code
- **Error Handling**: Graceful error handling for permission denials

## Configuration

### Camera Permissions
The app automatically requests camera permissions when the scan button is pressed. If permissions are denied, an alert is shown.

### QR Code Detection
The app uses Expo Camera's `onBarcodeScanned` callback to detect QR codes in real-time.

## Troubleshooting

### Common Issues

1. **Camera not working**
   - Ensure camera permissions are granted
   - Check if the device has a camera
   - Restart the app if permissions were denied

2. **Build errors**
   - Clear Metro cache: `npx expo start --clear`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

3. **iOS build issues**
   - Ensure Xcode is properly installed
   - Run `cd ios && pod install` if using CocoaPods

4. **Android build issues**
   - Ensure Android Studio and SDK are properly configured
   - Check that ANDROID_HOME environment variable is set

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about your problem

---

**Note**: This app requires camera access to function properly. Make sure to grant camera permissions when prompted. 