import './styles/style.css';
import test from './module/test-01.js';

var ghpages = require('gh-pages');
ghpages.publish('dist', function (err) {});

console.log('Hello webpack');
test();
