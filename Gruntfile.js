module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	uglify: {
		build: {
		  src: 'js/script.js',
		  dest: 'js/script.min.js'
		}
	},


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


	csslint: {
		// strict: {
		// 	options: {
		// 	  import: 2
		// 	},
		// 	src: ['css/*.css','!*.min.css']    // do not include min.css files
		// },
		lax: {
			options: {
			  import: false,
			  'order-alphabetical': false
			},
			src: ['css/*.css','!*.min.css']
		}
	},


	jshint: {
		all: ['Gruntfile.js', 'js/*.js']
	},


	watch: {
		all: {
			files: ['sass/style.scss','css/style.css','js/script.js'],
			tasks: ['sass','csslint','jshint'],
			// options: {
			//   spawn: false,
			// },
		},
	},

});

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');




  // Default task(s).
  grunt.registerTask('ugly', ['uglify']);
  grunt.registerTask('test', ['watch']);
  grunt.registerTask('default', ['sass']);
  // 'default' checks everything, but can be renamed ie. default = test, [grunt] = [grunt test]

};