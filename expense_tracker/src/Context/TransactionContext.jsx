import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionsContext, setTransactionsContext] = useState([]);

  return (
    <TransactionContext.Provider value={{ transactionsContext, setTransactionsContext }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);

export default TransactionContext;
