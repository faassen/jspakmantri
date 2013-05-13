# jspakmantri

A sample project where we hook up Bower to Buster.JS while using the MantriJS
module system. This turns out to be much easier to integrate with Buster than
RequireJS (see https://github.com/faassen/jspak for that).

You need to have nodejs, npm, bower, grunt, buster and PhantomJS
installed.

Installation:

    $ npm install

Install client-side dependencies:

    $ bower install

Run the tests with buster (and PhantomJS):

    $ grunt test

For more about the background, see this blog post:

http://blog.startifact.com/posts/overwhelmed-by-javascript-dependencies.html
