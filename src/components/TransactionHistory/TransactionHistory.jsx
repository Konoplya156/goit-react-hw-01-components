import { TransactionWrapper, Title } from './TransactionHistory.styled';
import { TransactionList } from './TransactionList/TransactionList';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionWrapper>
      <Title>TRANSACTION HISTORY</Title>
      <TransactionList transactions={transactions} />
    </TransactionWrapper>
  );
};
