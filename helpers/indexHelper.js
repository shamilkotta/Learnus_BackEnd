const db = require('../config/connection').get
const { USER_COLLECTION } = require('../utils/constents').collections
const bcrypt = require('bcrypt')

module.exports = {
    doSignup : (registerData)=> {
        return new Promise ((resolve, reject)=>{
            db().collection(USER_COLLECTION).insertOne(registerData).then((data)=> {
                resolve(data)
            }).catch((err)=> {
                reject(err)
            })
        })
    },

    doLogin: (loginData)=> {
        return new Promise (async (resolve, reject)=> {
            const user = await db().collection(USER_COLLECTION).findOne({email: loginData.email})
            if (user) {
                bcrypt.compare(loginData.password, user.password).then((data)=>{
                    resolve(data)
                }).catch((err)=> {
                    reject(err)
                })
            }else {
                reject({statusCode: 400, message: 'Invalid Email'})
            }
        })
    },

    getCart: ()=> {

    }
}