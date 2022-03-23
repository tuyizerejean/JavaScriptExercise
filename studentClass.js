const student={
    100:{
        fullName:"Ukwishatse Honorine",
    subjects:{
        Cprogramming:{ points:40,teacher:"Christian "},
        algorithm:{ points:72,teacher:"Mugabo"},
    }
    },
  200:{
        fullName:"Tuyizere Jean de Dieu",
        subjects:{
            Cprogramming:{ points:72,teacher:"Richald"},
            algorithm:{ points:72,teacher:"Mugabo"},
        }
    },
    201:{
        fullName:"Zirikana jean bosco",
        subjects:{
            Cprogramming:{ points:10,teacher:"Richald"},
            algorithm:{ points:22,teacher:"Mugabo"},
        }
    }
}
 const subjects={
    Cprogramming:{
    passRate:50
},
algorithm:{
    passRate:55
},
 }
 const checkStudentResult=(regNo,subject)=>{
     let course=student[regNo].subjects
     let points=course.Cprogramming.points
     let subjectCourse=subjects[subject].passRate
    
      //In case course will be Cprogamming
     if(subject=='Cprogramming'){
        if(points>=subjectCourse)
         {
      console.log(`Dear ${student[regNo].fullName} you have passed ${subject} with ${points}% `)
         } 
       else{
       console.log(`Dear ${student[regNo].fullName} you have failed ${subject} with ${points}% `)
        }  
    }
    //In case course will be Algorithm
    let lesson=student[regNo].subjects
    let lessonPoint=lesson.algorithm.points
    let subjectLesson=subjects[subject].passRate
    if(subject=='algorithm'){
        if(lessonPoint>=subjectLesson)
         {
      console.log(`Dear ${student[regNo].fullName} you have passed ${subject} with ${lessonPoint}% `)
         } 
       else{
       console.log(`Dear ${student[regNo].fullName} you have failed ${subject} the with ${lessonPoint}% `)
        }  
    }
 }
checkStudentResult('201','Cprogramming')
