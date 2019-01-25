import React, { Component } from "react";

import { Input, Button, List } from "antd";

import store from './store';

class UI extends Component {

    constructor(porps) {
        super(porps);
        console.log(store.getState());
    }

    render() {
        return (
            <div>
                <Input placeholder="123" style={{ width: 300 }} />
                <Button>按钮</Button>
                <List
                    style={{ width: 300 }}
                    bordered
                    dataSource={["1", "2", "3"]}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                ></List>
            </div>
        );
    }

}
export default UI;