// Tests for the feedreader app 
$(function () {
    // This test suite describes specs for the feeds.
    describe('RSS Feeds', function () {
        // Test ensures allFeeds is defined and not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test ensures allFeeds item.url is defined and not empty
        it('url is defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }, this);
        });

        // Test ensures allFeeds item.name is defined and not empty
        it('name is defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }, this);
        });
    });


    // This test suite describes specs for the left side-bar menu
    describe('The Menu', function () {

        // use jQuery to get the body and menu-icon-link element
        var body = $('body'),
            menuIconLink = $('.menu-icon-link');

        // check if body has class menu-hidden
        it('menu element hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Test checks if on menu icon click, menu-hidden class is visible/nvisible
        it('toggle menu visibility', function () {

            menuIconLink.click();
            expect(body.hasClass('menu-hidden')).not.toBe(true);

            menuIconLink.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    // This test suite describes the specs for initial data loaded in the feed
    describe('Initial Entries', function () {

        // asynchronously load the first feed before each test
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        // Test checks if feed has at least one entry after loading has finished
        it('feed container has atleast a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    // This test suite describes specs for selecting a anew feed
    describe('New Feed Selection', function () {

        var firstFeed;

        // asynchronously load the first feed and then the second feed
        beforeEach(function (done) {
            loadFeed(0, function () {
                firstFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        // Test checks whether html content changes when a new feed is loaded
        it('new feed changes content', function () {
            expect($('.feed').html()).not.toBe(firstFeed);
        });

    });
}());
