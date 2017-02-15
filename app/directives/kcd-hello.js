export default ngModule => {

    if (ON_TEST) {
      require('./kcd-hello.test.js')(ngModule);
    }

    ngModule.directive('kcdHello', () => {
        require('./kcd-hello.css');
        return {
            restrict: 'E',
            scope: {},
            template: require('./kcd-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                var vm = this;
                vm.greeting = 'Hello, Webpack';
            }
        };
    });
};
