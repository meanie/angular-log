# Meanie - Angular Log

[![npm version](https://img.shields.io/npm/v/meanie-angular-log.svg)](https://www.npmjs.com/package/meanie-angular-log)
[![node dependencies](https://david-dm.org/meanie/angular-log.svg)](https://david-dm.org/meanie/angular-log)
[![github issues](https://img.shields.io/github/issues/meanie/angular-log.svg)](https://github.com/meanie/angular-log/issues)
[![codacy](https://img.shields.io/codacy/abcdefgh.svg)](https://www.codacy.com/app/meanie/angular-log)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An extended replacement for Angular's $log service for [Meanie](https://github.com/meanie/meanie) projects.

## Installation
Install using the [Meanie CLI](https://www.npmjs.com/package/meanie):
```shell
meanie install angular-log
```

## Usage
Include the service as a dependency and inject it into your modules:
```js
angular.module('App.MyModule', [
  'Utility.Log.Service'
]).controller('MyController', function($log) {
  //Use the $log service
});
Use it in your modules:
```js
$log.log('Log message');
$log.warn('Warning');
$log.error('Error');
$log.debug('Debug');
$log.trace();
$log.assert(a, true);
```

## Issues & feature requests
Please report any bugs, issues, suggestions and feature requests in the appropriate issue tracker:
* [Module issue tracker](https://github.com/meanie/angular-log/issues)
* [Meanie Boilerplate issue tracker](https://github.com/meanie/boilerplate/issues)
* [Meanie CLI issue tracker](https://github.com/meanie/meanie/issues)

## Contributing
If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License
(MIT License)

Copyright 2015, [Adam Buczynski](http://adambuczynski.com)
