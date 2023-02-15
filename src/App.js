import React from 'react';
import './App.css';
import logo from './assets/LogoMDL300.png';

function App() {
  const iconsMidias = [
    {
      address: 'https://www.mdl.com.br/',
      icon: <i class="fas fa-globe fa-fw" style={{ fontSize: '1.1rem', color: '#ac9789', verticalAlign: '-webkit-baseline-middle' }}></i>
    },
    {
      address: 'https://www.mdl.com.br/blog/',
      icon: <i class="fa-brands fa-blogger fa-fw" style={{ color: '#ac9789', fontSize: '1.5rem' }}></i>
    },
    {
      address: 'https://www.facebook.com/mdlrealty/?fref=ts',
      icon: <i class="fa-brands fa-square-facebook fa-fw" style={{ color: '#ac9789', fontSize: '1.5rem' }}></i>
    },
    {
      address: 'https://www.instagram.com/mdl_realty/',
      icon: <i class="fa-brands fa-square-instagram fa-fw" style={{ color: '#ac9789', fontSize: '1.5rem' }}></i>
    },
    {
      address: 'https://www.linkedin.com/company/mdl-realty',
      icon: <i class="fa-brands fa-linkedin fa-fw" style={{ color: '#ac9789', fontSize: '1.5rem' }}></i>
    },
    {
      address: 'https://www.youtube.com/channel/UCySDn85QOXBo6H2vtFLrK0w?spfreload=5',
      icon: <i class="fa-brands fa-square-youtube fa-fw" style={{ color: '#ac9789', fontSize: '1.5rem' }}></i>
    }
  ];
  const textAddress = [
    {
      title: 'HORÁRIO DE ATENDIMENTO',
      direction: (
        <div style={{ fontSize: '12px', color: '#ac9789' }}>
          Segunda a Sexta, das 9h às 18h
        </div>
      ),
      phone: ''
    },
    {
      title: 'RIO DE JANEIRO',
      direction: (
        <div style={{ fontSize: '12px', color: '#ac9789' }}>
          Torre do Rio Sul<br/>
          Rua Lauro Muller, 116 7° andar - Sl 705 - Botafogo<br/>
          CEP 22290-160
        </div>
      ),
      phone: '4000-2239'
    },
    {
      title: 'SÃO PAULO',
      direction: (
        <div style={{ fontSize: '12px', color: '#ac9789' }}>
          Condomínio Ed. Comercial Iracema<br/>
          Rua Dr. Renato Paes de Barros, 717 4º andar - cj. 44 - Itaim Bibi<br/>
          CEP 04530-001
        </div>
      ),
      phone: '4000-2239'
    },
  ];
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
                        <h3 style={{ fontSize: '40px', lineHeight: '48px', fontWeight: 'inherit' }}>
                          Porta do Cliente
                        </h3>
                        <h4 style={{ fontSize: '16px', lineHeight: '25.6px', fontWeight: 'normal' }}>
                          Site em manutenção, desculpe o transtorno!
                        </h4>
                        <h4 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'normal' }}>
                          {/* Desculpe o transtorno!<br/><br/> */}
                          ENTRE EM CONTATO COM O TIME DE ATENDIMENTO ATRAVÉS DOS CANAIS DISPONÍVEIS.<br/><br/>
                          E-MAIL: <strong>atendimento.mdl@axor.com.br</strong><br/><br/>
                          CENTRAL DE ATENDIMENTO: <strong>4000.2239</strong>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        <footer style={{ position: 'relative', textAlign: 'center', fontSize: '11px', letterSpacing: '0.5px', lineHeight: '17.6px', color: '#fff', fontFamily: 'Didact Gothic' }}>
          <div  className='footer-top'>
            {textAddress.map((e) => (
              <div style={{ padding: '5px 0 5px 0', width: '366px' }}>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', padding: '5px 0 5px 0' }}>
                  {e.title}
                </div>
                {e.direction}
                {e.phone !== '' && <div style={{ fontSize: '12px', color: '#ac9789' }}>
                  <i class="fa-solid fa-phone" style={{ paddingRight: '3px', fontSize: '10px' }}></i>
                  {e.phone}
                </div>}
              </div>
            ))}
          </div>
          <div className='footer-mid'>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '175px' }}>
              {iconsMidias.map((e) => (
                <div>
                  <a href={e.address} target="_blank" rel="noreferrer">
                    {e.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className='footer-bottom'>© Copyright 2022 Axor - All Rights Reserved</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
