/**
 * Created by luis on 09/05/16.
 */
FlowRouter.route('/', {
    name: 'home',
    action() {

        BlazeLayout.render('mainLayout', {
            top: 'navBar',
            main: 'homeCarousel'
        });
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action() {
        BlazeLayout.render('mainLayout', {
            top: 'navBar',
            main: 'aboutLayout'
        });
    }
});
