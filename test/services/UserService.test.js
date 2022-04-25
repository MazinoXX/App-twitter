const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1,"omartrujillo","omar")

        expect(user.username).toBe("omartrujillo")
        expect(user.name).toBe("omar")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()



    })
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1,"omartrujillo","omar")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("omartrujillo")
        expect(userInfoInList[2]).toBe("omar")
        expect(userInfoInList[3]).toBe("Sin bio")

    })
    test('3. Update username', () => {
        const user = UserService.create(1,"omartrujillo","omar")
        UserService.updateUserUsername(user,"alex")
        expect(user.username).toBe("alex")
    })
    test('4. Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1,"omartrujillo1","omar")
        const user2 = UserService.create(1,"omartrujillo2","omar")
        const user3 = UserService.create(1,"omartrujillo3","omar")
        const usernames =UserService.getAllUsernames([user1,user2,user3])

        expect(usernames).toContain("omartrujillo1")
        expect(usernames).toContain("omartrujillo2")
        expect(usernames).toContain("omartrujillo3")

    })
})