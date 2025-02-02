import React from 'react';
import {useNavigate} from "react-router-dom";

const Employee = () => {
    const navigate = useNavigate();
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]

    const handleDetail = (employeeID) => {
        navigate(`/details`, {state: {employee: employees[employeeID - 1]}});
    }

    return (
        <div>
            <table id="employees">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <th>
                            <button onClick={() => handleDetail(employee.id)}>Detail</button>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employee;