var 
	gulp = require("gulp"),
	ejs = require("gulp-ejs"),
	merge = require("merge"),
	config = require("./config.js"),
	methods = require("./methods.js"),
	options = merge.recursive(config, methods);

gulp.task("build", function () {
	return gulp.src("./views/pages/**/*.ejs")
		.pipe(ejs(config))
		.pipe(gulp.dest("./public"));
});

gulp.task("default", ["build"]);