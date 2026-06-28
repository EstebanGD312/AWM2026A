import Estudiante from "../components/Estudiante";
import { useNavigate } from "react-router-dom";
import EstudianteForm from "../components/EstudianteForm";
import { useState } from "react";

const EstudiantePage = (props) => {
    const { estudiantes } = props;
    const navegar = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    return (
        <div>
            <button onClick={() => navegar("/estudiantes/nuevo")}>+</button>
            <button onClick={() => {
                localStorage.clear()
                navegar("/Usuarios/login")

            }}>Cerrar sesión</button>
            {
                estudiantes.map((estudiante) =>
                    <div key={estudiante.id}>
                        <Estudiante
                            nombre={estudiante.nombre}
                            edad={estudiante.edad}
                            url={estudiante.url} />
                        <button onClick={() => navegar(`/estudiantes/detalle/${estudiante.id}`)}>Detalle</button>
                    </div>

                )
            }
            <button onClick={() => {
                if (!token) {
                    navegar('/estudiantes')
                    console.log('No permitido')
                } else {
                    navegar('/Usuarios')
                }
            }}>Ver Usuarios</button>
        </div>
    );
}
export default EstudiantePage;