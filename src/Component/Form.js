import React, { useEffect, useState, useRef } from 'react'
import { useForm } from "react-hook-form";
import "../App.css"

// used Hook forms
const Form = (props) => {
    const [selectData, setselectData] = useState([])
    const id = props.match.params.id;
    const { register, handleSubmit, errors, watch } = useForm(
        {
            defaultValues: selectData ? selectData : ""
        }
    );
    const [state, setstate] = useState()

    const password = useRef({});
    password.current = watch("password", "");

    console.log("selectData", selectData);
    // Declare state to store input value in Array

    useEffect(() => {
        let localstoragData = JSON.parse(localStorage.getItem('userData'));
        setstate(localstoragData)

        const newData = localstoragData && localstoragData.find(user => user.id === id)
        setselectData(newData)

    }, [])


    // submit value and store in localstorage
    const submitData = (data) => {
        const localstoragData = localStorage.getItem('userData')
        data.id = Math.random().toString().substr(9, 4);

        if (localstoragData && JSON.parse(localstoragData).length) {
            const newdata = [...JSON.parse(localstoragData)]
            newdata.push(data)
            localStorage.setItem('userData', JSON.stringify(newdata))
        } else {
            localStorage.setItem('userData', JSON.stringify([data]))
        }
    }



    const deleteUpdateId = () => {
        let localstoragData = JSON.parse(localStorage.getItem('userData'));
        localstoragData = localstoragData.filter((item) => item.id !== id);
        localStorage.setItem("userData", JSON.stringify(localstoragData));
        setstate(localstoragData);
    }


    return (

        // Form Design
        <div className="main">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit(submitData)}>
                <label className="displayrow">First Name :
                <input className="inputfield" type="text" name="fname" autoComplete="off"
                        // value={user && user.fname}
                        defaultValue={selectData && selectData.fname}
                        ref={register({ pattern: /^[a-zA-Z]+$/, required: '**Please Enter First Name' })}
                        placeholder="Enter First Name"></input><br></br>
                    {errors.fname && <span>{errors.fname.message}</span>}
                </label>

                <label className="displayrow">Mobile No. :
                <input className="inputfield" type="number" name="phone" autoComplete="off"
                        defaultValue={selectData && selectData.phone}
                        ref={register({ required: true, pattern: /^[0-9]{10}$/ })}
                        placeholder="Enter Phone No."></input><br></br>
                    {errors.phone && <span>**Please Enter 10 Digits</span>}
                </label>

                <label className="displayrow">Email :
                <input type="email" name="email" autoComplete="off"
                        defaultValue={selectData && selectData.email}
                        ref={register({ pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, required: true })}
                        placeholder="Enter Email Address"></input><br></br>
                    {errors.email && <span>**Please Enter Valid Email</span>}
                </label>

                <label className="displayrow">Gender :
                    <input className="radio" name="gender" type="radio" value="Male" ref={register({ required: true })} />Male
                    <input className="radio" name="gender" type="radio" value="Female" ref={register({ required: true })} />Female
                    <input className="radio" name="gender" type="radio" value="Other" ref={register({ required: true })} />Other<br></br>
                    {errors.gender && <span>**Please Select Gender</span>}
                </label>



                <label className="displayrow">City :
                <select name="city" ref={register({ required: true })}>
                        <option selected={selectData && selectData.city === "Surat" ? true : false} value="Surat">Surat</option>
                        <option selected={selectData && selectData.city === "Mumbai" ? true : false} value="Mumbai"> Mumbai</option>
                        <option selected={selectData && selectData.city === "Delhi" ? true : false} value="Delhi"> Delhi</option>
                        <option selected={selectData && selectData.city === "Ahmedabad" ? true : false} value="Ahmedabad"> Ahmedabad</option>
                    </select><br></br>
                    {errors.city && <span>**Please Select City</span>}
                </label>

                <label className="displayrow">Address :
                <textarea name="address"
                        defaultValue={selectData && selectData.address}
                        ref={register({ required: true })} /><br></br>
                    {errors.address && <span>**Please Enter Address</span>}
                </label>

                {/* <label className="displayrow">Profile :
                <input type="file" name="profile"
                        // defaultValue={selectData && selectData.profile}
                        ref={register({ required: true })} /><br></br>
                    {errors.profile && <span>**Please Select Profile Picture</span>}
                </label> */}

                <label>Password
                <input className="inputfield"
                        defaultValue={selectData && selectData.password}
                        name="password"
                        type="password"
                        ref={register({
                            required: "You must specify a password",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                    /><br></br>
                    {errors.password && <span>{errors.password.message}</span>}
                </label><br></br>

                <label>Repeat password
                <input
                        name="password_repeat"
                        defaultValue={selectData && selectData.password_repeat}
                        type="password"
                        ref={register({
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })}
                    /><br></br>
                    {errors.password_repeat && <span>{errors.password_repeat.message}</span>}
                </label><br></br>

                <button className="btn btn-primary" type="submit" onClick={deleteUpdateId} >Register</button>
            </form>
        </div>
    )
}

export default Form;

