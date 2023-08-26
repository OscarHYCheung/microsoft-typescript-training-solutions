/*  TODO Create LoanPrograms namespace. */
namespace LoanPrograms {
  /*  TODO Update the calculateInterestOnlyLoanPayment function. */
  export const calculateInterestOnlyLoanPayment = (
    loanTerms: Loans.Loan
  ): string => {
    const payment: number =
      loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return "The interest only loan payment is " + payment.toFixed(2);
  };
  /*  TODO Update the calculateConventionalLoanPayment function. */
  export const calculateConventionalLoanPayment = (
    loanTerms: Loans.ConventionalLoan
  ): string => {
    const interest: number = calculateInterestRate(loanTerms.interestRate);
    const payment: number =
      (loanTerms.principle * interest) /
      (1 - Math.pow(1 / (1 + interest), loanTerms.numberOfMonths));
    return "The conventional loan payment is " + payment.toFixed(2);
  };
  const calculateInterestRate = (interestRate: number): number => {
    const interest: number = interestRate / 1200;
    return interest;
  };
}
