import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Table() {
    let history = useHistory()
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem("userData"));
        if (getUser) {
            setTableData(getUser);
        }
    }, [])

    const handleDelete = (id) => {
        let items = JSON.parse(localStorage.getItem("userData"));
        items = items.filter((item) => item.id !== id);
        localStorage.setItem("userData", JSON.stringify(items));
        setTableData(items);
    }

    const editData = (id) => {
        history.push({
            pathname: `/form/${id}`,
        });
    }

    const viewData = (id) => {
        history.push({
            pathname: `/about/${id}`,
        });
    }


    return (
        <div className="">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((user, index) => (
                            <tr key={index} id={user.id}>
                                <th>{index + 1}</th>
                                {/* <td>{user.profile}</td> */}
                                <td>{user.fname}</td>
                                <td>{user.fname}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.city}</td>
                                <td>
                                    <button className="btn btn-primary mr-2" onClick={e => viewData(user.id)} >View </button>
                                    <button className="btn btn-outline-primary mr-2" onClick={e => editData(user.id)}> Edit</button>
                                    <button className="btn btn-danger" onClick={e => handleDelete(user.id)} > Delete </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
