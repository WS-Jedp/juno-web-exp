interface GetRequest {
    url: string,
    body?: {[key:string]: any}
}

interface PostRequest {
    url: string,
    body: {[key:string]: any},
}

export const useGet = async (data:GetRequest) => {
    const resp = await fetch(data.url, {
        method: 'get',
        body: data.body ? JSON.stringify(data.body) : null

    })
    const json = resp.json()
    return json
}

export const usePost = async (data:PostRequest) => {
    const resp = await fetch(data.url, {
        method: 'post',
        body: JSON.stringify(data.body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = resp.json()
    return json
}