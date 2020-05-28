import {Card, Icon, Avatar, Col, Row} from 'antd';
import React from "react";
import './basket.css';

const {Meta} = Card;

const choosenDesserts = [
    {

        title: "Honey cake",
        price: 6000,
        ingredients: "flout, honey, sugar, butter",
    },
    {

        title: "Napoleone",
        price: 8000,
        ingredients: "flout, sugar, butter, cream",
    },
    {

        title: "Chocolate cake",
        price: 2500,
        ingredients: "flout, chocolate, sugar, butter",
    },
]

function Basket() {


    return <Row>

        {choosenDesserts.map(item => {
                return <Col span={6}>
                    <Card className="basket"
                          style={{width: 300}}

                          actions={[
                              <Icon type="caret-right"/>,
                              <Icon type="delete"/>,
                              <Icon type="ellipsis" key="ellipsis"/>,
                          ]}
                    >
                        <Meta
                            title={item.title}
                            price={item.price}
                            description={item.ingredients}
                        />
                    </Card>
                </Col>
            }
        )}

    </Row>
}

export default Basket;