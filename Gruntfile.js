module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      jsApp: {
        src: ['public/app-src/js/app.js', 'public/app-src/js/controller/*'],
        dest: 'public/app-build/js/app.js'
      },
      jsLib: {
        src: [
          'public/app-src/js/lib/bower/angular/angular.js',
          'public/app-src/js/lib/bower/jquery/jquery.js'
        ],
        dest: 'public/app-build/js/lib.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/app-build/js/app.min.js': ['<%= concat.jsApp.dest %>'],
          'public/app-build/js/lib.min.js': ['<%= concat.jsLib.dest %>']
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadTasks("./tasks");

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify', 'add-ng-controller']);

};