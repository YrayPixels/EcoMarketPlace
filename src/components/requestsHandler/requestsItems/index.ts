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


export const createTrade = async (
    itemName: string,
    itemQuantity: string,
    itemPrice: string,
    registry_account: File,
    transfer_Documents: File,
    purchase_Agreement: File,
    proof_of_payment: File,
    invoice: File,
    proof_Of_Payment: File,
    retirement_Certificate: File,
    business_Registration: File,
    personal_ID: File,
    userId: string,
) => {
    let bodyContent = new FormData();

    bodyContent.append("registry_account_id", registry_account);
    bodyContent.append("transfer_Documents", transfer_Documents);
    bodyContent.append("purchase_Agreement", purchase_Agreement);
    bodyContent.append("proof_of_payment", proof_of_payment);
    bodyContent.append("invoice", invoice);
    bodyContent.append("proof_Of_Payment", proof_Of_Payment);
    bodyContent.append("retirement_Certificate", retirement_Certificate);
    bodyContent.append("business_Registration", business_Registration);
    bodyContent.append("personal_ID", personal_ID);
    bodyContent.append("user_id", userId);
    bodyContent.append('item_name', itemName);
    bodyContent.append('item_quantity', itemQuantity)
    bodyContent.append('item_price', itemPrice)

    let response = await request.post({ url: '/create-trade', data: bodyContent });
    return response;
};




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

export const getTrades = async () => {
    let response = await request.get('/get-trades');
    return response;
}

export const checkUserExists = async (id: string) => {
    let response = await request.get(`/check-user-available/${id}`);
    return response;
}

