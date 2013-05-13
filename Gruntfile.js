module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerbuster: {
        path: 'bowerbuster.json'
    },
    buster: {
        test: {
            config: 'buster.js'
        },
        server: {
            port: 1111
        }
    }
  });

  grunt.loadNpmTasks('grunt-bower-busterjs');
  grunt.loadNpmTasks('grunt-buster');

  grunt.registerTask('test', ['bowerbuster', 'buster']);
};
