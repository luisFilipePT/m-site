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




Template.navBar.helpers({
    logoPath: 'Logo'
});

Template.navBar.onRendered(function () {
    console.log('rendered navBar');
    $('[data-toggle="popover"]').popover();
});

Template.navBar.events({
    'click .js-work'(event, instance) {

        console.log('clicked!!!', event, instance);
        // Show the backdrop

  }
});