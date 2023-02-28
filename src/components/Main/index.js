import React from 'react';
import './main.css';

function Main() {
  return (
    <body>
      <div className="login-fundo">
        <div className="container container-info" style={{ transform: 'scale(0.655)' }}>
          <div className="container-block">
            <div className="form-wrap">
              <div className="form-main">
                <div className="form-box">
                  <div
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Didact Gothic',
                      alignSelf: 'center',
                      transform: 'scale(1.1)'
                    }}>
                    <h3 style={{ fontSize: '40px', lineHeight: '48px', fontWeight: 'inherit' }}>
                      Portal do Cliente
                    </h3>
                    <h4 style={{ fontSize: '16px', lineHeight: '25.6px', fontWeight: 'normal' }}>
                      Site em manutenção, desculpe o transtorno!
                    </h4>
                    <h4 style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'normal' }}>
                      {/* Desculpe o transtorno!<br/><br/> */}
                      ENTRE EM CONTATO COM O TIME DE ATENDIMENTO ATRAVÉS DOS CANAIS DISPONÍVEIS.
                      <br />
                      <br />
                      E-MAIL: <strong>atendimento.mdl@axor.com.br</strong>
                      <br />
                      <br />
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
  );
}

export default Main;
