# meanie-angular-log

[![npm version](https://img.shields.io/npm/v/meanie-angular-log.svg)](https://www.npmjs.com/package/meanie-angular-log)
[![node dependencies](https://david-dm.org/meanie/angular-log.svg)](https://david-dm.org/meanie/angular-log)
[![github issues](https://img.shields.io/github/issues/meanie/angular-log.svg)](https://github.com/meanie/angular-log/issues)
[![codacy](https://img.shields.io/codacy/4e1e3e31e0ed44759bea0cac8ef22d76.svg)](https://www.codacy.com/app/meanie/angular-log)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

AngularJS module to replace and extend the built in $log service

## Installation

You can install this package using `meanie`, `npm` or `bower`.

### meanie

```shell
meanie install angular-log
```

Then add `Log.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Log.Service']);
```

### npm

```shell
npm install meanie-angular-log
```

Then add as a dependency for your app:

```js
angular.module('App.MyModule', [require('meanie-angular-log')]);
```

### bower

```shell
bower install meanie-angular-log
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/meanie-angular-log/release/meanie-angular-log.js"></script>
```

Then add `Log.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Log.Service']);
```

## Usage

This module is a drop-in replacement for the built-in `$log` service:

```js
angular.module('App.MyModule').controller('MyController', function($log) {
  $log.log('Log');
  $log.info('Info');
  $log.warn('Warning');
  $log.error('Error');
  $log.debug('Debug');
  $log.trace();
  $log.clear();
  $log.dir(obj);
  $log.assert(val, true);
});
```

Note that due to services not being available in the configuration phase of Angular applications, the `$log` service cannot be used at that time.

## Issues & feature requests

Pull requests are welcome! Please create them against the [dev branch](https://github.com/meanie/angular-log/tree/dev) of the repository.

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-log issue tracker](https://github.com/meanie/angular-log/issues).

## Contributing

If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2015, [Adam Buczynski](http://adambuczynski.com)
