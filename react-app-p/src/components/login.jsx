import React, { useState } from 'react';
import './login.css';
import {useNavigate} from "react-router-dom";

const Login = () => {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Kullanıcı Adı:', username);
        console.log('Şifre:', password);
        if (username=='sengul' && password =='123'){
            console.log('Success')
            navigate('/hasta')
        }
        else {
            console.log('failed')
        }

    };


    return (
        <div className="login" >
            <h1>Lütfen Giriş Yapınız!</h1>


            <div className="login-container">


                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Kullanıcı Adı:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Şifre:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit} value='Home' >Giriş Yap</button>

                </form>
            </div>
        </div>
    );
};
export default Login;
