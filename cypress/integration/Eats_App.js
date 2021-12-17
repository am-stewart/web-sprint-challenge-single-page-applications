describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const pepperoniBox = () => cy.get('input[name=pepperoni]');
    const pineappleBox = () => cy.get('input[name=pineapple]');
    const peppersBox = () => cy.get('input[name=peppers]');
    const onionsBox = () => cy.get('input[name=onions]');
    const specialInput = () => cy.get('input[name=special]');
    const addButton = () => cy.get('button[id="order-button"]');

    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3);
        expect(4+4).not.to.equal(3);
    })

    it('the proper elements are showing in order form', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        pepperoniBox().should('exist');
        pineappleBox().should('exist');
        peppersBox().should('exist');
        onionsBox().should('exist');
        specialInput().should('exist');
        cy.contains('Add to Order').should('exist');
    })

describe('Can type in inputs and select toppings', () => {
    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })

    it('submit button starts as disabled', () => {
        addButton().should('be.disabled');
    })

    it('can type in name input', () => {
        nameInput()
            .should('have.value', '')
            .type('John Doe')
            .should('have.value', 'John Doe')
    })

    it('can select multiple toppings', () => {
        pepperoniBox().check();
        pineappleBox().check();
        peppersBox().check();
        onionsBox().check();
    })

describe('Can submit order form', () => {
    it('submit button enables when required fields are completed', () => {
        nameInput().type('John Doe');
        sizeInput().select('Small');
        addButton().should('not.be.disabled');
    })
    it('can click button to submit order', () => {
        nameInput().type('John Doe');
        sizeInput().select('Small');
        addButton().click();
    })
})
})
})