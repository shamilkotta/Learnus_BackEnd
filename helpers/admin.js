const db = require('../config/connection').get
const { COURSE_COLLECTION, USER_COLLECTION } = require('../utils/constants').collections

module.exports = {
    getAllUsers: ()=> {
        return new Promise ( async(resolve, reject)=> {
            try {
                const users = await db().collection(USER_COLLECTION).find({},{projection: {username: 1, email: 1, _id: 0}}).toArray()
                users ? resolve(users) : reject({statusCode: 404})
            } catch (err) {
                reject(err)
            }
        })
    },

    getUser: (username)=>{
        return new Promise( async(resolve, reject)=> {
            try {
                const user = await db().collection(USER_COLLECTION).findOne({username})
                user ? resolve(user) : reject({statusCode: 404})
            } catch (err) {
                reject(err)
            }
        })
    },

    saveCourse: (courseData, match)=> {
        return new Promise((resolve, reject)=> {
            db().collection(COURSE_COLLECTION).updateOne(match, {$set:{...courseData}},{upsert: true}).then((response)=> {
                resolve(response)
            }).catch(err=> {
                reject(err)
            })
        })
    },

    putCourse: (courseData, id)=> {
        return new Promise ((resolve, reject)=> {
            db().collection(COURSE_COLLECTION).updateOne({_id: id},{$set: {...courseData}}).then((response)=>{
                resolve(response)
            }).catch(err=> {
                reject(err)
            })
        })
    },

    getAllCourses: ()=> {
        return new Promise( async(resolve, reject)=> {
            try {
                const courses = await db().collection(COURSE_COLLECTION).find({},{projection: {course__code: 1, course__title: 1, status: 1}}).toArray()
                courses ? resolve(courses) : reject({statusCode: 404})
            } catch (err) {
                reject(err)
            }
        })
    },

    deleteCourse: (id)=> {
        return new Promise ((resolve, reject)=> {
            db().collection(COURSE_COLLECTION).remove({course__code: id}).then((response)=> {
                resolve(response)
            }).catch((err)=> {
                reject(err)
            })
        })
    }
}