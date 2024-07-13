import { Header } from "../../components";
import { RoutePaths } from "../../main";

export const Wallet = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center gap-2">
      <Header
        links={[
          { name: "Create wallet", action: () => console.log("create") },
          { name: "Transactions", action: RoutePaths.transactions },
        ]}
      >
        <h1>Balance</h1>
      </Header>
      <p>WALLET</p>
    </main>
  );
};
