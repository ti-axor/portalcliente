import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/LogoMDL300.png';

function TabIcon() {
  return (
    <div>
      <Helmet>
        <meta name="title" content="Default Title" data-react-helmet="true" />
        <title>Portal Cliente / MDL Realty Incorporações</title>
        <link rel="icon" href={logo} />
      </Helmet>
    </div>
  );
}

export default TabIcon;
