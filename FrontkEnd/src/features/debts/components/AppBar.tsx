// AppBar.js
import React from 'react';
import styled from 'styled-components';
import { AppBarContainer, Toolbar, IconButton } from '../../../styled-components/styled-components';


const AppBar = () => {
  return (
    <AppBarContainer>
      <Toolbar>
        <IconButton>
          {/* <img src={menuIcon} alt="Menu" /> */}
        </IconButton>
        {/* ... Other icons and logic */}
      </Toolbar>
    </AppBarContainer>
  );
};

export default AppBar;
