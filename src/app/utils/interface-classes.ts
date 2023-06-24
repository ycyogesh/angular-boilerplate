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

export interface IUsersData {
    message: string;
    data: IUsersResult[];
    success: boolean;
}

export interface IUsersResult {
    id: number;
    name: string;
    email: string;
    isActive: boolean | string;
    isVerified: boolean | string;
}
