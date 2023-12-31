/*  TODO Add the import statement. */
import { Loan, ConventionalLoan } from "./module07_loans";

const calculateInterestRate = (interestRate: number): number => {
  const interest: number = interestRate / 1200;
  return interest;
};

/*  TODO Update the calculateInterestOnlyLoanPayment function. */
export const calculateInterestOnlyLoanPayment = (loanTerms: Loan): string => {
  const payment: number =
    loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
  return `The interest only loan payment is ${payment.toFixed(2)}`;
};
/*  TODO Update the calculateConventionalLoanPayment function. */
export const calculateConventionalLoanPayment = (
  loanTerms: ConventionalLoan
): string => {
  const interest: number = calculateInterestRate(loanTerms.interestRate);
  const payment: number =
    (loanTerms.principle * interest) /
    (1 - Math.pow(1 / (1 + interest), loanTerms.months));
  return `The conventional loan payment is ${payment.toFixed(2)}`;
};
