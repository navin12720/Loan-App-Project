export class Application {
  applicantID: number;
  fullName: string;
  applicationStatus: string;
  panCard: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  assets: string;
  dateApplied: Date;
  Loans: Loan[];
  constructor() {
    this.Loans = [];
    this.address = '';
    this.city = '';
    this.applicantID = 0;
    this.fullName = '';
    this.applicationStatus = 'New';
    this.panCard = '';
    this.dateOfBirth = new Date();
    this.state = '';
    this.email = '';
    this.phone = '';
    this.zipCode = '';
    this.dateApplied = new Date();
    this.assets = '';
    this.employmentStatus = '';
    this.creditScore = 0;
    this.annualIncome = 0;
  }
}

export class Loan {
  loanID: number;
  applicantID: number;
  bankName: string;
  loanAmount: number;
  emi: number;
  constructor() {
    this.loanID = 0;
    this.applicantID = 0;
    this.bankName = '';
    this.loanAmount = 0;
    this.emi = 0;
  }
}

export interface ApiResponseModel {
  message: string;
  result: boolean;
  data: any;
}
