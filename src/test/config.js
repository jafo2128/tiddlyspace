(function() {

var ns = config.extensions.tiddlyspace;

module("TiddlySpaceConfig");

test("cached values", function() {
	strictEqual(ns.currentSpace, "foo"); // XXX: relies on fixtures/tiddlyweb.js due to evaluation timing
});

test("determineSpace", function() {
	var space;
	
	space = ns.determineSpace("foo");
	strictEqual(space, false);

	space = ns.determineSpace("foo_bar");
	strictEqual(space, false);

	space = ns.determineSpace("private");
	strictEqual(space, false);

	space = ns.determineSpace("public");
	strictEqual(space, false);

	space = ns.determineSpace("foo_private");
	strictEqual(space.name, "foo");
	strictEqual(space.type, "private");

	space = ns.determineSpace("bar_public");
	strictEqual(space.name, "bar");
	strictEqual(space.type, "public");

	space = ns.determineSpace("foo_bar_baz_public");
	strictEqual(space.name, "foo_bar_baz");
	strictEqual(space.type, "public");
});

})();
