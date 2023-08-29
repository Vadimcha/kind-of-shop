'use client';
import styles from '../layout.module.scss';
import Link from 'next/link';
import { useFormik } from 'formik';

const SignIn = () => {
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
      <p className={styles.form_title}>Create Account</p>
      <form className={styles.form_formBlock}>
        <div className={styles.inputBlock}>
          <label
            htmlFor='name'
            className={`${styles.label} ${formik.values.name !== '' ? styles.label__active : ''}`}
          >Name</label>
          <input
            type='text'
            className={`${styles.field} ${formik.values.name !== '' ? styles.field__active : ''}`}
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder='Name'
          />
        </div>
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

        <button type='submit' className={styles.form_button}>Create account</button>
      </form>
      <p className={styles.form_help}>
        Already have an account?
        <Link href={`${process.env.NEXT_PUBLIC_URL}/logIn`} className={styles.form_help_link}>
          <span style={{ textDecoration: 'underline' }}>Log in</span>
        </Link>
      </p>
    </>
  );
};

export default SignIn;