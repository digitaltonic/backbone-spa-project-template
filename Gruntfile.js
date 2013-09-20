module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: 'src/',
          outdir: 'docs/'
        }
      }
    },
    jshint: {
      app: ['src/app/**/*.js'],
      tests: ['src/test/**/*.js']
    },
    requirejs: {
      compile: {

        options: {
          name: 'demo-app',
          include: ['../vendor/requirejs/require.js', 'bootstrap-production'],
          mainConfigFile: 'src/app/config.js',
          out: 'dist/javascript/app.js',
          preserveLicenseComments: false,
        }
      }
    },
    shell: {
      runYuidocServer: {
        options: {
          stdout: true
        },
        command: 'yuidoc --server'
      },
      runPythonTestServer: {
        options: {
          stdout: true,
          execOptions: {
            cwd: 'src'
          }
        },
        command: 'python -m SimpleHTTPServer'
      },
      runPHPTestServer: {
        options: {
          stdout: true,
          execOptions: {
            cwd: 'src'
          }
        },
        command: 'php -S 0.0.0.0:8000'
      },
      runPythonProductionServer: {
        options: {
          stdout: true,
          execOptions: {
            cwd: 'dist'
          }
        },
        command: 'python -m SimpleHTTPServer'
      },
      runPHPProductionServer: {
        options: {
          stdout: true,
          execOptions: {
            cwd: 'dist'
          }
        },
        command: 'php -S 0.0.0.0:8000'
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-shell');

  grunt.task.registerTask('lint', ['jshint:app']);
  grunt.task.registerTask('build', ['lint', 'yuidoc', 'requirejs']);
  grunt.task.registerTask('generate-docs', ['yuidoc']);
  grunt.task.registerTask('show-docs', ['yuidoc', 'shell:runYuidocServer']);
  grunt.task.registerTask('run-server-test:python', ['shell:runPythonTestServer']);
  grunt.task.registerTask('run-server-test:php', ['shell:runPHPTestServer']);
  grunt.task.registerTask('run-server-production:python', ['build', 'shell:runPythonProductionServer']);
  grunt.task.registerTask('run-server-production:php', ['build', 'shell:runPHPProductionServer']);


};