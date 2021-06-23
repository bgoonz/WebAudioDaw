

const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const runSequence = require("run-sequence");
const del = require("del");

gulp.task("clean-up", () => {
  del.sync(["assets/**", "!assets/"]);
});

gulp.task("assets-lib", () => {
  return gulp
    .src("node_modules/lit-html/**/*")
    .pipe(gulp.dest("assets/lit-html/"));
});

gulp.task("assets-components", () => {
  return gulp.src("src/components/Components.js").pipe(gulp.dest("assets/"));
});

gulp.task("assets-styles", () => {
  return gulp
    .src("src/styles/*.css")
    .pipe(concatCss("was-styles.css"))
    .pipe(gulp.dest("assets/"));
});

gulp.task("watch", () => {
  gulp.watch(["src/components/Components.js"], ["assets-components"]);
  gulp.watch(["src/styles/*.css"], ["assets-styles"]);
});

gulp.task("default", () => {
  runSequence("clean-up", "assets-lib", "assets-components", "assets-styles");
});
