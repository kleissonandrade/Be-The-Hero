import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import api from '../../services/api';


import './styles.css';
import ImageHeros from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg'

export default function Logon(){

  const [id, setId] = useState('');

  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    try{

      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')
      
    }catch(err){
      alert('Falha no Login!');

    }

  }

    return (
      <div className="logon-container">
          <section className="form">

            <img src={Logo} alt="logo"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                
                />
                <button type="submit" className="button">Entrar</button>

                <a className="back-link" href="/register">
                    <FiLogIn   size={16} color="#E02041" />
                    Não tenho cadastro                
                </a>
            </form>


          </section>

          <img src={ImageHeros} alt="heroes"/>

      </div>
      

    );
}