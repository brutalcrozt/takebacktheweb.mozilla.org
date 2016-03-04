'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);
  
  var tabzilla = require('mozilla-tabzilla');
  
  var jsFileList = [
    //'assets/vendor/modernizr.js',
    //'assets/vendor/bootstrap/js/transition.js',
    //'assets/vendor/bootstrap/js/alert.js',
    //'assets/vendor/bootstrap/js/button.js',
    //'assets/vendor/bootstrap/js/modal.js',
    //'assets/vendor/bootstrap/js/tooltip.js',
    //'assets/vendor/bootstrap/dist/js/bootstrap.min.js',
    //'assets/js/plugins/jquery.waypoints.js',
    //'assets/js/plugins/jquery.waypoints-sticky.js',
    'assets/js/index.js'
  ];

  grunt.initConfig({
    
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.js',
        '!assets/**/*.min.*'
      ]
    },
    
    less: {
      dev: {
        files: {
          'assets/css/main.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          includePaths: [tabzilla.includePaths],
          compress: false,
          sourceMap: true,
          sourceMapFilename: 'assets/css/main.css.map',
          sourceMapRootpath: '/'
        }
      },
      build: {
        files: {
          'assets/css/main.min.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          includePaths: [tabzilla.includePaths],
          compress: true
        }
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: 'assets/css/'
          }
        },
        src: 'assets/css/main.css'
      },
      build: {
        src: 'assets/css/main.min.css'
      }
    },
    
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [jsFileList]
        }
      },
      dev: {
        files: {
          'assets/js/scripts.js': [jsFileList]
        }
      }
    },
    
    watch: {
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/**/*.less'
        ],
        tasks: ['less:dev', 'autoprefixer:dev']
      },
      js: {
        files: [
          jsFileList,
          '<%= jshint.all %>',
          'assets/js/pages/*.js'
        ],
        tasks: ['jshint', 'uglify:dev']
      }
    },
    
    copy: {
      main: {
        files: [
          {flatten: true, expand: true, src: ['assets/vendor/mozilla-tabzilla/media/img/*'], dest: 'assets/media/img'}
        ]
      }
    }
    
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  
  grunt.registerTask('dev', [
    'jshint',
    'less:dev',
    'autoprefixer:dev',
    'watch'
  ]);
  
  grunt.registerTask('build', [
    'jshint',
    'less:build',
    'autoprefixer:build',
    'uglify',
    'copy'
  ]);
  
};
