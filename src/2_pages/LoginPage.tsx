import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {api} from "@/6_shared";

export default function LoginPage() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  const functionTest = async () => {
    try {
        const response = await api.post("/user/sign_in/", formData);
        alert("Добро пожаловать!");
        console.log(response.data);
    } catch (error) {
        alert("Ошибка при входе");
        console.error(error);
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <InputField label="Имя пользователя" name="username" value={formData.username} onChange={handleChange} />
        <InputField label="Пароль" type="password" name="password" value={formData.password} onChange={handleChange} />
        <Button type="submit" text="Войти" />
      </form>
    </div>
  );
}
