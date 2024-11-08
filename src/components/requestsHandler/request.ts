// import { from "../utils";

export type GlobalRecord = Record<string, any> | any;

export interface RequestResponseInt {
    data: GlobalRecord;
    success: boolean;
    message: string;
}

export interface RequestInt {
    post: (data: {
        url: string;
        data?: FormData;
    }) => Promise<RequestResponseInt>;

    get: (
        url: string,
    ) => Promise<RequestResponseInt>;
}

export const Host_Url = "https://nurses.yraytestings.com.ng/";
export const API_BASE = "https://nurses.yraytestings.com.ng/api"
export const request: RequestInt = {
    get: async (url) => {
        try {
            const response = await fetch(API_BASE + url, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                },
            });

            let data = await response.json();
            return { data, success: true, message: response.statusText };
        } catch (err) {
            console.error(err);
            throw handleError(err);
        }
    },

    post: async ({ url, data }) => {
        try {
            const response = await fetch(API_BASE + url, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                },
                body: data,
            });
            const responseData = await response.json();
            return {
                data: responseData,
                success: response.ok,
                message: response.statusText,
            };
        } catch (err) {
            throw handleError(err);
        }
    },
};

export const handleError = (err: any): ErrorResponseInt => {
    const errorPayload: ErrorResponseInt = {
        message: "Something went wrong",
        statusCode: 500,
        errorCode: 0,
    };
    if (err?.name === "TypeError") {
        errorPayload.message = err.message || "Something went wrong with your request";
    }
    return errorPayload;
};

export interface ErrorResponseInt {
    message: string;
    statusCode: number;
    errorCode: number;
}


export function isValidUrl(url: string) {
    // Regex to check if URL follows typical format (protocol and domain required)
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i;

    // Extensions we want to exclude
    const invalidExtensions = ['.pdf', '.doc', '.docx', '.xlsx', '.ppt', '.pptx', '.zip'];

    // First, check if URL matches the regex pattern
    if (!urlPattern.test(url)) return false;

    // Ensure it does not end with an unwanted file extension
    return !invalidExtensions.some(ext => url.toLowerCase().endsWith(ext));
}
