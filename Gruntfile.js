'use strict';

module.exports = function(grunt) {

// Initial configuration
// ========================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: { // task name
        options: {
          port: '8000',
          protocol: 'http',
          hostname: 'localhost',
          base: 'app',
          keepalive: true,
          livereload: true,
          open: true
        }
      }
    },
    wiredep: {
      task: {
        src: ['app/index.html'],
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: '.jshintrc'
      },
      all: [
        'GruntFile.js',
        'app/scripts/*',
        'test/spec/*'
      ]
    },
    sass: {
      dist: {
        files: {
          'app/stylesheets/main.css': 'app/sass/main.sass'
        },
        options: {
          compass: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      styles: {
        files: ['app/sass/*.sass'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['app/scripts/*.js', 'GruntFile.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      }
    }
  });
// ========================================================

// Loading npm tasks
// ========================================================
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
// ========================================================

// Register npm tasks
// ========================================================
  grunt.registerTask('default', ['connect', 'wiredep', 'jshint', 'sass', 'watch']);
// ======================================================== 

};