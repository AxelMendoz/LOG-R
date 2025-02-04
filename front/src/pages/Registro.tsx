import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import api from "../config/axios"
import { isAxiosError } from "axios"

export default function Registro() {


    const navigate = useNavigate()

    const initialValues = {
        nombre: '',
        email: '',
        password: ''
    }
    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: initialValues})

    const handleRegister = async (formData: any) => {
        try {
            const {data} = await api.post(`/auth/crear-cuenta`, formData)
            console.log(data)
            setTimeout(() => {
                navigate('/')
            }, 1000);
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                console.log(error.response.data.error)
            }
        }
    }
    return (
        <>
            <h1>Registro</h1>
            <div>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="nombre" id="nombre"
                            {...register('nombre', {
                                required: 'El nombre es requerido'
                            })}
                        />
                    </div>
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
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
