﻿define(function(require) {
    var system = require('durandal/system');

    return {
        displayName: 'First Page',
        activate: function () {
            //called by the activator when entering this screen
            system.log('Hello from first\'s activate function');
        }
    };
});