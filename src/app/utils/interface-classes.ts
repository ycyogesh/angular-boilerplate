export interface ILoginData {
    message: string;
    data: ILoginResult;
    sucess: boolean;
}

export interface ILoginResult{
    name: string;
    token: string;
    sessionid: string;
}