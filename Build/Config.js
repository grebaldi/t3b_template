/**
 * Config
 * @description Configure grunt tasks & options.
 */

var pkg = require("../package");
var configCreator = function() {
	"use strict";

	this.package = pkg,
	this.paths = {
		"private" : "Resources/Private",
		"public" : "Resources/Public",
	};
	this.Sass = {
		"sassDir" : this.paths.private + "/Sass",
		"cssDir" : this.paths.public + "/Stylesheets"
	};
	this.JavaScripts = {};
	this.JavaScripts.paths = {
		"devDir" : this.paths.private + "/Javascripts",
		"distDir" : this.paths.public + "/Javascripts"
	};
	this.JavaScripts.requireJS = {
		"config" : "Main",
		"libSourceFile" : "Libaries/RequireJS/require", // Relative to the "config" file
		"compileDistFile" : this.JavaScripts.paths.distDir + "/Main.min.js"
	};
	this.JavaScripts.jsHint = {
		"config" : "Build/JSHintConfig.json"
	};
	this.JavaScripts.modernizr = {
		"devSourceFile" : this.JavaScripts.paths.devDir + "/Libaries/Modernizr/modernizr.js",
		"buildDistFile" : this.JavaScripts.paths.distDir + "/Libaries/Modernizr-Custom.js"
	};
	this.Images = {
		"devDir" : this.paths.private + "/Images",
		"distDir" : this.paths.public + "/Images",
		"optimizationLevel" : 5
	};
	this.packageIsDefault = this.package.name === "t3b_template"; // Check if the defaults in 'package.json' are customized.
};

module.exports = new configCreator();
