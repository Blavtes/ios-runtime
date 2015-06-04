iOS Runtime Changelog
=====================

1.1.0
==
[Milestone 1.1.0](https://github.com/NativeScript/ios-runtime/issues?q=milestone%3A1.1.0), [Release v1.1.0](https://github.com/NativeScript/ios-runtime/releases/tag/v1.1.0).

### Fixed
* The NativeScript CLI iOS template project now strips non-device architectures from embedded frameworks
* You can now require paths with .js extension
* Fixed issue where invoking an Objective-C class cluster as a JavaScript constructor with `new` would cause memory leaks
* Fixed issue where an inspector frontend connecting to the same app multiple times in a single session would not display sources
* Accessing JavaScript from multiple threads is properly synchronized
* The `tns-ios` package is versioned

### New
* NativeScript for iOS is now built using CMake
* The runtime is now distributed as a static library and a Cocoa Framework
* API Metadata now includes information about Clang modules
* NativeScript apps for iOS no longer ship with a WebSocket server for debugging, but rely on a plain TCP socket instead
* Removed backwards compatibility for the pre-0.10 behavior when looking for *tns_modules*

0.10.0 (2015, April 17)
==
[Milestone 0.10.0](https://github.com/NativeScript/ios-runtime/issues?q=milestone%3A0.10.0), [Release v0.10.0](https://github.com/NativeScript/ios-runtime/releases/tag/v0.10.0).

### Fixed
 * We will try to freeze the application on crash if there is a debugger attached so the debugger can be used to examine the errors.
 * When Objective-C exception is thrown from code called from JavaScript, it will be wrapped in JavaScript Error and reported to the debugger.
 * We have fixed the “tagged pointers“ bug on iPhone 5s with iOS7.0.
 * We have dramatically reduced the “tns-ios” package size by stripping the debug symbols from the NativeScript.framework.
 * We have fixed the project template to support properly the app-id provided from the CLI.
 * We’ve cleaned the package.tgz from some xcodebuild logs and the Chrome version of the inspector.
 * Made submodules public, fixed builds
 * *tns_modules* are now expected in the app folder. We are backward compatible but will remove the compatibility in future.
 * We have updated the project template to use larger resolution
 * Promise reactions have too low a priority on the runloop

### New
 * JavaScript Date is implicitly converted to NSDate and vice versa.
 * JSON object and JS Map, when passed to native, are wrapped in NSDictionary. NSDictionaries do **not** behave as JSON objects when returned from native.

