const User = require('./../../app/user')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"sin bio")
    }
}


module.exports = UserService
