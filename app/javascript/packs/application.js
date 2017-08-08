/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue'
import Navbar from './navbar.vue'
import People from './people.vue'
import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
    // Always needed, on every page
    const navbar = new Vue(Navbar).$mount('navbar')
    // this is only needed on some pages
    var peopleElement = document.getElementById('people')

    if(peopleElement != null) {
        const people = new Vue(People).$mount('people')
    }
})
