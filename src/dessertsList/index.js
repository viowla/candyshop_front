import React, {Component} from 'react'
import {Col, Card} from 'antd';
import './desserts.css';
import axios from 'axios'

const {Meta} = Card;

class DessertsList extends Component {
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
        const dessertList = desserts.map(item => (
            <Col key={item.id} span={6}>
                <Card className="separateMusic" hoverable style={{width: 250}}
                      cover={<img alt="example" src={item.img}/>}>
                    <Meta title={item.name} description={item.description}/>
                </Card>
            </Col>
        ))
        return (
            <div>
                {dessertList}
            </div>
        )
    }
}


export default DessertsList