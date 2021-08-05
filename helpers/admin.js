const db = require('../config/connection').get
const { COURSE_COLLECTION, USER_COLLECTION } = require('../utils/constants').collections

module.exports = {
    getAllUsers: ()=> {
        return new Promise ( async(resolve, reject)=> {
            const users = db().collection(USER_COLLECTION).find({},{projection: {username: 1, email: 1, _id: 0}}).toArray()
            users ? resolve(users) : reject({statusCode: 404})
        })
    },

    getUser: (username)=>{
        return new Promise( async(resolve, reject)=> {
            const user = await db().collection(USER_COLLECTION).findOne({username})
            user ? resolve(user) : reject({statusCode: 404})
        })
    },

    postSaveCourse: (courseData, match)=> {
        return new Promise((resolve, reject)=> {
            db().collection(COURSE_COLLECTION).updateOne(match, {$set:{...courseData}},{upsert: true}).then((response)=> {
                resolve(response)
            }).catch(err=> {
                reject(err)
            })
        })
    },

    postNewCourse: (courseData, id)=> {
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
            } catch (error) {
                reject(error)
            }
        })
    },

    getCourseByCode: (code)=> {},

    getCourseById: (id)=> {
        return new Promise( async(resolve, reject)=> {
            const course = await db().collection(COURSE_COLLECTION).findOne({_id: id},{projection: {_id: 0, status: 0}})
            course ? resolve(course) : reject({statusCode: 404})
        })
    }
}