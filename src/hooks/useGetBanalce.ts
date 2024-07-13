import { Cluster, clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';

export const useGetBanalce = (key: string, net: Cluster = "devnet") => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        if (key) {
          const connection = new Connection(clusterApiUrl(net));
          const address = new PublicKey(key);
          const b = await connection.getBalance(address);
          setBalance(b / LAMPORTS_PER_SOL);
        } else {
          setBalance(0);
        }
      } catch (error) {
        setBalance(0);
      }
    })();
  }, [key, net]);

  return { balance };
}