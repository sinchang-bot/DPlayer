/* global cy, it, describe */

describe('home_spec.js', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8080'); // change URL to match your dev URL
    });
});