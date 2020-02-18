window._ = require('lodash');


try {
   
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}



window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

newFunction();

function newFunction() {
    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    }
    else {
        console.error('CSRF token not found: http://laravel.com/docs/csrf#csrf-x-csrf-token');
    }
}
