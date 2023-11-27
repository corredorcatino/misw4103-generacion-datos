class Sidebar {
    navigateToPages() {
        cy.get('[data-test-nav="pages"]').click()
        cy.url().should('contain', '/pages')
        cy.get('.gh-canvas-title > a[href*="#/pages"]').should('contain', 'Pages')
    }
}

export const sidebar = new Sidebar();