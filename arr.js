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

const totalSalary = (data) => {
  let sum = 0;

  data.forEach((item, index, arr) => {
    sum += item.salary;
  });
  console.log(`Total salary: $ ${sum}`);
};
// totalSalary(employees)

const searchData = (data, searchText) => {
  const filterData = [];

  data.forEach((item, index, arr) => {
    if (
      item.name.includes(searchText.split(" ")[0]) ||
      item.surname.includes(searchText.split(" ")[1])
    ) {
      filterData.push(item);
    }
  });
  renderData(filterData);
};
// searchData(employees, 'John Doe')

const newUser = {
  name: "Mark",
  surname: "Twen",
  job: "Fronted Developer",
  salary: 100000,
};

const addUser = (user) => {
  const newUser = {
    _id: String(employees.length + 1),
    ...user,
  };
  employees.push(newUser);
};
// addUser(newUser)
// renderData(employees)

const updatedUser = {
  name: "Mark",
  surname: "Twen",
  job: "Fronted Developer",
  salary: 100000,
};

const updateUser = (userId, body) => {
  const index = employees.findIndex((employees) => employees._id === userId);
  if (index === -1) {
    console.log("User not found");
    return;
  }
  employees[index] = { ...employees[index], ...body };
  renderData(employees);
};
// updateUser('2',updatedUser)

const schoolDB = {
  g1: {
    name: "G1 Frontend Bootcamp",
    students: [
      {
        _id: "1",
        name: "John Doe",
        age: 35,
        grade: "1A",
      },
      {
        _id: "1",
        name: "Michel Doe",
        age: 25,
        grade: "2A",
      },
      {
        _id: "1",
        name: "Jane Doe",
        age: 22,
        grade: "3A",
      },
    ],
  },
  g2: {
    name: "G2 Frontend Bootcamp",
    students: [
      {
        _id: "1",
        name: "John Doe",
        age: 11,
        grade: "1A",
      },
      {
        _id: "2",
        name: "Michel Doe",
        age: 15,
        grade: "2A",
      },
      {
        _id: "3",
        name: "Jane Doe",
        age: 13,
        grade: "3A",
      },
    ],
  },
  g3: {
    name: "G3 Frontend Bootcamp",
    students: [
      {
        _id: "1",
        name: "John Doe",
        age: 12,
        grade: "1A",
      },
      {
        _id: "2",
        name: "Michel Doe",
        age: 19,
        grade: "2A",
      },
      {
        _id: "3",
        name: "Jane Doe",
        age: 21,
        grade: "3A",
      },
    ],
  },
};

const renderGroupData = (group, groupname) => {
  // console.log(`${groupname.name}\n`)

  group.forEach((item, index, arr) => {
    console.log(`${index + 1}.${item.name} ${item.age} ${item.grade}`);
  });
};
// renderGroupData(schoolDB.g1.students,schoolDB.g1)

const updateGroupName = (groupName, newName) => {
  if (groupName.name !== newName) {
    groupName = newName;
  }
  console.log(groupName);
};
// updateGroupName(schoolDB.g1,'G1 Frontend React.js Bootcamp')

const newUsers = {
  _id: "10",
  name: "Shokhzoda",
  age: 35,
  grade: "5A",
};

const addGroupUser = (data) => {
  const addData = {
    _id: String(schoolDB.g2.students.length + 1),
    ...data,
  };
  schoolDB.g2.students.push(addData);
};

// addGroupUser(newUsers)
// renderGroupData(schoolDB.g2.students)

const schoolboysDB = {
  g1: {
    name: "G1 Frontend Bootcamp",
    students: [
      {
        _id: "1",
        name: "John Doe",
        age: 35,
        grade: "1A",
      },
      {
        _id: "1",
        name: "Michel Doe",
        age: 25,
        grade: "2A",
      },
      {
        _id: "1",
        name: "Jane Doe",
        age: 22,
        grade: "3A",
      },
    ],
  },
  g2: {
    name: "G2 Frontend Bootcamp",
    students: [
      {
        _id: "1",
        name: "John Doe",
        age: 11,
        grade: "1A",
      },
      {
        _id: "2",
        name: "Michel Doe",
        age: 15,
        grade: "2A",
      },
      {
        _id: "3",
        name: "Jane Doe",
        age: 13,
        grade: "3A",
      },
    ],
  },
  g3: {
    name: "G3 Frontend Bootcamp",
    students: [
      {
        _id: "1",
        name: "John Doe",
        age: 12,
        grade: "1A",
      },
      {
        _id: "2",
        name: "Michel Doe",
        age: 19,
        grade: "2A",
      },
      {
        _id: "3",
        name: "Jane Doe",
        age: 21,
        grade: "3A",
      },
    ],
  },
};

const renderSchoolboysDB = (data) => {
  data.forEach((item, index, arr) => {
    console.log(`${index + 1}. ${item.name}, ${item.age} ${item.grade}`);
  });
};
// renderSchoolboysDB(schoolboysDB.g1.students)

const dataBase = {
  _id: "10",
  name: "Shokhzoda Panjizoda",
  age: 35,
  grade: "5A",
};
const addSchoolboysDB = (data, newdata) => {
  data.forEach((item, index) => {
    if (item !== newdata) {
    }
  });
  console.log(data.push(newdata));
  // renderSchoolboysDB(schoolboysDB.g1.students)
};
// addSchoolboysDB(schoolboysDB.g1.students,dataBase)
// renderSchoolboysDB(schoolboysDB.g1.students)

const updateData = (data, newdata) => {
  const student = schoolboysDB.g2.students;
  const newlist = student.findIndex((student) => student._id === data);
  if (newlist === -1) {
    console.log("User not found");
  }
  student[newlist] = { ...student[newlist], ...newdata };
  //  employees[index]={...employees[index],...body};
};
// updateData('2',dataBase)
// renderSchoolboysDB(schoolboysDB.g2.students)

const renderGroupDatas = (group) => {
  if (group in schoolDB) {
    console.log(`----- ${schoolDB[group].name} -----`);
    schoolDB[group].students.forEach((student, index, array) => {
      console.log(
        `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`
      );
    });
    console.log("------------------------------------");
  } else {
    console.log(`School has no ${group} group`);
  }
};
// renderGroupDatas('g2')

const renderGRDB = (group) => {
  if (group in schoolDB) {
    schoolDB[group].students.forEach((student, index, arr) => {
      console.log(
        `Name: ${student.name} , Age: ${student.age}, Grade: ${student.grade}`
      );
    });
    console.log("-------------------------------------");
  } else {
    console.log(`School has no ${group} group`);
  }
};
// renderGRDB('g5')

const moveStudents = (studentId, group) => {
  if (group in schoolDB) {
    const studentIndex = schoolDB[group].students.findIndex(
      (student) => student._id === studentId
    );

    if (studentIndex === -1) {
      for (let key in schoolDB) {
        const index = schoolDB[key].students.findIndex(
          (student) => student._id === studentId
        ); // {}
        const student = schoolDB[key].students.splice(index, 1)[0];

        if (student) {
          schoolDB[group].students.push(student);
        }
      }
    } else {
      console.log(
        `Student with this ${studentId} is already exists in ${group} group`
      );
    }
  } else {
    console.log(`School has no ${group} group`);
    return;
  }
};
// moveStudents('1','g2')
// renderGroupDatas('g2')

const moveStudent = (studentID, group) => {
  if (group in schoolDB) {
    const studentIndex = schoolDB[group].students.findIndex(
      (student) => student._id === studentID
    );

    if (studentIndex === -1) {
      for (let key in schoolDB) {
        const index = schoolDB[key].students.findIndex(
          (student) => student._id === studentID
        );
        const student = schoolDB[key].students.splice(index, 1)[0];

        if (student) {
          schoolDB[group].students.push(student);
        }
      }
    } else {
      console.log(
        `Student with this ${studentID} is already exists in ${group} group`
      );
    }
  } else {
    console.log(`School no  ${group} group`);
    return;
  }
};

// moveStudent("1", "g2");
// renderGroupDatas("g2");


const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

// GET

const fetchUsers = async () => {
  const response = await fetch(`${BASE_API_URL}/users`, {
    method:'GET'
  })
  const users = await response.json()
  return users;
}

// fetchUsers();

const fetchSingleUser = async (userId) => {
      const response = await fetch(`${BASE_API_URL}/users/${userId}`,{
        method:'GET'
      })    

      const user = await response.json()

      return user
}
// fetchSingleUser()

const renderUsers = async () =>{
    const users = await fetchUsers()

    users?.forEach((user,index)=>{
      console.log(`${index+1}. ${user?.name} \n ${user?.email}\n  Address: ${user?.address?.street}\n`)
    })
}
// renderUsers()


const renderSingleUser = async ()=> {
  const user = await fetchSingleUser('1')

  console.log(`${user?.name} \n ${user?.email}\n   Address: ${user?.address?.street}`)
}
// renderSingleUser()

const deleteSingleUserId = async (userId) => {
  await fetch(`${BASE_API_URL}/users/${userId}`,
    {
      method:'DELETE'
    })
}
// deleteSingleUserId('1')
// renderUsers()

// PUT

const updateSingleUser = async (userId,body) => {
    const response = await fetch(`${BASE_API_URL}/users/${userId}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    return data
}
// updateSingleUser()

const yangilashs =async (userId,body) => {
     const response = await fetch(`${BASE_API_URL}/users/${userId} `, {
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
      
     })

     const data = await response.json()
}
yangilashs()