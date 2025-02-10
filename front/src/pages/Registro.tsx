import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import { isAxiosError } from "axios";
import "../styles/Registro.css"; // Importa el archivo de estilos

export default function Registro() {
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'usuario',
        securityAnswer: '',  // Cambié el campo para coincidir con la respuesta de seguridad
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

    const handleRegister = async (formData: any) => {
        console.log("Datos enviados desde el frontend:", formData); // Debug: Verificar datos antes de enviarlos

        try {
            const { data } = await api.post(`/user/create`, formData);
            console.log("Respuesta del backend:", data);

            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                console.log("Error del backend:", error.response.data);
            }
        }
    };

    return (
        <div className="registerContainer">
            {/* Sección Izquierda */}
            <div className="seccionIzquierda">
                <div className="contentBox">
                    <h1>Registro</h1>
                    <p>Únete y comienza a disfrutar de nuestra plataforma</p>
                    <form className="form" onSubmit={handleSubmit(handleRegister)}>
                        <input 
                            type="text" 
                            placeholder="Nombre"
                            {...register('firstName', { required: 'El nombre es requerido' })}
                        />
                        {errors.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
                        
                        <input 
                            type="text" 
                            placeholder="Apellido"
                            {...register('lastName', { required: 'El apellido es requerido' })}
                        />
                        {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
                        
                        <input 
                            type="email" 
                            placeholder="Email"
                            {...register('email', { 
                                required: 'El email es requerido', 
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Formato de email inválido'
                                }
                            })}
                        />
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}
                        
                        <input 
                            type="password" 
                            placeholder="Contraseña"
                            {...register('password', { required: 'La contraseña es requerida' })}
                        />
                        {errors.password && <p className="errorMessage">{errors.password.message}</p>}

                        {/* Campo de selección para rol */}
                        <div className="formSelectContainer">
                            <select 
                                {...register('role')}
                                className="formSelect"
                            >
                                <option value="usuario">Usuario</option>
                                <option value="admin">Admin</option>
                            </select>
                            {errors.role && <p className="errorMessage">{errors.role.message}</p>}
                        </div>

                        {/* Campo de Pregunta de Seguridad */}
                        <input 
                            type="text" 
                            placeholder="¿Qué edad tienes?"
                            {...register('securityAnswer', { required: 'La respuesta es requerida' })}
                        />
                        {errors.securityAnswer && <p className="errorMessage">{errors.securityAnswer.message}</p>}

                        <button type="submit">Registrarse</button>
                    </form>
                    {/* Div con enlace para regresar al inicio de sesión */}
                    <div className="redirectToLogin" onClick={() => navigate('/')}>
                        ¿Ya tienes cuenta? Inicia sesión aquí
                    </div>
                </div>
            </div>

            {/* Sección Derecha */}
            <div className="seccionRight"></div>
        </div>
    );
}
