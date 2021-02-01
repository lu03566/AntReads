import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { HomeOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function App() {
  const { Header, Content, Footer } = Layout;
  const { SubMenu } = Menu;
  
  const [current, setCurrent] = useState('home');

  const menuItemStyle = {
    lineHeight: '64px',
    fontFamily: 'Barlow',
    letterSpacing: 1.25,
    fontSize: '18px',
    textTransform: 'uppercase',
    fontWeight: 600,
  }
    
  const rightStyle = { position: 'absolute', top: 0, right: 0 };
  return (
    <Router>
        <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />} style={menuItemStyle}>
              Home <Link to="/" />
            </Menu.Item>
            <Menu.Item key="explore"  icon={<SearchOutlined />} style={menuItemStyle}>
              Explore <Link to="/ranking" />
            </Menu.Item>
          </Menu>
      <Switch>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Ranking() {
  return <h2>Ranking</h2>;
}

function Home() {
  const contentStyle = {
    height: '20vh',
    lineHeight: '25vh',
    textAlign: 'center',
  };
  
  const mainStyle2 = {
    background: '#BAD6B6',
    minHeight: '100vh'
  }
  const mainStyle3 = {
    background: '#DAFD6D',
    paddingRight: '10vw',
    paddingLeft: '10vw',
    minHeight: '100vh'
  }
  const mainStyle4 = {
    background: '#FD8532',
    minHeight: '100vh'
  }
  return (
    <div className="main">
      <Title level={2}>编辑推荐</Title>
      <Carousel autoplay autoplaySpeed={5000}>
        <div style={contentStyle}>
          <img alt="ads" src="/images/banner-1.jpg" height="100%"/>
        </div>
        <div style={contentStyle}>
          <img alt="ads" src="/images/banner-2.jpg" height="100%"/>
        </div>
        <div style={contentStyle}>
          <img alt="ads" src="/images/banner-3.jpg" height="100%"/>
        </div>
        <div style={contentStyle}>
          <img alt="ads" src="/images/banner-4.jpg" height="100%"/>
        </div>
      </Carousel>      
      <div style={mainStyle2}/>
      <div style={mainStyle4}/>
      <div style={mainStyle3}/>
    </div>
    
  );
}