const db = require('../config/connection').get
const { COURSE_COLLECTION, USER_COLLECTION } = require('../utils/constants').collections

module.exports = {
    getAllUsers: ()=> {
        return new Promise ( async(resolve, reject)=> {
            const users = db().collection(USER_COLLECTION).find().project({username: 1, email: 1, _id: 0}).toArray()
            users ? resolve(users) : reject(404)
        })
    },

    getUser: (username)=>{
        return new Promise( async(resolve, reject)=> {
            const user = await db().collection(USER_COLLECTION).findOne({username})
            user ? resolve(user) : reject(user)
        })
    },

    postNewCourse: (courseData)=> {
        return new Promise ((resolve, reject)=> {

            let newContent = []
            if (courseData.course__content) {  
                let code = courseData.course__code
                courseData.course__content.map((value, i)=>{
                    let m_id = `${code}_${i+1}`
                    let newChapter = []
                    value.chapters.map((chapter, j)=> {
                        let c_id = `${m_id}_${j+1}`
                        newChapter.push({chapter_id: c_id, chapter_name: chapter})
                    })
                    newContent.push({module_id: m_id, module_name: value.module, chapters: newChapter})
                })
            }else {
                reject({statusCode: 400, message: 'Course content cannot be empty'})
            }
            
            courseData.course__content = newContent
            db().collection(COURSE_COLLECTION).insertOne({...courseData}).then((data)=>{
                resolve({data, courseData})
            })
        })
    }
}