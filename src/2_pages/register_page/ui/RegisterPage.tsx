import React from 'react';
import {Form, Select} from "antd";
import {AppButton, AppInput} from "@/6_shared";
import type {RegisterData, RegisterRequestProps} from "@/5_entities/user";
import {useNavigate} from "react-router-dom";
import {useRequest} from "@/6_shared/lib";
import {UserRole} from "@/6_shared";
import {registerRequest} from "@/5_entities/user";

const RegisterPage = () => {
    const [form] = Form.useForm<RegisterRequestProps>();
    const navigate = useNavigate();


    const {
        request,
        isLoading,
        error,
        response,
        status,
    } = useRequest<RegisterRequestProps, RegisterData>();

    const onFinish = async (values: RegisterRequestProps) => {
        await request(values, registerRequest, () => navigate("/login/"));
    };

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
                    maxWidth: "500px",
                }}
            >
                <Form
                    form={form}
                    name="register"
                    layout="vertical" // ✅ ключевой момент — label сверху
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <h2 style={{ textAlign: "center", marginBottom: 30 }}>Регистрация</h2>

                    <Form.Item
                        name="username"
                        label="Имя пользователя"
                        rules={[{ required: true, message: "Введите имя пользователя!" }]}
                    >
                        <AppInput />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            { type: "email", message: "Введите корректный E-mail!" },
                            { required: true, message: "E-mail обязателен!" },
                        ]}
                    >
                        <AppInput />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Пароль"
                        rules={[{ required: true, message: "Введите пароль!" }]}
                        hasFeedback
                    >
                        <AppInput type="password" />
                    </Form.Item>

                    <Form.Item
                        name="password_confirm"
                        label="Confirm Password"
                        dependencies={['password'] as any}
                        hasFeedback
                        rules={[
                            { required: true, message: "Подтвердите пароль!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    console.log('value', value)
                                    if (!value || getFieldValue("password" as any) === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("Пароли не совпадают!")
                                    );
                                },
                            }),
                        ]}
                    >
                        <AppInput type="password" />
                    </Form.Item>

                    <Form.Item
                        name="full_name"
                        label="Полное имя"
                        rules={[{ required: true, message: "Введите полное имя!" }]}
                    >
                        <AppInput />
                    </Form.Item>

                    <Form.Item
                        name="role"
                        label="Роль"
                        rules={[{ required: true, message: "Выберите роль!" }]}
                    >
                        <Select style={{ height: 40 }}>
                            <Select.Option value={UserRole.admin}>Админ</Select.Option>
                            <Select.Option value={UserRole.seller}>Продавец</Select.Option>
                            <Select.Option value={UserRole.buyer}>Покупатель</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center", marginTop: 20 }}>
                        <AppButton type="primary" htmlType="submit">
                            Зарегистрироваться
                        </AppButton>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default RegisterPage;