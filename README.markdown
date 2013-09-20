Boilerplate project which includes RequireJS, LoDash, Backbone and Marionette.
====================================

A simple project scaffold that blends RequireJS, Backbone and Marionette into a sane project template.

>Note that Marionette has been modified, to better fit the way want to augment the core Marionette Application object. Mocha tests are included to cover this change.

When the template is running successfully in development mode, it will output a console message.

## Installing the Project Pre-Requisites

This project utilises Grunt as the task runner to generate documentation, lint, and to build the final mini & uglified javascript (amongst other things).

### Installing the Task Runner & dependencies

+ Ensure you have a working version of node, including npm.
+ Ensure the grunt cli is installed: `npm install grunt-cli -g`
+ Ensure the jshint is installed: `npm install jshint -g`
+ Install the dependancies as defined in the package.json: `npm install`

### Installing the Test Runner

Currently the test suite is browser based, although should run through phantomjs without modification.

* Install the Test'em, the test runner: `npm install testem -g`

## Running the Project Template

###  In Development Mode.
Fire up your favourite webserver:

```
cd src;
php -S 0.0.0.0:8000
```

or

```
cd src
python -m SimpleHTTPServer
```

###  In Production Mode.

```
grunt build
cd dist
php -S 0.0.0.0:8000
```

##Running the Tests

```
cd src
testem
```

##Reading the Docs

```
grunt show-docs
```

## Linting the code
```
grunt lint
```

## Building for production mode

```
grunt build
```
