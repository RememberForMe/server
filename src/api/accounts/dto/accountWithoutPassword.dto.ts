export class AccountWithoutPasswordDTO {
    id: string;
    username: string;
    email?: string;
    isActived: boolean;
    roleId: string;
}