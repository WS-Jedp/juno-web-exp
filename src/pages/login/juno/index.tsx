import React from 'react'
import { useForm } from 'react-hook-form'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { login } from '../../../services/auth/post'

export const getStaticProps:GetStaticProps<{}> = () => {
    return {
        props: {}
    }    
}

interface LoginForm {
    email: string,
    password: string
}

const Login:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {

    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

    const onLogin = async (data:LoginForm) => {
        const resp = await login({ email: data.email, password: data.password })
        if(resp.data.user) {
            router.push('/dashboard')
        }
    }

    return (
        <section className="bg-primary flex flex-col align-center justify-center login">
            <form className="bg-secondary flex flex-col justify-center form login__form" onSubmit={handleSubmit(onLogin)}>
                <div className="form-input">
                    <label className="form-input__label text-center">
                        Email
                    </label>
                    <input 
                        {...register('email', { required: true, maxLength: 42, minLength: 0 })}
                        type="text" 
                        placeholder="Email" 
                    />
                </div>
                <div className="form-input">
                    <label className="form-input__label">
                        Password
                    </label>
                    <input 
                        {...register('password', { required: true, maxLength: 42, minLength: 0 })}
                        type="password" 
                        placeholder="Password" 
                    />
                </div>
                <button type="submit" className="form-input__button">Login</button>
            </form>
        </section>
    )
}

export default Login
