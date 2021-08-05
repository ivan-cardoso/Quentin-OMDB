import React, {useState,useEffect} from 'react'
import axios from "axios"
import { useHistory } from 'react-router' 
import s from "./style.module.scss" 
import dancing from '../../utils/dancing.svg'
import dancing2 from '../../utils/dancing2.png'
import hurt from '../../utils/reanimation.svg'

import Form from "../../components/Form/Form"

const CreateUser = () => {

    const [createUserInput, setCreateUserInput] = useState({
        email : "", 
        password : ""
    })
    const history = useHistory()

    const [invalid, setInvalid] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("/api/register/", createUserInput)
        .then((res) => res.data)
        .then((data) => {
            setCreateUserInput(data)
            history.push("/login")
        })
        .catch(()=>setInvalid(true))
    }

    const handleChange = (e) =>{
        setTimeout(()=> setInvalid(false), 800)
        const key = e.target.name
        const value = e.target.value
        setCreateUserInput({...createUserInput, [key] : value})
    }  

    return (
        <div className={s.loginSection}>
            <div className={`container ${s.loginContainer}`}>
            <div className={`row ${s.loginRow} `}>

                <div className={`col-12 col-md-6 ${s.titleHomeContainer}`}>
                    <h2 className={`${s.loginQuentinTitle} `} >Quentin</h2>
                    {/* <img src={hurt} alt="" srcset="" /> */}
                    <img src={dancing2} alt="" srcset="" className={s.dancingSvg} />
                </div>

                <div className={`col-12 col-md-6 ${s.formControlContainer}`} >
                    <div className={`${s.formControl}`} >
                        <div className={`container ${s.createUserForm}`}>
                            <Form 
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            title={"Create user"} 
                            buttonText={"Create user"}/>   

                            <div className={`${s.userInvalidSection}`}>
                                {invalid ?
                                    <div className={`${s.userInvalidContainer}`}>
                                        <p className={`${s.userInvalid}`}>User Invalid</p> 
                                    </div> 
                                    : <></>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreateUser
