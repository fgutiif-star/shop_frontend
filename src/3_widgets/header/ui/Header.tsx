import React from "react";
import { Layout, Menu, } from "antd";

const { Header: Hd, Content, Footer } = Layout;

export const Header = () => {
    const items = [
        { key: "1", label: "Home" },
        { key: "2", label: "List" },
        { key: "3", label: "App" },
    ];

    return (
        <div>
            {/* HeaderHomePage */}
            <Hd style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Hd>
            {/*<Layout>*/}
            {/*    <Header style={{ display: "flex", alignItems: "center" }}>*/}
            {/*        <div className="demo-logo" />*/}
            {/*        <Menu*/}
            {/*            theme="dark"*/}
            {/*            mode="horizontal"*/}
            {/*            defaultSelectedKeys={["2"]}*/}
            {/*            items={items}*/}
            {/*            style={{ flex: 1, minWidth: 0 }}*/}
            {/*        />*/}
            {/*    </Header>*/}

            {/*    <Content style={{ padding: "0 48px" }}>*/}
            {/*        <Breadcrumb*/}
            {/*            style={{ margin: "16px 0" }}*/}
            {/*            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}*/}
            {/*        />*/}
            {/*        <div*/}
            {/*            style={{*/}
            {/*                background: "#fff",*/}
            {/*                minHeight: 280,*/}
            {/*                padding: 24,*/}
            {/*                borderRadius: 8,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            Content*/}
            {/*        </div>*/}
            {/*    </Content>*/}

            {/*    <Footer style={{ textAlign: "center" }}>*/}
            {/*        Ant Design ©{new Date().getFullYear()} Created by Ant UED*/}
            {/*    </Footer>*/}
            {/*</Layout>*/}
        </div>
    );
};
