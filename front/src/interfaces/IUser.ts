import { Role } from "../enums/role.enum";
import { statusUser } from "../enums/statusUser.enum";

export interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    payrollNumber?: string;
    security_question?: string;
    security_answer?: string;
    hasTeam: boolean;
    status: statusUser;
    role: Role;
    teamId?: number;
  }