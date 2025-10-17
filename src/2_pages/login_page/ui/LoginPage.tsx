import React from 'react';
import {Form} from "antd";
import {AppButton, AppInput} from "@/6_shared";
import {useRequest} from "@/6_shared/lib";
import type {LoginData, LoginRequestProps} from "@/5_entities/user";
import {loginRequest} from "@/5_entities/user";
import {AppLoader} from "@/3_widgets";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()

    const {
        response: loginResponse,
        error: loginError,
        isLoading: loginLoading,
        status: loginStatus,
        request: loginReq,
    } = useRequest<LoginRequestProps, LoginData>()

    const callbackSuccess = () => {
        navigate("/")
    }

    const onFinish = (values: LoginRequestProps) => {
        loginReq(values, loginRequest, callbackSuccess);
    };

    if (loginLoading) {
        return (<div><AppLoader /></div>)
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "40px 50px",
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Вход</h2>

                    <Form.Item<string>
                        label="Имя пользователя"
                        name="username"
                        rules={[{ required: true, message: "Введите данные!" }]}
                    >
                        <AppInput required={loginError} />
                    </Form.Item>

                    <Form.Item<string>
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: "Введите данные!" }]}
                    >
                        <AppInput type="password" required={loginError} />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center", marginTop: "24px" }}>
                        <AppButton type="primary" htmlType="submit">
                            Войти
                        </AppButton>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};

export default LoginPage;