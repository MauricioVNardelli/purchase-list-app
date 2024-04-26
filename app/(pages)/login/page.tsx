'use client'

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import style from '@/app/ui/pages/login.module.scss';
import { useForm, SubmitHandler } from "react-hook-form"
import { api } from '../../services/api';
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

type InputsLogin = {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter();
  const { setGlobalUser } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {    
    api.get('/users', {
      params: {
        email: data.email,
        password: data.password
      }
    }).then(async function(response){      
      
      if (response.data.length > 0) {
        setCookie(undefined, 'purchase-list-app.token', 'authorized');
        await setGlobalUser(response.data);        
        router.push('/dashboard');
      }

    })
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={style.title}>
        Lista de compra
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Não tem uma conta ainda?{' '}
        <Anchor size="sm" component="button">
          Criar conta
        </Anchor>
      </Text>
      
      <Paper className={style.paper} withBorder shadow="md" p={30} mt={30} radius="md">        
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput label="E-mail" placeholder="seu@email.com" required {...register("email")} />
          <PasswordInput label="Password" placeholder="Sua senha" required mt="md" {...register("password")}/>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Lembrar-me" />
            <Anchor component="button" size="sm">
              Esqueceu a senha?
            </Anchor>
          </Group>
          <Button type='submit' fullWidth mt="xl">
            Entrar
          </Button>        
        </form>
      </Paper>
    </Container>
  );
}