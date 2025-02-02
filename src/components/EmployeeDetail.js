import React from 'react';
import {useLocation} from "react-router-dom";

const EmployeeDetail = () => {
    const {state} = useLocation();
    console.log(state);

    return (
        <div>
            <h2>Employee details</h2>
            <table id="employee">
                <tbody>
                <tr>
                    <td>ID: </td>
                    <td>{state.employee.id}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{state.employee.name}</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>{state.employee.age}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeDetail;