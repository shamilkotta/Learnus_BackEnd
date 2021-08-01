const db = require('../config/connection').get
const { COURSE_COLLECTION } = require('../utils/constants').collections

module.exports = {
    postNewCourse: (courseData)=> {
        return new Promise ((resolve, reject)=> {

            let newContent = []
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
            
            courseData.course__content = newContent
            db().collection(COURSE_COLLECTION).insertOne({...courseData}).then((data)=>{
                resolve({data, courseData})
            })
        })
    }
}