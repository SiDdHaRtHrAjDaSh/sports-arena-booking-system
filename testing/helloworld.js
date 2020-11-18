// var myCommand = {
    // name: 'say hi',
    // action: function () {
        // document
            // .querySelectorAll('p, a, span, li, button, th, td, h1, h2, h3, h4, h5, h6')
            // .forEach(function(el) {
                // el.textContent = 'hello!';
            // })
    // },
    // group: 'Greetings',
    // help: 'It shows "hello!" everywhere'
// }
// var rootContext = {
    // context: 'root', 
    // commands: [{
        // name: 'switch font',
        // action: function () { },
        // group: 'Font Picker',
        // help: 'Switch website font',
        // switchToContext: 'font-picker'
    // }]
// };

// var fontPickerContext = {
    // context: 'font-picker',
    // commands: [{
        // name: 'switch font to serif',
        // action: function () {
            // document.body.style.fontFamily = "serif"
        // },
        // group: 'Fonts',
        // help: 'Switch website font to serif',
        // switchToContext: 'root'
    // }, {
        // name: 'switch font to sans serif',
        // action: function () {
            // document.body.style.fontFamily = "sans-serif"
        // },
        // group: 'Fonts',
        // help: 'Switch website font to sans-serif',
        // switchToContext: 'root'
    // }, {
        // name: 'switch font to monospace',
        // action: function () {
            // document.body.style.fontFamily = "monospace"
        // },
        // group: 'Fonts',
        // help: 'Switch website font to monospace',
        // switchToContext: 'root'
    // }]
// };
// {
    // name: 'Font Picker',
    // description: 'Allows you to switch the font of every page',
    // icon: 'fa-font',
    // contexts: [{
        // context: 'root', 
        // commands: [{
            // name: 'switch font',
            // action: function () { },
            // group: 'Font Picker',
            // help: 'Switch website font',
            // switchToContext: 'font-picker'
        // }]
    // }, {
        // context: 'font-picker',
        // commands: [{
            // name: 'serif',
            // action: function () {
                // document.body.style.fontFamily = "serif"
            // },
            // group: 'Fonts',
            // help: 'Switch website font to serif',
            // switchToContext: 'root'
        // }, {
            // name: 'sans serif',
            // action: function () {
                // document.body.style.fontFamily = "sans-serif"
            // },
            // group: 'Fonts',
            // help: 'Switch website font to sans-serif',
            // switchToContext: 'root'
        // }, {
            // name: 'monospace',
            // action: function () {
                // document.body.style.fontFamily = "monospace"
            // },
            // group: 'Fonts',
            // help: 'Switch website font to monospace',
            // switchToContext: 'root'
        // }]
    // }]
// }
window.onload = function() {
  handsfreeCommands([{
    name: 'login',
    help: 'Opens the contact section of this website',
    group: 'Website sections'
    action: function() {
      window.location.href = '../views/examplelogin.html';
    }
  }, {
    name: 'open signup',
    help: 'Opens the home page of this website',
    group: 'Website sections'
    action: function() {
      window.location.href = '../views/examplesignup.html';
    }
  }]);
};