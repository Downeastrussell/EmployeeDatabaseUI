function printDOM() {
    document.querySelector("#DOMreturn").innerHTML = ""   
fetch("http://localhost:8088/employees", {
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(employees => employees.json())
    .then(employeeData => {
        
        employeeData.forEach(Element => {
           
            
        
        document.querySelector("#DOMreturn").innerHTML += `<fieldset>
        <div>First Name: ${Element.firstName}</div>
        <div>Last Name: ${Element.lastName}</div>
        <div>Email: ${Element.email}</div>
        <div>Phone: ${Element.phone}</div>
        <div>Birthday: ${Element.bday}</div>
        <div>Department: ${Element.department}</div>
        <div>Gender: ${Element.gender}</div>
        <div>Supervisor: ${Element.supervisor}</div>
        <div>Peon: ${Element.peon}</div>
        <button class="delete" id="delete-${Element.id}">Delete</button>
      </fieldset>`
    
    })
    })}

    printDOM();