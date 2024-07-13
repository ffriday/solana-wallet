import { useEffect } from 'react';
import { Header, InfoBox, useKey } from "../../components";
import { useCreateAccount, useGetBanalce } from "../../hooks";
import { RoutePaths } from "../../main";

export const Wallet = () => {
  const { key, setKey, balance, setBalance } = useKey();
  const { balance: newBalance } = useGetBanalce(key);
  const { createAccount, loading, error, account } = useCreateAccount();

  useEffect(() => {
    if (newBalance) setBalance(newBalance);
  }, [newBalance, setBalance])

  const create = async () => {
    createAccount();
    setKey(account ?? "");
    if (account) {
      window.localStorage.setItem("key", account);
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center gap-2">
      <Header
        links={[
          {
            name: loading ? "Please wait..." : "Create wallet",
            action: create,
            isDisabled: loading,
          },
          { name: "Transactions", action: RoutePaths.transactions },
        ]}
      >
      <p>{balance || ''} SOL</p>
      </Header>
      <section className="w-screen flex flex-col items-center gap-4">
        <InfoBox
          title="WALLET"
          text={key ?? "Not created"}
          className="w-10/12 flex flex-col items-start gap-2  bg-slate-50 p-4 rounded"
        />
        {error && (
          <InfoBox
            title="ERRORS"
            text={error}
            className="w-10/12 flex flex-col items-start gap-2  bg-red-50 p-4 rounded"
          />
        )}
      </section>
    </main>
  );
};
