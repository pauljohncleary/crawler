'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      js: {
        files: ['*.js', 'test/**/*.js', 'lib/**/*.js', 'config/**/*.js'],
        tasks: ['jshint:all', 'mochaTest', 'mocha_istanbul'],
        options: {
          livereload: false
        }
      }
    },

    nodemon: {
      dev: {
        script: 'app.js',
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
      all: ['*.js', 'test/**/*.js', 'api/**/*.js', 'config/**/*.js']
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.spec.js']
      }
    },

    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
            mask: '*.spec.js'
        }
      }
    }

  });

  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('default', ['jshint', 'mochaTest', 'mocha_istanbul', 'concurrent']);

};
