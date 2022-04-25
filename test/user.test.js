const User = require('./../app/user')

describe("Unite test for user class", () => {
    test('Create a user object', () => {
        const user = new User(1,"omartrujillo","omar","Bio")

        expect(user.id).toBe(1)
    expect(user.username).toBe("omartrujillo")
    expect(user.name).toBe("omar")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdate).not.toBeUndefined()

    })
    test('Add getters', () => {
        const user = new User(1,"omartrujillo","omar","Bio")
        expect(user.getUsername).toBe("omartrujillo")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()

    })

    
})