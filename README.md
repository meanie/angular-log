# @meanie/angular-log

[![npm version](https://img.shields.io/npm/v/@meanie/angular-log.svg)](https://www.npmjs.com/package/@meanie/angular-log)
[![node dependencies](https://david-dm.org/meanie/angular-log.svg)](https://david-dm.org/meanie/angular-log)
[![github issues](https://img.shields.io/github/issues/meanie/angular-log.svg)](https://github.com/meanie/angular-log/issues)
[![codacy](https://img.shields.io/codacy/4e1e3e31e0ed44759bea0cac8ef22d76.svg)](https://www.codacy.com/app/meanie/angular-log)


An extended drop in replacement for the built in Angular $log service

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`:

```shell
#yarn
yarn add @meanie/angular-log

#npm
npm install @meanie/angular-log --save
```

Include the script `node_modules/@meanie/angular-log/release/angular-log.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/@meanie/angular-log/release/angular-log.js"></script>
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

Please report any bugs, issues, suggestions and feature requests in the [@meanie/angular-log issue tracker](https://github.com/meanie/angular-log/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2015-2020, Adam Reis
