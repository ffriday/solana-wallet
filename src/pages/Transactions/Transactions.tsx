import { useEffect } from 'react';
import { Header, useKey } from '../../components'
import { useGetBanalce } from '../../hooks';
import { RoutePaths } from '../../main';

export const Transactions = () => {
  const { key } = useKey();
  const { balance, setBalance } = useKey();
  const { balance: newBalance } = useGetBanalce(key);

  useEffect(() => {
    if (newBalance) setBalance(newBalance);
  }, [newBalance, setBalance])

  return (
    <main className="w-screen h-screen flex flex-col items-center gap-2">
      <Header links={[{ name: 'Home', action: RoutePaths.wallet}]}>
      <p>{balance || ''} SOL</p>
      </Header>
      <p>Transactions</p>
    </main>
  );
};
