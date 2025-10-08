import React from "react";
import { AppButton, AppInput } from "@/6_shared";
import { Form, Select } from "antd";
import type { RegisterRequestProps } from "@/5_entities/user/model/types";
import {useNavigate} from "react-router-dom";

const RegisterPage: React.FC = () => {
    const [form] = Form.useForm<RegisterRequestProps>();
    const navigate = useNavigate();


    const { request, isLoading, error } = useRequest<RegisterRequestProps, RegisterData>();

    const onFinish = async (values: RegisterRequestProps) => {
        await request(values, registerRequest, () => {
            navigate("/");
        });
    };

    return (
        <div>
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="username"
                    label="Username"
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
                    label="Password"
                    rules={[{ required: true, message: "Введите пароль!" }]}
                    hasFeedback
                >
                    <AppInput type="password" />
                </Form.Item>

                <Form.Item
                    name="password_confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        { required: true, message: "Подтвердите пароль!" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password" ) === value) {
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
                    label="Full name"
                    rules={[{ required: true, message: "Введите полное имя!" }]}
                >
                    <AppInput />
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Role"
                    rules={[{ required: true, message: "Выберите роль!" }]}
                >
                    <Select>
                        <Select.Option value="admin">Админ</Select.Option>
                        <Select.Option value="seller">Продавец</Select.Option>
                        <Select.Option value="buyer">Покупатель</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <AppButton type="primary" htmlType="submit">
                        Register
                    </AppButton>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterPage;
