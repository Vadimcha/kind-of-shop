'use client';
import Head from 'next/head';
import styles from '@/modules/auth/layout.module.scss';
import Link from 'next/link';
import { useFormik } from 'formik';

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>Kind of shop | Log In</title>
      </Head>
      <p className={styles.form_title}>Login</p>
      <form className={styles.form_formBlock}>
        <div className={styles.inputBlock}>
          <label
            htmlFor='email'
            className={`${styles.label} ${formik.values.email !== '' ? styles.label__active : ''}`}
          >Email</label>
          <input
            type='text'
            className={`${styles.field} ${formik.values.email !== '' ? styles.field__active : ''}`}
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Email'
          />
        </div>
        <div className={styles.inputBlock}>
          <label
            htmlFor='password'
            className={`${styles.label} ${formik.values.password !== '' ? styles.label__active : ''}`}
          >Password</label>
          <input
            type='password'
            className={`${styles.field} ${formik.values.password !== '' ? styles.field__active : ''}`}
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder='Password'
          />
        </div>

        <button type='submit' className={styles.form_button}>Login</button>
      </form>
      <p className={styles.form_help}>
        Not a member?{' '}
        <Link href={`${process.env.NEXT_PUBLIC_URL}/signIn`} className={styles.form_help_link}>
          <span style={{ textDecoration: 'underline' }}>Create Account</span>
        </Link>
      </p>
    </>
  );
};

export default LogIn;