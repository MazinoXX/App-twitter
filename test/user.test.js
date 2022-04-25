const User = require('./../app/user')

describe("Unite test for user class", () => {
    test('Create a user object', () => {
        const user = new User(1,"omartrujilllo","omar","Bio","dateCreated","lastUpdate")

        expect(user.id).toBe(1)
    expect(user.username).toBe("omartrujillo")
    expect(user.name).toBe("omar")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdate).toBe("lastUpdate")

    })

    
})