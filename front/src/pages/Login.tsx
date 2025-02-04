import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import { useForm } from "react-hook-form";

export default function Login() {
    
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: ''
    }

    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: initialValues})

    const handleLogin = async (formData: any ) => {
        try {
         const { data } = await api.post(`/auth/login`, formData)
 
         localStorage.setItem('TOKEN', data)
         console.log('Iniciando sesión');
         setTimeout(() => {
             navigate('/')
             window.location.reload()
         }, 2000);
        } catch (error: any) {
             if (isAxiosError(error) && error.response) {
                 console.log(error.response.data.error) 
             }
        }
        
     }
    return (
        <>
            <div>
                <h1>Login</h1>
                <form 
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <div>
                        <label htmlFor="email">Emal</label>
                        <input type="email" id="email" 
                        {...register('email', {
                            required: 'The email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Invalid email'
                            }
                        })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" 
                        {...register('password', {
                            required: 'La contraseña es requerida',
                        })}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
