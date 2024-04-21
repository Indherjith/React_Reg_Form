import axios from "axios";

export const submitform=(payload)=>{
    axios.post("http://localhost:8080/register",{...payload})
    .then(res=>{
        console.log(res.data);
        alert(res.data.msg)
        window.location.reload();
    })
    .catch(err=>{
        console.log(err)
        alert("Network Error!")
    })
}