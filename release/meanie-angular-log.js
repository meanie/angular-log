/**
 * meanie-angular-log * https://github.com/meanie/angular-log
 *
 * Copyright (c) 2016 Adam Reis <adam@reis.nz>
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';

  /**
   * Module definition and dependencies
   */

  angular.module('Log.Service', [])

  /**
   * Provider definition
   */
  .provider('$log', function $logProvider() {

    //Disabled/enabled log methods
    this.disabled = null;
    this.enabled = null;

    /**
     * Set disabled log methods
     */
    this.disable = function (methods) {
      if (typeof methods === 'string') {
        methods = [methods];
      }
      this.disabled = methods;
      this.enabled = null;
    };

    /**
     * Set enabled log methods
     */
    this.enable = function (methods) {
      if (typeof methods === 'string') {
        methods = [methods];
      }
      this.enabled = methods;
      this.disabled = null;
    };

    /**
     * Service getter
     */
    this.$get = ['$window', function ($window) {

      //Get enabled/disabled log methods
      var enabled = this.enabled;
      var disabled = this.disabled;

      /**
       * Helper to check if a method is enabled
       */
      function isEnabled(method) {

        //Enabled methods specified?
        if (angular.isArray(enabled)) {
          if (enabled.indexOf('all') !== -1 || enabled.indexOf(method) !== -1) {
            return true;
          }
          return false;
        }

        //Disabled methods specified?
        if (angular.isArray(disabled)) {
          if (disabled.indexOf('all' !== -1 || disabled.indexOf(method) !== -1)) {
            return false;
          }
          return true;
        }

        //Otherwise, allowed
        return true;
      }

      /**
       * Helper to format error
       */
      function formatError(arg) {
        if (arg instanceof Error) {
          if (arg.stack) {
            arg = arg.message && arg.stack.indexOf(arg.message) === -1 ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
          } else if (arg.sourceURL) {
            arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
          }
        }
        return arg;
      }

      /**
       * Get logger function
       */
      function logger(method) {

        //Not enabled?
        if (!isEnabled(method)) {
          return angular.noop;
        }

        //Get console and log function
        var console = $window.console || {};
        var logFn = console[method] || console.log || angular.noop;
        var hasApply = false;

        //Note: reading logFn.apply throws an error in IE11 in IE8 document mode.
        //The reason behind this is that console.log has type "object" in IE8...
        try {
          hasApply = !!logFn.apply;
        } catch (e) {}

        //Function present
        if (hasApply) {
          return function () {
            var args = [];
            angular.forEach(arguments, function (arg) {
              args.push(formatError(arg));
            });
            return logFn.apply(console, args);
          };
        }

        //We are IE which either doesn't have window.console => this is noop and we do nothing,
        //or we are IE where console.log doesn't have apply so we log at least first 2 args
        return function (arg1, arg2) {
          logFn(arg1, arg2 === null ? '' : arg2);
        };
      }

      //Interface
      return {
        log: logger('log'),
        info: logger('info'),
        warn: logger('warn'),
        error: logger('error'),
        debug: logger('debug'),
        assert: logger('assert'),
        clear: logger('clear'),
        trace: logger('trace'),
        dir: logger('dir')
      };
    }];
  });
})(window, window.angular);