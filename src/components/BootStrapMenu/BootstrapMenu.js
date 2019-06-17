import React from 'react';

import './BootstrapMenu.css';

import { Layout, Header, Drawer, Content} from 'react-mdl';

import MenuItem from '../MenuItem/MenuItem';
import HeaderCustom from '../HeaderCustom/HeaderCustom';

export default class BootStrapMenu extends React.Component {

  render() {

    return (
      <div style={{height: '100vh', position: 'relative', fontFamily:  "Amatic SC"}}>
      <Layout className="LayoutImage" >
          <Header transparent title="My portfolio site" >
            <MenuItem  />
          </Header>
          <Drawer title="" >
            <MenuItem  />
          </Drawer>
          <Content >
            <HeaderCustom headerTitle="Arnautov Daniil"/>
          </Content>
          
      </Layout>
  </div>
    );
  }
}