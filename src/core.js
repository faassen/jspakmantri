goog.provide('core');

(function($, module) {
    module.foo = function() {
        return $.type("Foo!");
    };
}(jQuery, core));
