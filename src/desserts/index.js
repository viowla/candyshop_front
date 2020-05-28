import {Icon, Avatar, List, Col, Typography } from 'antd';
import React, {Component} from "react";
import './desserts.css'
import axios from 'axios'

const { Text } = Typography;

class Desserts extends Component {

    constructor() {
        super()
        this.state = {
            desserts: [],
            count: 0,
            title: 'hello'
        }
    }

    componentDidMount() {
        axios.get('/api/desserts/')
            .then(res => {
                console.log(res.data)
                this.setState({desserts: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const {desserts} = this.state;
        const dessertsList = desserts.map(item => (
            <Col key={item.id} offset={1} span={18}>
                <List.Item>
                   <List.Item.Meta
                        avatar={<Avatar src={item.img} shape="square" size={50}/>}
                        title={<a href="https://ant.design">{item.title}</a>}
                        ingredients={item.ingredients}
                    />
                    <Icon type="PlusOutlined" />
                </List.Item>
            </Col>
        ))
        return <div className="back">
            {dessertsList}
        </div>
    }
}

export default Desserts;