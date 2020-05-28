import React from 'react';
import {Row, Col} from 'antd';
import {Link} from "react-router-dom";
import { Menu } from 'antd';
import logo from '../../logo.png';
import { Input } from 'antd';
import { Button } from 'antd';
import './header.css'


const a = {name: "asd", age: 24 };
const {age} = a;
function Header() {
    return <header className="header">
        <Row className="headerMenu">
            <Col span={6}>
                <img className="logo" src={logo} alt=""/>
            </Col>
            <Col span={6} className="searchInput">
                <Input placeholder="Search" />
                <Button shape="circle" icon="search" className="searchButton"/>
            </Col>
            <Col span={10}>
                <Menu mode="horizontal">
                    <Menu.Item key={1}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link to="/desserts">Charts</Link>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link to="/basket">My favorites</Link>
                    </Menu.Item>
                    <Menu.Item key={4}>
                       <Link to="/profile">Profile</Link>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col span={2} className="searchInput">
                <Button>
                    <Link to="/login">Login</Link>
                </Button>
            </Col>
        </Row>

    </header>
}

export default Header;