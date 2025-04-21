import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const login = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuarioCorrecto = await actions.loginUsuario({ email, password });
        console.log(usuarioCorrecto);
        if (usuarioCorrecto) {
            alert("Usuario logueado correctamente");
            navigate("/dataPrivada");
        }
        else {
            alert("Error al loguear el usuario");
        }

    };
    return (
        <div className="container">
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Email</label>
                    <input type="email" className="form-control" id="validationCustom01" required
                        placeholder="" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationCustom02" required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
            <button className="btn btn-primary" onClick={() => navigate("/registro")}>
                registrar
            </button>
        </div>


    );
}
export default login;