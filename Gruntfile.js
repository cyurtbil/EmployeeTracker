module.exports = function(grunt) {


// Initial configuration
// ========================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: { // task name
        options: {
          port: "8000",
          protocol: "http",
          hostname: "localhost",
          base: './app',
          keepalive: true,
          livereload: true,
          open: true
        }
      }
    }
  });
// ========================================================

// Loading npm tasks
// ========================================================
  grunt.loadNpmTasks('grunt-contrib-connect');
// ========================================================

// Register npm tasks
// ========================================================
  grunt.registerTask('default', ['connect']);
// ======================================================== 


};