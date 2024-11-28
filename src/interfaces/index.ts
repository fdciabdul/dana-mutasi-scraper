export interface TransactionDetails {
    data: {
      code: string;
      message: string;
      data: {
        transactionId: string;
        amount: string;
        status: string;
        statusDescription: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  }
  

export interface DANA_API {
    BASE_API : string
  }