const employees = [
  {
    _id: "1",
    name: "Smith",
    surname: "John",
    job: "Fronted Developer",
    salary: 80000,
  },
  {
    _id: "2",
    name: "Jane",
    surname: "Doe",
    job: "Fronted Developer",
    salary: 80000,
  },
  {
    _id: "3",
    name: "Bob",
    surname: "Johnson",
    job: "Fronted Developer",
    salary: 80000,
  },
  {
    _id: "4",
    name: "Alice",
    surname: "Williams",
    job: "Fronted Developer",
    salary: 80000,
  },
  {
    _id: "5",
    name: "David",
    surname: "Brown",
    job: "Fronted Developer",
    salary: 80000,
  },
];

const renderData = (data) => {
  data.forEach((item, index, arr) => {
    console.log(`${index + 1}.${item.name}
             ${item.surname} ${item.job}\n $${item.salary}\n   `);
  });
};
// renderData(employees)

const totalSalary=(data)=>{
    let sum=0

    data.forEach((item,index,arr)=>{
        sum+=item.salary
    })
    console.log(`Total salary: $ ${sum}`)
}
// totalSalary(employees)

const searchData = (data,searchText)=>{
    const filterData=[]

    data.forEach((item,index,arr)=>{
        if(item.name.includes(searchText.split(' ')[0]) || 
    item.surname.includes(searchText.split(' ')[1])){
        filterData.push(item)
    }

    })
    renderData(filterData)
}
// searchData(employees, 'John Doe')

const newUser={
    name: "Mark",
    surname: "Twen",
    job: "Fronted Developer",
    salary: 100000,
}

const addUser=(user)=>{
    const newUser={
        _id: String(employees.length+1),
        ...user,
    }
    employees.push(newUser)
}
// addUser(newUser)
// renderData(employees)

const updatedUser={
    name: "Mark",
    surname: "Twen",
    job: "Fronted Developer",
    salary: 100000,
}


const updateUser=(userId,body)=>{
     const index = employees.findIndex(employees=>employees._id ===
        userId
     )
     if(index===-1){
        console.log('User not found');
        return;
     }
     employees[index]={...employees[index],...body};
     renderData(employees)
}
// updateUser('2',updatedUser)

const schoolDB={
  g1:{
    name:'G1 Frontend Bootcamp',
    students:[
      {
        _id:'1',
        name:'John Doe',
        age:35,
        grade:'1A'
      },
      {
        _id:'1',
        name: 'Michel Doe',
        age:25,
        grade:'2A'
      },
      {
        _id:'1',
        name:'Jane Doe',
        age:22,
        grade:'3A'
      },
    ]
  },
  g2:{
    name:'G2 Frontend Bootcamp',
    students:[
      {
        _id:'1',
        name:'John Doe',
        age:11,
        grade:'1A'
      },
      {
        _id:'2',
        name: 'Michel Doe',
        age:15,
        grade:'2A'
      },
      {
        _id:'3',
        name:'Jane Doe',
        age:13,
        grade:'3A'
      },
    ]
  },
  g3:{
    name:'G3 Frontend Bootcamp',
    students:[
      {
        _id:'1',
        name:'John Doe',
        age:12,
        grade:'1A'
      },
      {
        _id:'2',
        name: 'Michel Doe',
        age:19,
        grade:'2A'
      },
      {
        _id:'3',
        name:'Jane Doe',
        age:21,
        grade:'3A'
      },
    ]
  }
}

const renderGroupData = (group,groupname) => {
  // console.log(`${groupname.name}\n`)

         group.forEach((item,index,arr) => {
      console.log(`${index+1}.${item.name} ${item.age} ${item.grade}`)
    })
}
// renderGroupData(schoolDB.g1.students,schoolDB.g1)

const updateGroupName = (groupName,newName) =>{
    if(groupName.name !== newName){
        groupName = newName
    }
    console.log(groupName)
}
// updateGroupName(schoolDB.g1,'G1 Frontend React.js Bootcamp')

const newUsers={
  _id:'10',
  name:'Shokhzoda',
  age:35,
  grade:'5A'
}

const addGroupUser = (data) => {
  const addData = {
   _id:String(schoolDB.g2.students.length+1),
   ...data
  }
  schoolDB.g2.students.push(addData)
}

// addGroupUser(newUsers)
// renderGroupData(schoolDB.g2.students) 

const schoolboysDB={
  g1:{
    name:'G1 Frontend Bootcamp',
    students:[
      {
        _id:'1',
        name:'John Doe',
        age:35,
        grade:'1A'
      },
      {
        _id:'1',
        name: 'Michel Doe',
        age:25,
        grade:'2A'
      },
      {
        _id:'1',
        name:'Jane Doe',
        age:22,
        grade:'3A'
      },
    ]
  },
  g2:{
    name:'G2 Frontend Bootcamp',
    students:[
      {
        _id:'1',
        name:'John Doe',
        age:11,
        grade:'1A'
      },
      {
        _id:'2',
        name: 'Michel Doe',
        age:15,
        grade:'2A'
      },
      {
        _id:'3',
        name:'Jane Doe',
        age:13,
        grade:'3A'
      },
    ]
  },
  g3:{
    name:'G3 Frontend Bootcamp',
    students:[
      {
        _id:'1',
        name:'John Doe',
        age:12,
        grade:'1A'
      },
      {
        _id:'2',
        name: 'Michel Doe',
        age:19,
        grade:'2A'
      },
      {
        _id:'3',
        name:'Jane Doe',
        age:21,
        grade:'3A'
      },
    ]
  }
}

const renderSchoolboysDB=(data)=>{
      data.forEach((item,index,arr)=>{
        console.log(`${index+1}. ${item.name}, ${item.age} ${item.grade}`)
      })
}
// renderSchoolboysDB(schoolboysDB.g1.students)

const dataBase = {
  _id:'10',
        name:'Shokhzoda Panjizoda',
        age:35,
        grade:'5A'
}
const addSchoolboysDB=(data,newdata)=>{
   data.forEach((item,index) => {
        if(item!==newdata)
        {}
      })
      console.log(data.push(newdata))
// renderSchoolboysDB(schoolboysDB.g1.students)
}
// addSchoolboysDB(schoolboysDB.g1.students,dataBase)
// renderSchoolboysDB(schoolboysDB.g1.students)

const updateData=(data,newdata)=>{
  const student= schoolboysDB.g2.students
     const newlist = student.findIndex(student => student._id === data
      )
      if(newlist=== -1){
        console.log('User not found')
      }
      student[newlist]={...student[newlist],...newdata}
    //  employees[index]={...employees[index],...body};

}
// updateData('2',dataBase)
// renderSchoolboysDB(schoolboysDB.g2.students)
