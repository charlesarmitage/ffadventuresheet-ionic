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
