const $ = require('jquery');
const angular = require('angular');

// Controllers
const giveHub = require('./controller/giveHub');
const voPortal = require('./controller/voPortal');
const orPortal = require('./controller/orPortal');

// GiveHub Components
const ghNavbar = require('./component/gh-navbar/gh-navbar');
const home = require('./component/gh-page-home/gh-page-home');
const about = require('./component/gh-page-about/gh-page-about');
const volunteer = require('./component/gh-page-volunteer/gh-page-volunteer');
const org = require('./component/gh-page-org/gh-page-org');
const login = require('./component/gh-form-login/gh-form-login');
const signupUser = require('./component/gh-form-signup-user/gh-form-signup-user');
const signupOrg = require('./component/gh-form-signup-org/gh-form-signup-org');

// VoPortal Components
const voNavbar = require('./component/vo-navbar/vo-navbar');
const voProfile = require('./component/vo-page-profile/vo-page-profile');
const voDonate = require('./component/vo-page-donate/vo-page-donate');

// OrPortal Components
const orNavbar = require('./component/or-navbar/or-navbar');
