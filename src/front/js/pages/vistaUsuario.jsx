import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



const vistaUsuario = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const handleClickVistaPrivada = async () => {
        const tokenTrue = await actions.verificarToken()
        if (tokenTrue) {
            const datos = store.info;
        }
    }
    const handleClickLogout = () => {
        sessionStorage.removeItem("token");
        actions.resetInfo();
        navigate("/");
    }
    return (
        <div className="container">
            {store.info ? (
                <div>
                    <h1>Vista de Usuario</h1>
                    <p>Nombre: {store.info.name}</p>
                    <p>Email: {store.info.email}</p>
                    <p>id: {store.info.id}</p>
                </div>
            ) : (
                <h1>No hay datos de usuario</h1>
            )}
            <h1>Vista de Usuario</h1>
            <p>Esta es la vista de usuario.</p>
            <button onClick={()=>handleClickVistaPrivada()} className="btn btn-primary">
                mostrar datos de usuario
            </button>
            <button onClick={() => handleClickLogout()} className="btn btn-primary">
                Logout
            </button>
        </div>
    );
}
export default vistaUsuario;