import { Header } from '../../components'
import { RoutePaths } from '../../main';

export const Transactions = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center gap-2">
      <Header links={[{ name: 'Home', action: RoutePaths.wallet}]}>
        <h1>Balance</h1>
      </Header>
      <p>Transactions</p>
    </main>
  );
};
