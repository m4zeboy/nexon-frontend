import React from 'react'
import email from '../../assets/email.svg';
import phone from '../../assets/phone.svg';
import './style.scss';

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">
        <nav className="main-manu">
          <h3>Menu Principal</h3>
          <ul>
            <li>
              <a href="#">Clubes Europeus</a>
            </li>
            <li>
              <a href="#">Seleções</a>
            </li>
            <li>
              <a href="#">NBA</a>
            </li>
            <li>
              <a href="#">Linha Casual</a>
            </li>
          </ul>
        </nav>
        <nav className="about">
          <h3>Mais Informações</h3>
          <ul>
            <li>
              <a href="#">Perguntas frequents - FAQ</a>
            </li>
            <li>
              <a href="#">Reembolso, Trocas e Devoluções</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Políticas Nexon</a>
            </li>
            <li>
              <a href="#">Compra segura</a>
            </li>
            <li>
              <a href="#">Envios e prazos</a>
            </li>
          </ul>
        </nav>

        <nav className="contact">
          <h3>Entre em contato</h3>
          <ul>
            <li>
              <a href="#">
                <img src={phone} alt="" />
                <span>5518996410420</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={phone} alt="" />
                <span>18 99641-0420</span>
              </a>
            </li>

            <li>
              <a href="#">
                <img src={email} alt="" />
                <span>suporte@buynexon.com.br</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
