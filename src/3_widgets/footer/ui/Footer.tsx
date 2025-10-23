import React from 'react';
import { Layout, Col, Typography, Space } from "antd";
import {
    FacebookFilled,
    InstagramFilled,
    TwitterCircleFilled,
    YoutubeFilled,
} from "@ant-design/icons";



const {Footer: Ft}= Layout
const { Title, Text, Link } = Typography;

export const Footer = () => {
    return (
        <div>
            <Ft
                style={{
                    backgroundColor: "#001529",
                    color: "#fff",
                    padding: "40px 80px",
                    marginTop: "50px",
                }}>

                <Col xs={24} sm={24} md={8} lg={6}>
                    <Title level={5} style={{ color: "#fff" }}>
                        Мы в соцсетях
                    </Title>
                    <Space size="large">
                        <FacebookFilled style={{ fontSize: 22, color: "#fff" }} />
                        <InstagramFilled style={{ fontSize: 22, color: "#fff" }} />
                        <TwitterCircleFilled style={{ fontSize: 22, color: "#fff" }} />
                        <YoutubeFilled style={{ fontSize: 22, color: "#fff" }} />
                    </Space>
                </Col>
            </Ft>
        </div>
    );
};

