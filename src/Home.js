import { useEffect, useState } from "react";
import { auth } from "./fierbase";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setData({name: user.displayName, email: user.email})
            }else{
                navigate("/");
            }
        })
    },[]);
    const signOut = () => {
        auth.signOut()
        .then(()=>{
            navigate("/");
        }).catch((err)=>{
            Swal.fire
            ({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            console.log(err);
        })
    }
    return(
        <>
            {/* <h1 className="text-center">Username : {data.name}</h1>
            <h1 className="text-center">Email : {data.email}</h1>
            <button onClick={signOut} className="btn btn-danger">sign out</button> */}
            
            <div class="bg text-center">
            <div class="centered">
                <p class="firstLine"> C &nbsp; O &nbsp; N &nbsp; F &nbsp; O &nbsp; R &nbsp; M &nbsp; . &nbsp;  P &nbsp; A &nbsp; G &nbsp; E &nbsp; </p>
                <p><h1 className="conform">UserName : {data.name}</h1></p>
                <p><h1 className="conform">Email : {data.email}</h1></p>
                <button onClick={signOut} className="btn btn-info mt-3">sign out</button>
                </div>
            </div>

            {/* <div class="animated-title">
            <div class="text-top">
                <div>
                <span>UserName : {data.name}</span>
                <span>Email : {data.email}</span>
                </div>
            </div>
            <div class="text-bottom">
                <div className="btn btn-light mt-2" onClick={signOut}>for the win!</div>
            </div>
            </div> */}
        </>
    )
}

export default Home;