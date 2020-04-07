import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import LogoImage from '../../assets/logo.svg'

export default function Profile(){
    return (
        <div>
            <div className="profile-container">
                <header>
                    <img src={LogoImage} alt="Be The Hero" />
                    <span>Bem vinda, APAD</span>

                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button type="button">
                        <FiPower size={18} color="#E04120"/>

                    </button>
                </header>

                <h1>Casos cadastrados</h1>

                <ul>
                    <li>
                        <strong>Caso</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>A cadelinha foi atropelada</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00 reais</p>

                        <button type="button">

                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                    </li>
                    <li>
                        <strong>Caso</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>A cadelinha foi atropelada</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00 reais</p>

                        <button type="button">

                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                    </li>
                    <li>
                        <strong>Caso</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>A cadelinha foi atropelada</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00 reais</p>

                        <button type="button">

                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                    </li>
                    <li>
                        <strong>Caso</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>A cadelinha foi atropelada</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00 reais</p>

                        <button type="button">

                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                    </li>
                </ul>
            
            </div>
        </div>
    );
}