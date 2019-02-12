//save employee function
const saveEmployee = ()=> {document.querySelector("#save").addEventListener("click", ()=> {
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const email = document.querySelector("#email").value
    const phone = document.querySelector("#phone").value
    const bday = document.querySelector("#bday").value
    const department = document.querySelector("#department").value
    const gender = document.querySelector("#gender").value
    const supervisor = document.querySelector("#supervisor").checked
    const peon = document.querySelector("#peon").checked
    

    newEmployee = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        bday: bday,
        department: department,
        gender: gender,
        supervisor: supervisor,
        peon: peon


    }

    POSTemployee(newEmployee)
    printDOM(newEmployee);

})}