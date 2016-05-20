// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './index.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// Template.mainLayout.onRendered(function () {
//     console.log('rendered main layout');
// });
//
// Template.mainLayout.onDestroyed(function () {
//
//     console.log('destroy')
// });
//
// Template.test.onRendered(function () {
//     console.log('rendered test');
// });


var utils = require('../lib/utils');

Template.navBar.helpers({
    logoPath: 'Logo'
});

Template.navBar.onRendered(function () {
    console.log('rendered navBar');

    this.aboutMenu = new Tether({
        element: '.drop-work',
        target: '.navbar',
        attachment: 'top center',
        targetAttachment: 'bottom center'
    });
});

Template.navBar.events({
    
    'click .js-work'(event, instance) {
        event.preventDefault();

        var dropWork = $('.drop-work');

        dropWork.toggle();

        if (dropWork.is(':visible')) {
            // element is Visible
            utils.blockAndLoad('#wrapper-nav-bar', true, true);
        } else {
            // element is Hidden
            utils.blockAndLoad('#wrapper-nav-bar', false, true);
        }

        instance.aboutMenu.position();
  }
});