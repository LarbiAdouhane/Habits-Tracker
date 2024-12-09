import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Un lien de réinitialisation a été envoyé à : ${email}");
        setEmail("");
    };

    return (
        <div className="CONTAINER">
            <div className="formss">
                <h2>Mot de passe oublié</h2>
                <br/>
                <h5>Tapez votre email et entrez le code envoyée </h5>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Entrez votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="btn-primary" type="submit">Envoyer code de verification</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;