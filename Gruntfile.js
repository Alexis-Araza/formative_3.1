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
			src: ['css/style.css','!style.min.css']
		}
	},


	jshint: {
		all: ['Gruntfile.js', 'js/script.js']
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


	htmlmin: {                                     // Task
		dist: {                                      // Target
			options: {                                 // Target options
			removeComments: true,
			collapseWhitespace: true
			},
			files: {                                   // Dictionary of files
			'formative_3.1/index.html': 'formative_3.1/index.html',     // 'destination': 'source'
			'formative_3.1/about.html': 'formative_3.1/about.html'
			}
		},
		dev: {                                       // Another target
			files: {
			'formative_3.1/index.html': 'formative_3.1/index.html',     // 'destination': 'source'
			'formative_3.1/about.html': 'formative_3.1/about.html'
			}
		}
	},


	imagemin: {
		static: {
			options: {
			optimizationLevel: 3,
			// svgoPlugins: [{removeViewBox: false}],
			// use: [mozjpeg()] // Example plugin usage
			},
			files: {
			'dist/img.png': 'src/img.png',
			'dist/img.jpg': 'src/img.jpg',
			'dist/img.gif': 'src/img.gif'
			}
		},
		dynamic: {
			files: [{
			expand: true,
			cwd: 'src/',
			src: ['m-img/*.{png,jpg,gif}'],
			dest: 'm-img/'
			}]
		}
	},


	cssmin: {
		target: {
			files: [{
			expand: true,
			cwd: 'formative_3.1/css',
			src: ['css/style.css','!style.min.css'],
			dest: 'css/style.min.css',
			ext: '.min.css'
			}]
		}
	},

});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');




  // Default task(s).
  grunt.registerTask('default', ['sass'], ['csslint'], ['jshint'], ['watch']);
  grunt.registerTask('mtask',['uglify'], ['htmlmin'], ['imagemin'], ['cssmin']);
  // 'default' checks everything, but can be renamed ie. default = test, [grunt] = [grunt test]

};