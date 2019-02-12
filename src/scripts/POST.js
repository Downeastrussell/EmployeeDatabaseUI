//Post to JSON function
const POSTemployee = (newEmployee) =>{
    fetch("http://localhost:8088/employees", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newEmployee)
})
}
