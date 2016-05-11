/**
 * Created by luis on 09/05/16.
 */
FlowRouter.route('/', {
    name: 'home',
    action() {

        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action() {
        var windowTitle = 'teste';
        BlazeLayout.render('mainLayout', {main: 'test', content: windowTitle});
    }
});
