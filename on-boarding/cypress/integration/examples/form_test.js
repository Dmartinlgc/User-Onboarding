describe('User Onboarding', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    const textInput = ()=> cy.get('input[type=text]')
    const emailInput = () =>cy.get('input[type=email]')
    const passwordInput = () =>cy.get('input[type=password]')
    const inputTerms = () => cy.get('input[type=checkbox]')
    const subButton = () => cy.get('button')
    it('sanity check to make sure test work', ()=>{
        expect(1+2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({})   
        expect({}).to.eql({})  
    })
    it('the correct elements are shown', ()=>{
        textInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        inputTerms().should('exist')
        cy.contains('submit').should('exist')
    })
    describe('populating inputs', () =>{
       it('can type in the inputs', ()=>{
           textInput()
           .should('have.value', '')
           .type('this is the name input')
           .should('have.value', 'this is the name input')
           emailInput()
           .should('have.value', '')
           .type('djmfoothills@hotmail.com')
           .should('have.value','djmfoothills@hotmail.com' )
           passwordInput()
           .should('have.value', '')
           .type('password')
           .should('have.value', 'password')
            inputTerms().check()
            subButton().click()
           
       }) 
        describe('validation testing ', ()=>{
            it('disables submit button if required fields are empty', () => {
            textInput()
            .should('have.value', '')
             subButton()
            .should('be.disabled')
        })
        })
        
    })
})