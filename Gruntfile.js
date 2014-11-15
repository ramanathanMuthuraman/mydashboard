module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist'
          ]
        }]
      }
    },

    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                '.tmp/styles/main.css': 'app/styles/main.scss'
            }
        }
    },


    connect: {
      server: {
        options: {
          open:{
              target: 'http://localhost:3000/app'
          },
          livereload: true,
          port: 3000
        }
      }
},

watch: {
  scss: {
    files: ['**/*.scss'],
    tasks: ['sass']
  }
},

    useminPrepare: {
    html: 'app/index.html',
    options: {
        dest: 'dist'
    }
},


usemin: {
    html: 'dist/index.html'
},

 copy: {
  task: {
    expand: true,
    src: 'app/index.html',
    dest: 'dist/',
    flatten: true,
    filter: 'isFile',
  }
},
  
  });
    // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
   // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-sass');
   // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
   // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
   // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
   // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat'); 
     // Load the plugin that provides the "usemin" task.
  grunt.loadNpmTasks('grunt-usemin');
    // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
    // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
        // Build task(s).
      grunt.registerTask('build', [
    'clean',
     'copy:task',
     'sass',
     'useminPrepare',
     'concat',
     'cssmin',
     'uglify',
    'usemin'
  ]);

      grunt.registerTask('serve', [
    'clean',
     'sass',
     'connect:server',
     'watch'
  ]);

      
      // Default task(s).
   grunt.registerTask('default', [
    'build'
  ]); 

};