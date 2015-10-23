/*
	App configuration
*/

define('app', [
	"libs/core",
	"helpers/menu",
	"helpers/locale",
	"helpers/theme",
], function(core, menu, locale, theme){


	//webix.codebase = "libs/webix/";
	//CKEditor requires full path
	//webix.codebase = document.location.href.split("#")[0].replace("index.html","")+"libs/webix/";
    //
	//if(!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
	//	webix.CustomScroll.init();


	//if (webix.production)
		//tracker.init({
		//	accessToken: '650b007d5d794bb68d056584451a57a8',
		//	captureUncaught: true,
		//	source_map_enabled: true,
		//	code_version:"0.8.0",
		//	payload: {
		//		environment: 'production'
		//	}
		//});

	//configuration
	var app = core.create({
		id:			"admin-demo",
		name:		"Webix Admin",
		version:	"0.1",
		debug:		true,
		start:		"/app/dashboard"
	});

	app.use(menu);
	app.use(locale);
	app.use(theme);

	return app;
});
Meteor.startup(function(){
	Subs = new SubsManager({
		// maximum number of cache subscriptions
		cacheLimit: 10,
		// any subscription will be expire after 5 minute, if it's not subscribed again
		expireIn: 5
	});

	Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL

	App = require('app');

	webix.codebase = document.location.href.split("#")[0].replace("index.html","")+"libs/webix/";
	console.log(webix.codebase);
	if(!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
		webix.CustomScroll.init();
	console.log(App);
})