
//months to store 
const MONTHS = {
    january: [],
    february: [],
    march: [],
    april: [],
    may: [],
    june: [],
    august: [],
    september: [],
    october: [],
    november: [],
    december: [],
}

//array to store user info after register and used for login
const userInfo = []

//a class for the user to register and login
class User{
    constructor(userName, email, password){
        this.userName = userName,
        this. email = email,
        this.password = password
    }
    static userRegister(userName, email, password){
        userInfo.push({id, userName, email, password })
        

    }
    static userLogin(email, password){

    }
}

let newUser =  new User.userRegister("ndamulelo", " ndamulel@gmail.com", "Ndamulelo")

console.log(newUser);


class Person{
    constructor(firstName, lastName, dateOfBirth, giftList){
        this.firstName = firstName,
        this.lastName = lastName,
        this.dateOfBirth = dateOfBirth,
        this.giftList = giftList
    }

}

function addToMonth(firstName, lastName, dateOfBirth, giftList){
    let newPerson = new Person(firstName, lastName, dateOfBirth, giftList)
    return newPerson
}

export {userInfo, User}

// module.exports = userInfo