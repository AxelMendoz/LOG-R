import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import { isAxiosError } from "axios";
import "../styles/Registro.css"; // Importa el archivo de estilos

export default function Registro() {
    const navigate = useNavigate();

    const initialValues = {
        nombre: '',
        email: '',
        password: '',
        rol: 'usuario', // Establecemos un valor inicial para el rol
        fechaNacimiento: '', // Campo de fecha de nacimiento
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

    const handleRegister = async (formData: any) => {
        console.log("Datos enviados desde el frontend:", formData); // Debug: Verificar datos antes de enviarlos

        try {
            const { data } = await api.post(`/auth/crear-cuenta`, formData);
            console.log("Respuesta del backend:", data);
            
            setTimeout(() => {
                navigate('/');
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
                            {...register('nombre', { required: 'El nombre es requerido' })}
                        />
                        {errors.nombre && <p className="errorMessage">{errors.nombre.message}</p>}
                        
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
                                {...register('rol')}
                                className="formSelect"
                            >
                                <option value="usuario">Usuario</option>
                                <option value="admin">Admin</option>
                            </select>
                            {errors.rol && <p className="errorMessage">{errors.rol.message}</p>}
                        </div>

                        {/* Campo de Fecha de Nacimiento */}
                        <input 
                            type="date" 
                            placeholder="Fecha de Nacimiento"
                            {...register('fechaNacimiento', { required: 'La fecha de nacimiento es requerida' })}
                        />
                        {errors.fechaNacimiento && <p className="errorMessage">{errors.fechaNacimiento.message}</p>}

                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>

            {/* Sección Derecha */}
            <div className="seccionRight"></div>
        </div>
    );
}
