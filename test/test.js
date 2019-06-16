var request = require("request"),
    assert = require('assert'),
    astroAssesment = require("../server.js"),
    base_url = "http://localhost:3000/";

describe("Astro Assessment", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(response.statusCode).toBe(200);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it("returns Astro Assessment", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(body).toBe("Astro Assesment : assignment 2. DONE!");
        assert.equal("Astro Assesment : assignment 2. DONE!", body);
        astroAssesment.closeServer();
        done();
      });
    });
  });
});
