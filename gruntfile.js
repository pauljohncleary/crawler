'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      js: {
        files: ['*.js', 'test/**/*.js', 'lib/**/*.js'],
        tasks: ['jshint:all', 'mochaTest'],
        options: {
          livereload: false
        }
      }
    },

    nodemon: {
      dev: {
        script: 'api.js',
        options: {
          args: [],
          ext: 'js',
          nodeArgs: ['--debug=7000'],
          delayTime: 1,
          cwd: __dirname
        }
      }
    },

    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['*.js', 'test/**/*.js', 'lib/**/*.js']
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.spec.js']
      }
    }

  });

  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('default', ['jshint', 'mochaTest', 'concurrent']);

};
