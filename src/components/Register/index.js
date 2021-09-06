import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

const Register = ({
    email,
    password,
    changeEmail,
    changePassword,
    handleRegister
}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleRegister();
      };
      const handleChangeEmail = (evt) => {
        changeEmail(evt.target.value);
      };
      const handleChangePassword = (evt) => {
        changePassword(evt.target.value);
      };

  return (
        <div className="registerForm">
            <div className="registerForm-container"> 
                <div className="registerForm-containerLogin">
                    <span className="registerForm-span" >Inscrivez-vous</span>    
                    <Form className="registerForm-form" onSubmit={handleSubmit}>
                        <div className="registerForm-field">
                            <label className="registerForm-fieldLabel">Entrez un email:</label>
                            <Form.Input type="mail" className="registerForm-fieldInput" onChange={handleChangeEmail} value={email} placeholder="exemple: email@test.com"/>
                        </div>
                        <div className="registerForm-field">
                            <label className="registerForm-fieldLabel">Créez votre mot de passe:</label>
                            <Form.Input type="password" className="registerForm-fieldInput" onChange={handleChangePassword} value={password}  placeholder="maj-min-caractère spécial-chiffre"/>
                        </div>
                        <div className="registerForm-buttonSubmitWrapper">
                            <Button type="submit" className="registerForm-registerButton">S'inscrire</Button>
                        </div>
                    </Form>
                    <div className="registerForm-buttonAlreadyAccountWrapper">
                        <Button as={Link} to="/login" exact={+true}>Se connecter</Button>
                    </div>
                </div>
            </div>
        </div>   
  );
};

export default Register;