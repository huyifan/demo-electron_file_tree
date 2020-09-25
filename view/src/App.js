import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Layout } from 'antd';
import Tree from "./component/base/Tree";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (

      <Layout style={{height:'100%'}}>
          <Header>Header</Header>
          <Layout className={'content_layout'}>
              <Sider className={'sider'}>
                    <Tree/>
              </Sider>
              <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
      </Layout>


  );
}

export default App;
