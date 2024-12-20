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
updateUser('2',updatedUser)

