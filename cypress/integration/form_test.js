describe("order form tests", () => {

    const nameInput = () => cy.get("input[name=fullName]");
    const peppCheckbox = () => cy.get("input[name=pepperoni]");
    const sausCheckbox = () => cy.get("input[name=sausage]");

    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })

    it("sanity check", () => {
        expect(5 + 3).to.equal(8)
        expect(11 + 1).not.to.equal(13)
    })

    it("check name input", () => {
        nameInput()
        .should("have.value", "")
        .type("name")
        .should("have.value", "name")
    })

    it("check if multiple boxes can be checked", () => {
        peppCheckbox()
        .should("not.be.checked")
        .click()
        .should("be.checked");
        sausCheckbox()
        .should("not.be.checked")
        .click()
        .should("be.checked");

    })

})