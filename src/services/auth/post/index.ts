import { usePost } from '../../../hooks/requests'

const URL = '/api/auth'

export const login = async (data:{
    email:string,
    password: string
}) => {
    const resp = await usePost({url: `${URL}/login`, body: data})
    return resp as {status: number, data: { user: any }}
}