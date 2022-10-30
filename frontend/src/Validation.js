import * as yup from 'yup'

export const loginValidation = yup.object().shape({
    email: yup.string().required('Email is required').email(),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
})