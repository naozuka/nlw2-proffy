import React, { useState, FormEvent }  from 'react';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import eyeIcon from '../../assets/images/icons/eye.svg';
import eyeHiddenIcon from '../../assets/images/icons/eye-hidden.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';


function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function login(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('login', {
            params: {
                email, 
                password
            }
        });
        
        console.log(response.data);
    }

    return (
        <div id="page-login">
            <div className="logo-container">
                <div className="logo-content">                    
                    <img src={logoImg} alt="Proffy"/>
                    <h3>Sua plataforma de estudos online.</h3>
                </div>
            </div>

            <div className="login-container">
                <div className="login-content">
                    <h2>Fazer Login</h2>
                    <Input 
                        name="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => { setEmail(e.target.value) }} />
                            
                    <div className="container-password">
                        <Input 
                            name="password" 
                            type="password"
                            placeholder="Senha" 
                            value={password} 
                            onChange={(e) => { setPassword(e.target.value) }} />
                        {/* <img src={eyeIcon} alt="Mostrar senha"/> */}
                    </div>

                    <div className="container-forgot-password">
                        <div className="container-remind-me">
                            <input type="checkbox" id="remind-me"/>
                            Lembrar-me
                        </div>
                        <button>
                            Esqueci minha senha
                        </button>
                    </div>

                    <button className="btn-login">
                        Entrar
                    </button>

                    <div className="login-footer">
                        <div className="give-classes">
                            Não tem conta?
                            <a href="">Cadastre-se</a>
                        </div>

                        <div className="its-free">
                            É de graça
                            <img src={purpleHeartIcon} alt="Coração roxo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;