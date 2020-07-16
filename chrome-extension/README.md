# Simple Chrome Extension
[![forthebadge](https://forthebadge.com/images/badges/as-seen-on-tv.svg)](https://forthebadge.com)

![logo](https://i0.wp.com/codementor.tech/wp-content/uploads/2019/07/spTZdYAjFlwt88pr2r17rEQ-1.png "logo")




 
Quickly setup chrome extension seed project with webpack, react, jquery, babel, bootstrap and react-bootstrap.

# Usage

## With npx just run
```
npx simple-chrome-extension project-name
```
## Without npx

Install simple-chrome-extension globally using

```
npm i -g simple-chrome-extension
```
then run 

```
simple-chrome-extension project-name
```

replace project-name with the name of your chrome extension.

# Runing Extension

1. cd into your extension directory
2. run `npm run watch`
3. webpack will create `dist` directory inside extension directory with the bundled code and keep watching for code changes

# Add extension to chrome

To test the extension 

1. Open chrome://extensions/ in the chrome browser


2. Enable developer mode by button on the top right ![Developer Mode](https://lh4.googleusercontent.com/bRQJjstXpYmFXy_mna363Id00Pz8LJ6dDQCebJvJ990v_3WWcEifkCfsQ2HUxKZHM9G5hpmN--ZkqZ3XNDZ12IRYzHt0ClVEHaY3xOxkpRZF5pLpRgE9_R4iSHrrQrOEwCPIKa6V "Developer Mode")


3. Click on load unpack button on top left and select the dist folder ![Load unpacked](https://lh6.googleusercontent.com/-fBaT9aWtboCKa70SRuejDkLF-QxAsNRmOklhRaeMGtuVchCBX33pZ5KbiZr09t0xU7oNuWMzwp-eTnBfwSqcWTJG8S30FgzR8_MGMZMve77jmwlYRYoO3wEpXzWv8amInT5QYpT "Load unpacked")


4. It will load our chrome extension like this ![extension](https://lh6.googleusercontent.com/G7cS6cLPh83gxAGpt33idJSlB4oqhHr3xx_BLMuRqZU8aCFi35THU0pigrO099LqCbuBszECKYWGrCBxIzuyN5YIwrg8v8wjTWLNupk9i-5jLfCu7vb6KXCraOaGeOFiljUH51hJ "extension")

5. Click on the icon next to the url section and it should render this popup ![result](http://codementor.tech/wp-content/uploads/2019/07/Screen-Shot-2019-07-18-at-8.19.54-PM.png "result")

# Project Structure

* `src` folder contains everything other than boilerplate code
* `assets` folder contains static assets like css, js files, images and icons
* `index.html` is the default_popup of chrome extension
* `App.js` contains the root component, It renders the TodoList component
* `TodoList.js` contains the TodoList component with all the logic for adding and removing the task from the list

# Demo

[Click here to add TodoList extension to your chrome browser](https://chrome.google.com/webstore/detail/todo-list-chrome-extensio/mpodmjidjogbkfdificcepecjpdaccog) - Please don't forget to give it 5-star rating ;)
![result](http://codementor.tech/wp-content/uploads/2019/07/Screen-Shot-2019-07-18-at-8.24.19-PM.png "result")

# Acknowledgments

* Inspired from https://github.com/Kornil/simple-react-app
