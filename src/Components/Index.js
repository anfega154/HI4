import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './lib/SupabasseClient'
import { useAuth } from "../Auth/AuthContext";

function Index() {
    const { state, dispatch } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data: existingPass, error: existingPassError } = await supabase
                .from('users')
                .select('password')
                .eq('password', formData.password);

            const { data: existingEmail, error: existingEmailError } = await supabase
                .from('users')
                .select('email,id')
                .eq('email', formData.email)

            if ((existingPass && existingPass.length < 1) || (existingEmail && existingEmail.length < 1)) {
                alert('Correo o usuario incorrecto');
            } else {
                navigate('/home');
                dispatch({ type: "LOGIN", payload: { iduser: existingEmail[0].id } });
            }
        } catch (error) {
            alert('Error al interactuar con Supabase: ' + error.message);
        }
    };

    return (
        <div className="h-screen flex bg-black">
            <div className="w-1/2 flex justify-center items-center">
                <div className="text-white text-center">
                    <h2 className="text-4xl font-bold">HI 4</h2>
                    <p>Conecta con los que mas quieres.</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Iniciar sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Correo electrónico"
                            className="w-full p-2 border rounded mb-2"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="w-full p-2 border rounded mb-4"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button className="w-full mb-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Iniciar sesión
                        </button>
                        <button  className="w-full mb-2  bg-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-gray-600">
                            <Link to="/register">Registrarse</Link>
                        </button>
                    </form>
                    <a href="/" className="text-blue-500 hover:underline mt-2 block">
                        Olvidaste tu Contraseña?
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Index;
