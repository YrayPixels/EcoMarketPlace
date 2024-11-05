import { request } from "../request"



export const signUpUser = async (
    last_name: string,
    state: string,
    country: string,
    first_name: string,
    wallet_address: string,
    email: string
) => {
    let bodyContent = new FormData();

    bodyContent.append("last_name", last_name);
    bodyContent.append("state", state);
    bodyContent.append("country", country);
    bodyContent.append("first_name", first_name);
    bodyContent.append("wallet_address", wallet_address);
    bodyContent.append("email", email);


    let response = await request.post({ url: '/create-user', data: bodyContent })
    return response;
}


export const login = async (

    wallet_address: string,
    email: string
) => {
    let bodyContent = new FormData();
    bodyContent.append("wallet_address", wallet_address);
    bodyContent.append("email", email);


    let response = await request.post({ url: '/login', data: bodyContent })
    return response;
}

export const checkUserExists = async (id: string) => {
    let response = await request.get(`/check-user-available/${id}`);
    return response;
}

