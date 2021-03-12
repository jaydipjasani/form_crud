import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';

export default function About(props) {
    const id = props.match.params.id;
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const newData = userData && userData.find(user => user.id === id)
        setUserData(newData)
    }, [])
    return (
        <div className="container">
            <div className="py-4">
                <h1>Person Detail</h1>
                <h2>Id : {userData && userData.id}</h2>
                <h2>Name : {userData && userData.fname}</h2>
                <h2>Phone : {userData && userData.phone}</h2>
                <h2>Email : {userData && userData.email}</h2>
                <h2>Gender : {userData && userData.gender}</h2>
                <h2>City : {userData && userData.city}</h2>
            </div>
        </div>
    )
}
