# meanie-angular-log

[![npm version](https://img.shields.io/npm/v/meanie-angular-log.svg)](https://www.npmjs.com/package/meanie-angular-log)
[![node dependencies](https://david-dm.org/meanie/angular-log.svg)](https://david-dm.org/meanie/angular-log)
[![github issues](https://img.shields.io/github/issues/meanie/angular-log.svg)](https://github.com/meanie/angular-log/issues)
[![codacy](https://img.shields.io/codacy/4e1e3e31e0ed44759bea0cac8ef22d76.svg)](https://www.codacy.com/app/meanie/angular-log)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An extended drop in replacement for the built in Angular $log service

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `npm` or `bower`.

### npm

```shell
npm install meanie-angular-log --save
```

Include the script `node_modules/meanie-angular-log/release/meanie-angular-log.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/meanie-angular-log/release/meanie-angular-log.js"></script>
```

Add `Log.Service` as a dependency for your app.

### bower

```shell
bower install meanie-angular-log
```

Include the script `bower_components/meanie-angular-log/release/meanie-angular-log.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="bower_components/meanie-angular-log/release/meanie-angular-log.js"></script>
```

Add `Log.Service` as a dependency for your app.

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

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-log issue tracker](https://github.com/meanie/angular-log/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2015-2020, Adam Reis
