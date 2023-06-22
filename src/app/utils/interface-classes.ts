export interface ILoginData {
    message: string;
    data: ILoginResult;
    success: boolean;
}

export interface ILoginResult{
    name: string;
    token: string;
    sessionid: string;
}