import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputFiled";
import Button from "../components/Button";

type FormData = {
  userName: string;
  email: string;
  full_name: string;
  password: string;
  password_confirm: string;
  role : "admin" | "seller" | "buyer"
};

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    full_name: "",
    password: "",
    password_confirm: "",
    role: 'admin',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirm) {
      alert("Пароли не совпадают!");
      return;
    }

    try {
      const response = await axios.post("/api/register", formData);
      alert("Регистрация успешна!");
      console.log(response.data);
    } catch (error) {
      alert("Ошибка при регистрации");
      console.error(error);
    }
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
          width: "400px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Регистрация
        </h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Имя пользователя"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Полное имя"
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
          <InputField
            label="Пароль"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <InputField
            label="Подтвердите пароль"
            type="password"
            name="password_confirm"
            value={formData.password_confirm}
            onChange={handleChange}
            required
          />
          <div style={{
            marginBottom: "15px",
            alignItems: "center",
            textAlign:"center"
          }}>
            <label htmlFor="">Роль:</label>
            <select name="role" value={formData.role} onChange={handleChange} style={{
              padding:"5px",
              margin:"5px",
              backgroundColor:"#87CEEB"

            }}>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>

            </select>
          </div>

        
          <Button type="submit" text="Зарегистрироваться" />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
