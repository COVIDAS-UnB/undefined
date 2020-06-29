import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O Email é obrigatório"),
  password: Yup.string()
    .min(6, "A senha precisa de ter 6 caracteres no mínimo")
    .required("A Senha é obrigatória"),
  mwLogin: Yup.string(),
  mwPass: Yup.string(),
  number: Yup.string().required("O seu número é obrigatorio")
});

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input name="number" type="text" placeholder="Seu número de celular" />
        <p>Se for aluno da unb insira seus dados do sigaa</p>

        <Input name="mwLogin" type="text" placeholder="Seu login do sigaa" />
        <Input name="mwPass" type="password" placeholder="Sua senha do sigaa" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
