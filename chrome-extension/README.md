# Tweet Signer Extension for Google Chrome
![logo](src/assets/img/icons/tweet_signature32.png)

# Running the extension (Method 1):
In the `chrome-extension` directory look for the folder => `final-extension`. Follow the steps to [add the extension](#add-extension-to-chrome) to chrome.

# Runing Extension (Method 2)
1. cd into your extension directory
1. Install dependencies using yarn, i.e. `yarn install`
2. run `yarn run watch`
3. webpack will create `dist` directory inside extension directory with the bundled code and keep watching for code changes

# Add extension to chrome

To test the extension 

1. Open chrome://extensions/ in the chrome browser


2. Enable developer mode by button on the top right 

![](https://lh4.googleusercontent.com/bRQJjstXpYmFXy_mna363Id00Pz8LJ6dDQCebJvJ990v_3WWcEifkCfsQ2HUxKZHM9G5hpmN--ZkqZ3XNDZ12IRYzHt0ClVEHaY3xOxkpRZF5pLpRgE9_R4iSHrrQrOEwCPIKa6V "Developer Mode")


3. Click on load unpack button on top left and select the `final-extension` folder

![](https://lh6.googleusercontent.com/-fBaT9aWtboCKa70SRuejDkLF-QxAsNRmOklhRaeMGtuVchCBX33pZ5KbiZr09t0xU7oNuWMzwp-eTnBfwSqcWTJG8S30FgzR8_MGMZMve77jmwlYRYoO3wEpXzWv8amInT5QYpT "Load unpacked")


4. It will load our chrome extension like below

 ![](images/extension.png)

5. Enter a private key in settings to get started

![](images/settings.png)

6. Type in the tweet to generate QR Code

![](images/result.png)

# Project Structure

* `src` folder contains everything other than boilerplate code
* `assets` folder contains static assets like css, js files, images and icons
* `index.html` is the default_popup of chrome extension
* `App.js` contains the root component, It renders the TodoList component
* `TwitterGPG.js` contains the TwitterGPG component with all the logic for generating a QRCode from the GPG signature of the tweet
