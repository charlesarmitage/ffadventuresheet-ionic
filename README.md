# Fantasy Adventure Sheet - Ionic #

- Rebuild of Fantasy Adventure Sheet exploring Ionic framework
(Given: npm installed. If not install node-js to get npm package manager)

## Install Ionic with Yeoman ##

- Install Yeoman and the ionic generator
	npm install -g generator-ionic-gulp yo

- Create project directories
	mkdir ffadventuresheet-ionic
	cd ffadventuresheet-ionic

- Run the generator
	yo ionic-gulp
	(Select latest version of angular v1)

- Install Sass
	gem install sass

## Run in browser ##

- gulp

## Run in emulator ##

- gulp -r android

(You may need to install cordova android platform. Use: cordova platform add android)

## Missing dependencies ##

If you are failing to run gulp with module failures - perhaps after cleaning the git repository:
	bower install
	npm install

To re-install the bower and npm dependencies for the project

## Installing Karma for testing ##

- npm install karma --save-dev
(Save the package configuration in package.json so it can be re-installed with just 'npm install')

- npm install karma-jasmine karma-phantomjs-launcher karma-chrome-launcher karma-browserify --save-dev
	(plugins for karma to use the unit test framework Jasmine, Chrome, PhantomJS and browserify)

- npm install -g karma-cli
(Install the command line karma interface)

- Run: karma init
(Follow instructions)

- Run: karma start
(Starts karma)

### Add test directories and sources ###
- In karma.conf.js add:

-- files: [
      'bower_components/angular/angular.js',
      'app/scripts/**/*.js',
      'tests/*.js'
    ],


## Testing Angular ##
Following (loosely instructions here: https://docs.angularjs.org/guide/unit-testing)

### Install angular-mocks ###

- bower install angular-mocks --save-dev
- Add 'bower_components/angular-mocks/angular-mocks.js' to karma.conf.js

- Add: 
```
beforeEach(module('FantasyAdventureSheet')); // to test file to load Angular module
```
 - Add controller loading;

 ```
 	var $scope,
		$controller;

	beforeEach(inject(function(_$controller_){

	   $scope = {};
	   function buildController(){
	   		return _$controller_('HomeController', { $scope: $scope });
	   };

	   $controller = buildController();
	}));
```

- Add dependencies to karma.conf.js:

```
'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/ngCordova/dist/ng-cordova.js',
      'bower_components/ionic/js/ionic.js',
      'bower_components/ionic/js/ionic-angular.js',
```