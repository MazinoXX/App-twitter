const UserView = require('./../../app/view/UserViews')

describe("Test for UserViews", () => {
    
    test('Return a error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no exist/)

    })
    test('Return an error object when to try to create a new user with a payload with invalid properties', () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitas tener un valor valido/)
    })
    test('Return an error object when to try to create a new user with a payload with missing properties', () => {
        const payload = {username: "username"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitas tener un valor valido/)
    })
    test('Create a user by a given valid payload', () => {
        const payload = {username: "omartrujillo", name: "omar", id: 1}
        const result = UserView.createUser(payload)

        expect(result.name).toBe("omar")
        expect(result.username).toBe("omartrujillo")
        expect(result.id).toBe(1)

    })

})