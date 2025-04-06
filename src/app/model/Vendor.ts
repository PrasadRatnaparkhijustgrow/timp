import { BankDetails } from "./BankDetails";
import { BaseModel } from "./BaseModel";

export class Vendor extends BaseModel {
    name?: string;
    companyName?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    gstNumber?: string;
    panNumber?: string;
    aadhaarNumber?: string;
  
    bankDetails?: BankDetails; // Assuming a vendor has bank details
  }