const UserView = require('./../../app/view/UserViews')

describe("Test for UserViews", () => {
    
    test('Return a error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no exist/)

    })
    
})