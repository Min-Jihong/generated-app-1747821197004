import React from 'react';
import { Input, Button, Form } from '@shadcn/ui';
import { useForm } from 'react-hook-form';
import { useAuth } from './useAuth';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { login, isLoading, error } = useAuth();

  const onSubmit = async (data) => {
    await login(data.username, data.password);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('username')} placeholder="Username" />
      <Input {...register('password')} type="password" placeholder="Password" />
      {error && <div>{error}</div>}
      <Button type="submit" disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</Button>
    </Form>
  );
};