import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "../componentsLoginRegister/Button";
import Input from "../componentsLoginRegister/Input";
import Label from "../componentsLoginRegister/Label";
import Checkbox from "../componentsLoginRegister/Checkbox";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../componentsLoginRegister/Card";

import { PawPrint, Heart } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Nenhum usuário cadastrado!");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      if (rememberMe) {
        localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      } else {
        sessionStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      }

      alert("Login realizado com sucesso!");
      navigate("/");
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="min-h-screen flex bg-purple-200">

      {/* ESQUERDA */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1616620649761-48f5ca3e17f8"
          alt="Animais felizes"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8" />
              <span className="text-3xl">adoteUmAmigo</span>
            </div>
            <p className="text-xl opacity-90">
              Transforme uma vida. Adote um amigo.
            </p>
          </div>
        </div>
      </div>

      {/* FORMULÁRIO */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="w-full max-w-md">

          <Card className="border-2 shadow-xl bg-white">

            <CardHeader className="space-y-1">
              <CardTitle className="text-center flex items-center justify-center gap-2">
                Bem-vindo de volta!
              </CardTitle>

              <CardDescription className="text-center">
                Entre para encontrar seu novo melhor amigo
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <Label>Lembrar de mim</Label>
                  </div>

                  <a className="text-sm text-purple-600 hover:underline" href="#">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button type="submit" className="w-full bg-purple-600 text-white">
                  Entrar
                </Button>
              </form>
            </CardContent>

            <CardFooter className="text-center text-sm text-gray-600 mt-2">
              Não tem conta?{" "}
              <Link to="/register" className="text-purple-600 hover:underline">
                Cadastre-se gratuitamente
              </Link>
            </CardFooter>

          </Card>
        </div>
      </div>

    </div>
  );
}
