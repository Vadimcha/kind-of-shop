'use client';
import logInForm from '@/modules/auth/logIn';
import AuthLayout from '@/modules/auth/layout';

const logInPage = () => {
  return (
    <AuthLayout>{logInForm()}</AuthLayout>
  );
};

export default logInPage;