'use client';
import signInForm from '@/modules/auth/signIn';
import AuthLayout from '@/modules/auth/layout';

const signInPage = () => {
  return (
    <AuthLayout>{signInForm()}</AuthLayout>
  );
};

export default signInPage;