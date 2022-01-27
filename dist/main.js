/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"I'm bundled!\")\n\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n  apiKey: \"AIzaSyB3_ktYCDAvZR8ViEgmkKT8CDMPm1Q53Zo\",\n  authDomain: \"safetydungeon.firebaseapp.com\",\n  projectId: \"safetydungeon\",\n  storageBucket: \"safetydungeon.appspot.com\",\n  messagingSenderId: \"156587932337\",\n  appId: \"1:156587932337:web:116ae943f4f2ff92790090\"\n};\n\n// Initialize Firebase\nconst app = initializeApp(firebaseConfig);\nconst db = getFirestore(app);\n\n// Initialize the FirebaseUI Widget using Firebase.\nconst ui = new firebaseui.auth.AuthUI(firebase.auth());\n\n// Add the email provider ID to the list of FirebaseUI signInOptions\nui.start('#firebaseui-auth-container', {\n  signInOptions: [\n    {\n      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,\n      requireDisplayName: false\n    }\n  ]\n});\n\n// Specify FirebaseUI config\nconst uiConfig = {\n  callbacks: {\n    signInSuccessWithAuthResult: function(authResult, redirectUrl) {\n      // User successfully signed in.\n      // Return type determines whether we continue the redirect automatically\n      // or whether we leave that to developer to handle.\n      return true;\n    },\n    uiShown: function() {\n      // The widget is rendered.\n      // Hide the loader.\n      document.getElementById('loader').style.display = 'none';\n    }\n  },\n  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.\n  signInFlow: 'popup',\n  signInSuccessUrl: '<url-to-redirect-to-on-success>',\n  signInOptions: [\n    // Leave the lines as is for the providers you want to offer your users.\n      // firebase.auth.GoogleAuthProvider.PROVIDER_ID,\n      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,\n      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,\n      // firebase.auth.GithubAuthProvider.PROVIDER_ID,\n      firebase.auth.EmailAuthProvider.PROVIDER_ID,\n      // firebase.auth.PhoneAuthProvider.PROVIDER_ID\n  ],\n  // Terms of service url.\n  tosUrl: '<your-tos-url>',\n  // Privacy policy url.\n  privacyPolicyUrl: '<your-privacy-policy-url>'\n};\n\n// The start method will wait until the DOM is loaded.\nui.start('#firebaseui-auth-container', uiConfig);\n\n\n\n\n//# sourceURL=webpack://safetydungeon/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;