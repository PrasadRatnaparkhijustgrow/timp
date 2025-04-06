import { BaseModel } from "./BaseModel";

export class BankDetails extends BaseModel {
    accountHolder?: string;
    bankName?: string;
    branchName?: string;
    ifscCode?: string;
    accountNumber?: string;
  }