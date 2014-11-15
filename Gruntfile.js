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
      devserver: {
        options: {
          open:{
              target: 'http://localhost:3000/app'
          },
          port: 3000
        }
      },
      prodserver: {
        options: {
          open:{
              target: 'http://localhost:3000/dist'
          },
          port: 3000
        }
      }
},

watch: {
   options: {
    livereload: true,
  },
  sass: {
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
  html: {
    expand: true,
    src: 'app/index.html',
    dest: 'dist/',
    flatten: true,
    filter: 'isFile',
  },
  assets: {
    expand: true,
    cwd: 'app/',
    src: ['data/**'],
    dest: 'dist/',
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
     'copy:html',
     'copy:assets',
     'sass',
     'useminPrepare',
     'concat',
     'cssmin',
     'uglify',
    'usemin',
    'connect:prodserver',
    'watch'
  ]);

      grunt.registerTask('serve', [
    'clean',
     'sass',
     'connect:devserver',
     'watch'
  ]);

      
      // Default task(s).
   grunt.registerTask('default', [
    'serve'
  ]); 

};