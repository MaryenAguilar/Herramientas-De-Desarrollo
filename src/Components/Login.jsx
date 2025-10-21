import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './Login.css';
import fondo from '../img/fondo.jpg';
import logo from '../img/logo.jpg';

const MySwal = withReactContent(Swal);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email.trim() || !password) {
            MySwal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos',
                icon: 'error',
                confirmButtonText: 'Cerrar',
            });
            return;
        }

        const params = new URLSearchParams({ correo: email, contraseña: password });

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        })
            .then(res => res.json()) 
            .then(data => {
                if (data.status === 'ok') {
                    MySwal.fire({
                        title: '¡Éxito!',
                        text: 'Has iniciado sesión correctamente',
                        icon: 'success',
                        confirmButtonText: 'Continuar',
                    }).then(() => {
                       
                        switch (data.rol) {
                            case 'administrador':
                                navigate('/admin');
                                break;
                            case 'usuario':
                                navigate('/usuario');
                                break;
                            default:
                                navigate('/usuario'); 
                                break;
                        }
                    });
                } else {
                    MySwal.fire({
                        title: 'Error',
                        text: 'Correo o contraseña incorrectos',
                        icon: 'error',
                        confirmButtonText: 'Cerrar',
                    });
                }
            })
            .catch(() =>
                MySwal.fire({
                    title: 'Error',
                    text: 'Error al iniciar sesión',
                    icon: 'error',
                    confirmButtonText: 'Cerrar',
                })
            );
    };

    return (
        <div className="login-background" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="login-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo Joyeria" className="logo" />
                </div>
                <div className="header-texts">
                    <h1>!Bienvenido a Joyeria Marley!</h1>
                    <h2>Ingresa tu correo y contraseña para iniciar sesión</h2>
                </div>
                <form onSubmit={e => e.preventDefault()} noValidate>
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={handleSubmit} className="btn-login">Ingresar</button>
                </form>
                <p>¿No tienes una cuenta? <a href="/registro" className="link">Regístrate</a></p>
            </div>
        </div>
    );
}