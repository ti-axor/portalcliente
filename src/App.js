import React from 'react';
import './App.css';
import logo from './assets/LogoMDL300.png';

function App() {
  return (
    <div>
      <main className="App">
        <header className='header-top'>
          <div className='container menu-container header-in'>
            <div className='navbar-brand'>
              <div className='navbar-logo'>
                <img className='img-logo' height="80" width="170" src={logo} alt='logo mdl' />
              </div>
            </div>
          </div>
        </header>
        <body>
          <div className='login-fundo'>
            <div className='container container-info' style={{ transform: 'scale(0.655)' }}>
              <div className='container-block'>
                <div className='form-wrap'>
                  <div className='form-main'>
                    <div className='form-box'>
                      <div style={{ textAlign: 'center', fontFamily: 'Didact Gothic', alignSelf: 'center', transform: 'scale(1.1)' }}>
                        <h3 style={{ fontSize: '40px', lineHeight: '48px', fontWeight: 'inherit' }}>Porta do Cliente</h3>
                        <h4 style={{ fontSize: '16px', lineHeight: '25.6px', fontWeight: 'normal' }}>Informe os dados corretamente para iniciar seu acesso:</h4>
                        <h4 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'normal' }}>
                          DESCULPE O TRANSTORNO!<br/><br/>
                          ENTRE EM CONTATO COM O TIME DE ATENDIMENTO ATRAVÉS DOS CANAIS DISPONÍVEIS.<br/><br/>
                          E-MAIL: atendimento@mdl.com.br<br/><br/>
                          CENTRAL DE ATENDIMENTO: 4000.2239
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        <footer style={{ position: 'relative', textAlign: 'center', fontSize: '11px', letterSpacing: '0.5px', lineHeight: '17.6px', color: '#fff', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
          <div  className='footer-top'></div>
          <div className='footer-mid'></div>
          <div className='footer-bottom'>© Copyright 2022 Axor - All Rights Reserved</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
