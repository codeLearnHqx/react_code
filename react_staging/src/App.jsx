import React, { Component } from "react";
import {
  Button,
  Space,
  DatePicker,
  Checkbox,
  ConfigProvider,
  Radio,
} from "antd";
import { WechatOutlined } from "@ant-design/icons";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default class App extends Component {
  render() {
    return (
      <div>
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                colorPrimary: "pink",
              },
              Checkbox: {
                colorPrimary: "red"
              },
            },
          }}
        >
          <Radio>Radio</Radio>
          <Checkbox>Checkbox</Checkbox>
        </ConfigProvider>
        <Space wrap>
          <Button icon={<WechatOutlined />} type="primary">
            Primary Button
          </Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <Button type="ghost">ghost</Button>
          <WechatOutlined spin style={{ fontSize: "50px" }} />
          <DatePicker onChange={onChange} />
        </Space>
      </div>
    );
  }
}
