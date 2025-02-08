import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import { useForm } from "react-hook-form";
import "../styles/Login.css"; // Asegúrate de importar el CSS correctamente

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    fechaNacimiento: "",  // Agregado el campo de fecha de nacimiento
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleLogin = async (formData: any) => {
    try {
      const { data } = await api.post(`/auth/login`, formData);

      // Almacenar el token en el almacenamiento local
      localStorage.setItem("TOKEN", data.token);
      console.log("Iniciando sesión");
      setTimeout(() => {
        navigate("/Dashboard");
        window.location.reload();
      }, 2000);
    } catch (error: any) {
      if (isAxiosError(error) && error.response) {
        console.log(error.response.data.error);
      }
    }
  };

  return (
    <div className="loginContainer">
      {/* Sección izquierda - Formulario */}
      <div className="leftSection">
        <div className="contentBox">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="form">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "El email es requerido",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && <p className="errorText">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "La contraseña es requerida",
                })}
              />
              {errors.password && <p className="errorText">{errors.password.message}</p>}
            </div>

            <div>
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <input
                type="date"
                id="fechaNacimiento"
                {...register("fechaNacimiento", {
                  required: "La fecha de nacimiento es requerida",
                })}
              />
              {errors.fechaNacimiento && <p className="errorText">{errors.fechaNacimiento.message}</p>}
            </div>

            <div>
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
          <p>
            ¿No tienes cuenta? <span className="registerLink" onClick={() => navigate("/registro")}>Regístrate</span>
          </p>
        </div>
      </div>

      {/* Sección derecha - Imagen de fondo */}
      <div className="rightSection"></div>
    </div>
  );
}
