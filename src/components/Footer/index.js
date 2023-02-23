import React from 'react';
import './footer.css';

function footer() {
    const styleIcons = {
        color: '#ac9789',
        fontSize: '1.5rem',
    };
    const styleGlobe = {
        fontSize: '1.1rem',
        color: '#ac9789',
        verticalAlign: '-webkit-baseline-middle',
    };
    const styleFooter = {
        position: 'relative',
        textAlign: 'center',
        fontSize: '11px',
        letterSpacing: '0.5px',
        lineHeight: '17.6px',
        color: '#fff',
        fontFamily: 'Didact Gothic',
    };
    const iconsMidias = [
        {
          address: 'https://www.mdl.com.br/',
          icon: <i class="fas fa-globe fa-fw" style={styleGlobe}></i>
        },
        {
          address: 'https://www.mdl.com.br/blog/',
          icon: <i class="fa-brands fa-blogger fa-fw" style={styleIcons}></i>
        },
        {
          address: 'https://www.facebook.com/mdlrealty/?fref=ts',
          icon: <i class="fa-brands fa-square-facebook fa-fw" style={styleIcons}></i>
        },
        {
          address: 'https://www.instagram.com/mdl_realty/',
          icon: <i class="fa-brands fa-square-instagram fa-fw" style={styleIcons}></i>
        },
        {
          address: 'https://www.linkedin.com/company/mdl-realty',
          icon: <i class="fa-brands fa-linkedin fa-fw" style={styleIcons}></i>
        },
        {
          address: 'https://www.youtube.com/channel/UCySDn85QOXBo6H2vtFLrK0w?spfreload=5',
          icon: <i class="fa-brands fa-square-youtube fa-fw" style={styleIcons}></i>
        }
      ];
      const textAddress = [
        {
          title: 'HORÁRIO DE ATENDIMENTO',
          direction: (
            <div className='footer-title'>
              Segunda a Sexta, das 9h às 18h
            </div>
          ),
          phone: ''
        },
        {
          title: 'RIO DE JANEIRO',
          direction: (
            <div className='footer-title'>
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
            <div className='footer-title'>
              Condomínio Ed. Comercial Iracema<br/>
              Rua Dr. Renato Paes de Barros, 717 4º andar - cj. 44 - Itaim Bibi<br/>
              CEP 04530-001
            </div>
          ),
          phone: '4000-2239'
        },
      ];
  return (
    <footer style={styleFooter}>
        <div  className='footer-top'>
        {textAddress.map((e) => (
            <div className='footer-box'>
                <div className='footer-sub-title'>
                    {e.title}
                </div>
                {e.direction}
                {e.phone !== '' && <div className='footer-title'>
                    <i class="fa-solid fa-phone" style={{ paddingRight: '3px', fontSize: '10px' }}></i>
                    {e.phone}
                </div>}
            </div>
        ))}
        </div>
        <div className='footer-mid'>
            <div className='footer-last'>
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
  )
}

export default footer;
