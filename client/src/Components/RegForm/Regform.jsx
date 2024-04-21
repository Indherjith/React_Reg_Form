import React, { useEffect, useState } from 'react';
import { submitform } from '../../Redux/action';
import "./Regform.css"

const Regform = () => {

    const [fullname,setFullname] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const [contact,setContact] = useState("");
    const [gender,setGender] = useState("");
    const [male,setMale] = useState(false);
    const [female,setFemale] = useState(false);
    const [butten,setButten] = useState(true)

    const [fnvalid,setFnvalid] = useState(false);
    const [unvalid,setUnvalid] = useState(false);
    const [emailvalid,setEmailvalid] = useState(false);
    const [passvalid,setPassvalid] = useState(false);
    const [confirmpassvalid,setConfirmpassvalid] = useState(false);
    const [contactvalid,setContactvalid] = useState(false);
    const [gendervalid,setGendervalid] = useState(false);

    const handleSubmit=()=>{
        let payload = {fullname,username,email,password,contact,gender};
        submitform(payload);
    }

    useEffect(()=>{
        if(((fnvalid && unvalid) && (emailvalid && passvalid)) && ((confirmpassvalid && contactvalid) && gendervalid)){
            setButten(false);
        }
        else{
            setButten(true);
        }
    },[fnvalid,unvalid,emailvalid,passvalid,confirmpassvalid,gendervalid,contactvalid])

  return (
    <div className='formContainer'>
        <div className="formSpace">
            <p className="title">Registration Form</p>
            <div className="content">
                <p className="label">Fullname</p>
                <input type="text" className='field' onChange={e=>{
                    const regex = /^[a-zA-Z-'. ]+$/;
                    setFnvalid(regex.test(e.target.value))
                    setFullname((e.target.value).toUpperCase())
                }} />
                {fnvalid ? (<></>) : (<p className='err'>Please enter valid Fullname</p>)}
            </div>

            <div className="content">
                <p className="label">Username</p>
                <input type="text" className='field' onChange={e=>{
                    const res = /^[a-z0-9_\\.]+$/.exec(e.target.value);
                    const valid = !!res;
                    setUnvalid(valid);
                    setUsername(e.target.value)
                }} />
                {unvalid ? (<></>) : (<p className='err'>Includes Nums(0-9) Letters(a-z) . _ </p>)}
            </div>

            <div className="content">
                <p className="label">Email Address</p>
                <input type="email" className='field' onChange={e=>{
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
                    {
                        setEmailvalid(true);
                        setEmail(e.target.value)
                    }
                    else{
                        setEmailvalid(false)
                    }
                    
                }} />
                {emailvalid ? (<></>) : (<p className='err'>Enter valid email address</p>)}
            </div>

            <div className="content">
                <p className="label">Password</p>
                <input type="password" className='field' onChange={e=>{
                    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(e.target.value))
                    {
                        setPassvalid(true);
                        setPassword(e.target.value)
                    }
                    else{
                        setPassvalid(false)
                    }
                    
                }} />
                {passvalid ? (<></>) : (<p className='err'>Include length(8-15) 1-nums,1-lower(a-z),1-upper(A-Z),1-spec.character</p>)}
            </div>

            <div className="content">
                <p className="label">Confirm Password</p>
                <input type="password" className='field' onChange={e=>{
                    if (password === e.target.value)
                    {
                        setConfirmpassvalid(true);
                        setConfirmpassword(e.target.value)
                    }
                    else{
                        setConfirmpassvalid(false)
                    }
                    
                }} />
                {confirmpassvalid ? (<></>) : (<p className='err'>Confirm password and password must be same</p>)}
            </div>

            <div className="content">
                <p className="label">Contact Number</p>
                <input type="tel" className='field' onChange={e=>{
                    const pattern = /^\d{10}$/;
                    const isValid = pattern.test(e.target.value);
                    setContactvalid(isValid);
                    setContact(e.target.value)
                }}/>
                {contactvalid ? (<></>) : (<p className='err'>Enter valid contact number</p>)}
            </div>

            <div className="content">
                <p className="label">Gender</p>
                <input type="radio" className='ratio' value={"male"} checked={male} onChange={e=>{
                    setGendervalid(true);
                    setFemale(false)
                    setMale(true)
                    setGender(e.target.value)
                }}/> Male <br/>
                <input type="radio" className='ratio' value={"female"} checked={female} onChange={e=>{
                    setGendervalid(true);
                    setGender(e.target.value)
                    setMale(false)
                    setFemale(true)
                }}/> Female <br/>
                {gendervalid ? (<></>) : (<p className='err'>Select Gender</p>)}
            </div>

            <div className="content_btn"><button disabled={butten} onClick={e=>handleSubmit()}>Submit</button></div>
            
        </div>
    </div>
  )
}

export default Regform