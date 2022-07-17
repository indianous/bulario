require("dotenv").config();
const browser = require('./bots/browser');
const pageController = require('./bots/pageController');

pageController(browser.startBrowser());