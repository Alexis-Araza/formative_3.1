module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  //   uglify: {
  //     options: {
  //       banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  //     },
  //     build: {
  //       src: 'src/<%= pkg.name %>.js',
  //       dest: 'build/<%= pkg.name %>.min.js'
  //     }
  //   }
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss',       // 'destination': 'source'
      }
    }
  },
    jshint: {
    all: ['Gruntfile.js', 'js/*.js']
  }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');



  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  grunt.registerTask('test', ['sass','jshint']);
  // 'default' checks everything, but can be renamed ie.test [grunt test]

};