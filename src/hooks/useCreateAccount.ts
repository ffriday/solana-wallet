import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';
import { useState } from 'react';

export const useCreateAccount = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const createAccount = async () => {
    setLoading(true);
    setError(null);

    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const fromPubkey = Keypair.generate();
  
      const airdropSignature = await connection.requestAirdrop(
        fromPubkey.publicKey,
        0.1 *LAMPORTS_PER_SOL,
      );
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
  
      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature: airdropSignature,
      });
  
      const space = 0;
      const rentExemptionAmount = await connection.getMinimumBalanceForRentExemption(space);
      const newAccountPubkey = Keypair.generate();
  
      const createAccountParams = {
        fromPubkey: fromPubkey.publicKey,
        newAccountPubkey: newAccountPubkey.publicKey,
        lamports: rentExemptionAmount,
        space,
        programId: SystemProgram.programId,
      };
  
      const createAccountTransaction = new Transaction().add(
        SystemProgram.createAccount(createAccountParams),
      );
  
      await sendAndConfirmTransaction(connection, createAccountTransaction, [
        fromPubkey,
        newAccountPubkey,
      ]);
      setAccount(newAccountPubkey.publicKey.toString());
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error');
      }
    } finally {
      setLoading(false)
    }
  }

  return { createAccount, loading, error, account }
}