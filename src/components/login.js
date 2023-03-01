import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Login2() {
    

    const users = useSelector((state) => state.users.loginUsers)
    const admin = useSelector((state) => state.users.adminUser)

    let [data,setData] = useState({
        telnumber: '',
        password: '',
      })
    
      function setTelnumber(telnumber){
        setData({...data,telnumber})
      }
    
      function setPassword(password){
        setData({...data,password})
      }

    function LoginInSistem(e) {
        e.preventDefault()
        if (data.telnumber === '' || data.password === '') {
          alert('Please Fill All The Fields')
        } else {
          if (data.telnumber === users[0].telnumber && data.password === users[0].password) {
            navigate('/', {state: {
              isAdmin: false
            }})
          }else if(data.telnumber === admin.telnumber && data.password === admin.password) {
            navigate('/', {state: {
              isAdmin: true
            }})
          }
          else {
            alert ("Wrong Password")
          }
        }
      }

    let navigate = useNavigate();

    function goBack() {
        navigate('/')
      }

    return(
    <div className='container4'>
        <div className='logologin'>
          <img src='./assets/photos/Logo.png'/>
        </div>
        <div className='login-container'>
            <div className='login-header'>
                <p className='plogin'>Вход в аккаунт</p>
                <img className='loginback' onClick={goBack} src='./assets/photos/rectangle.svg'/>
            </div>
            <div className='login-inputs'>
                <input className='login-input1'  value={data.telnumber} placeholder='Телефон'  onChange={(e) => {setTelnumber(e.target.value)}} />
                <input className='login-input2'  value={data.password} placeholder='Пароль' onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <div className='login-buttons'>
                <button className='login-btn1'><p className='plogin-button1'>Зарегистрироваться</p></button>
                <button className='login-btn2' onClick={LoginInSistem}><p className='plogin-button2'>Войти в аккаунт</p></button>
            </div>
        </div> 
    </div>
    )
}