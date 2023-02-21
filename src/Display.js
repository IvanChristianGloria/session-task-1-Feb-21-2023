import React from 'react'

const Display = ({d}) => {

    const employees = d.map(({id, name, age, dob, salary, designation, image, department}) => 
        <div key={id} style={{display: "flex", alignItems: "center", marginBottom: "20px", gap: "10px"}}>
            <button onClick={
            () => alert(
                `Name: ${name} \nAge: ${age} \nDate of Birth: ${dob} \nSalary: ${salary} \nDesignation: ${designation} \nDepartment: ${department}`
            )
            }>{name}</button>
            <img style={{height: "50px", width: "50px"}} src={image} alt=''/> {designation}
        </div>
    )

    return(
        <div>
           {employees} 
        </div>
    )
}

export default Display