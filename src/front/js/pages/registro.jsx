import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Registro = () => {
    const navigate = useNavigate();
        const { store, actions } = useContext(Context);
        const [email, setEmail] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [name, setName] = React.useState("");
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            actions.crearUsuario({
                email,
                password,
                name,
                is_active: true
            });
            navigate("/login")
        };
        return (
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Name</label>
                    <input type="text" className="form-control" id="validationCustom01" required
                        placeholder="Fabian" onChange={(e) => setName(e.target.value)} />
                </div>
    
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationCustom02" required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
    
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input type="email" className="form-control" id="validationCustomUsername" required
                            placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
    
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
    
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        );
    };
    

export default Registro;
