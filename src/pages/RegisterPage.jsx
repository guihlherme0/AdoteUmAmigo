import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../componentsLoginRegister/Button";
import Input from "../componentsLoginRegister/Input";
import Label from "../componentsLoginRegister/Label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../componentsLoginRegister/Card";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("As senhas não coincidem!");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-200">
      <Card className="w-full max-w-md bg-white shadow-xl p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Criar Conta
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="confirm">Confirmar Senha</Label>
              <Input
                id="confirm"
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
