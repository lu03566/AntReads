import React, { useState,useRef } from 'react';
import './App.css';
import { Layout, Menu, Card, Avatar, Space, Button } from 'antd';
import { HomeOutlined, SearchOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;

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
    paddingBottom: '25px',
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

  const slider = useRef(null);

  return (
    <div className="main">
      <Title level={2}>编辑推荐</Title>

      <div style={{marginBottom: '5px', marginRight:'5px'}}>
        <Button size={'large'} type="text" onClick={() => slider.current.next()}><LeftOutlined/></Button>
        <Button size={'large'} type="text" onClick={() => slider.current.prev()}><RightOutlined/></Button>
      </div>
     
          <Carousel autoplay autoplaySpeed={5000} dots={false} ref={slider}>
                <div>
                  <Row style={{height:'100%'}}>
                    <Col span={24} lg={{span: 12}}>
                      <img style={{width:'100%'}} alt="ads" src="/images/banner-1.jpg"/>
                    </Col>
                    <Col span={24} lg={{span: 12}}>
                    <Card>
                      <Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                      />
                    </Card>
                    </Col>
                  </Row>
                </div>

                <div>
                  <Row style={{height:'100%'}}>
                    <Col span={24} lg={{span: 12}}>
                      <img style={{width:'100%'}} alt="ads" src="/images/banner-2.jpg"/>
                    </Col>
                   <Col span={24} lg={{span: 12}}>
                    <Card>
                        <Meta
                          avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                   </Col>
                  </Row>      
                </div>
                <div>
                  <Row style={{height:'100%'}}>
                    <Col span={24} lg={{span: 12}}>
                      <img style={{width:'100%'}} alt="ads" src="/images/banner-3.jpg"/>
                    </Col>
                    <Col span={24} lg={{span: 12}}>
                      <Card>
                        <Meta
                          avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                  </Row>         
                </div>

                <div>
                  <Row style={{height:'100%'}}>
                      <Col span={24} lg={{span: 12}}>
                        <img style={{width:'100%'}} alt="ads" src="/images/banner-4.jpg"/>
                      </Col>
                    <Col span={24} lg={{span: 12}}>
                      <Card>
                        <Meta
                          avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                    </Row>
                </div>
              
          </Carousel> 
             
      <div style={mainStyle2}/>
      <div style={mainStyle4}/>
      <div style={mainStyle3}/>
    </div>
    
  );
}