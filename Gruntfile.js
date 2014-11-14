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

    useminPrepare: {
    html: 'index.html',
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
    src: 'index.html',
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
      // Default task(s).
   grunt.registerTask('default', [
    'build'
  ]); 

};