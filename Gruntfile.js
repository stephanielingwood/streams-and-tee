module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      all: ["lib/*.js"]
    },

    jscs: {
      all: {
        options: {

        },
        files: {
          src: [ "lib" ]
        }
      }
    },

  });
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
}
