describe("order form tests", () => {

    const nameInput = () => cy.get("input[name=fullName]");

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

})