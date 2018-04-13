/* global cy, it, beforeEach, describe */

describe('controller_spec.js', function () {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('click to play', () => {
        cy.get('#dplayer1 .dplayer-play-icon').click();
        cy.get('#dplayer1').should('have.class', 'dplayer-playing');
    });
});