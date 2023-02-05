import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';


export default function Register() {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.loginUsers)
    const [newUser, setNewUser] = useState(users)


    function saveLoginData(){
        const newID = users.length + 1
        dispatch({type: 'ADD_USER', payload: newUser, id: newID})
    }


    function inputMemory(e) {
        setNewUser(prev => {
          return {...prev, telnumber: e.target.value}
        })
      }
    
      function inputMemory2(e) {
        setNewUser(prev => {
          return {...prev, password: e.target.value}
        })
      }

    let navigate = useNavigate();

    function goBack() {
        navigate('/')
    }

    function goToLogin() {
        navigate('/login')
    }

    return(
    <div className='container4'>
        <div className='login-container'>
            <div className='login-header'>
                <p className='plogin'>Регистрация</p>
                <img className='loginback' onClick={goBack} src='./assets/photos/rectangle.svg'/>
            </div>
            <div className='login-inputs'>
                <input className='login-input1' placeholder='Телефон' onClick={(e) => {inputMemory(e)}}/>
                <input className='login-input2' placeholder='Пароль' onClick={(e) => {inputMemory2(e)}}/>
            </div>
            <div className='login-buttons'>
                <button className='login-btn1' onClick={goToLogin}><p className='plogin-button1'>Войти в аккаунт</p></button>
                <button className='login-btn2' onClick={saveLoginData}><p className='plogin-button2'>Зарегистрироваться</p></button>
            </div>
        </div> 
    </div>
    )
}