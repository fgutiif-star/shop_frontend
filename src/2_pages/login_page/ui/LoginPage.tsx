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
        <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<string>
                label="Имя пользователя"
                name="username"
                rules={[{ required: true, message: 'Введите данные!' }]}
            >
                <AppInput required={loginError} />
            </Form.Item>

            <Form.Item<string>
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите данные!' }]}
            >
                <AppInput type={"password"} required={loginError} />
            </Form.Item>

            <Form.Item label={null}>
                <AppButton type="primary" htmlType="submit">Войти</AppButton>
            </Form.Item>
        </Form>
        </div>
    );
};

export default LoginPage;