export interface PartnerDetail {
    Users: PartnerModel;
}


export interface PartnerModel {
    FirstName: string;
    Middle: string;
    LastName: string;
    MobileNumber: string;
    Gender: string;
    ReferalReferCode: string;
    EmailId: string;
    UserName: string;
    UserPwd: string;
    ConfirmPassword: string;
    StateCode: number;
    City: string;
    IsTermsAccepted: boolean;
    RequestId: string;
    RegisteredOTP: string;
}
