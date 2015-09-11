/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  base_dir: 'dist',
  build_dir: 'dist/build',
  compile_dir: 'dist/compile'  ,
  css_parser: 'less',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', 'src/conf.js',  '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],
    html: [ 'src/index.html' ],
    sass: ["src/sass/main.scss", "src/app/*/**/.scss"],
    less: ['bower_components/angular-loading-bar/src/loading-bar.css', 'src/less/main.less', 'src/app/**/*.less']
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'bower_components/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`bower_components/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/angular-ui-utils/modules/route/route.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/satellizer/satellizer.js',
      'bower_components/cr-loading/cr-loading.js',
      'bower_components/cr-session/cr-session.js',
      'bower_components/cr-remote/cr-remote.js',
      'bower_components/cr-acl/cr-acl.js',
      'bower_components/cr-identity/cr-identity.js',
      'bower_components/angulartics/src/angulartics.js',
      'bower_components/angulartics-google-analytics/lib/angulartics-google-analytics.js',
      'bower_components/ngCordova/dist/ng-cordova.js',
      'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
      'bower_components/angular-touch/angular-touch.js'
    ],
    css: [
    ],
    fonts: [
      'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
      'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
      'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
      'bower_components/font-awesome/fonts/fontawesome-webfont.woff',
      'bower_components/font-awesome/fonts/fontawesome-webfont.woff2',
      'bower_components/font-awesome/fonts/FontAwesome.otf',
    ],
    assets: []
  },
  phonegap_files: {
    js: [
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/angular-ui-utils/modules/route/route.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/satellizer/satellizer.js',
      'bower_components/cr-loading/cr-loading.js',
      'bower_components/cr-session/cr-session.js',
      'bower_components/cr-remote/cr-remote.js',
      'bower_components/cr-acl/cr-acl.js',
      'bower_components/cr-identity/cr-identity.js',
      'bower_components/angulartics/dist/angulartics.min.js',
      'bower_components/angulartics/dist/angulartics-ga.min.js',
      'bower_components/ngCordova/dist/ng-cordova.js',
      'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
      'bower_components/angular-touch/angular-touch.js'
    ],
    css: [
    ],
    fonts: [
      'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
      'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
      'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
      'bower_components/font-awesome/fonts/fontawesome-webfont.woff',
      'bower_components/font-awesome/fonts/fontawesome-webfont.woff2',
      'bower_components/font-awesome/fonts/FontAwesome.otf',
    ],
    assets: []
  }
};
