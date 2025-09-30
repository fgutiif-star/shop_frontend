import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import InputField from "../components/InputFiled";
import Button from "../components/Button";

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

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        {/* <InputField label="Имя пользователя" name="username" value={formData.username} onChange={handleChange} /> */}
        <InputField label="Пароль" type="password" name="password" value={formData.password} onChange={handleChange} />
        <Button type="submit" text="Войти" />
      </form>
    </div>
  );
}
