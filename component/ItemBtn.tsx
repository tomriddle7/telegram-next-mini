"use client";

import { SendTransactionRequest, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import styles from "@/app/page.module.css";

const defaultTx: SendTransactionRequest = {
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      address: 'EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M',
      amount: '5000000',
      stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
      payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
    },
  ],
};

const ItemBtn = ({ image, title, desc }: { image: string, title: string, desc: string }) => {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  return (
    <>
      {wallet ? (
        <button
          className={styles.card}
          onClick={() => tonConnectUi.sendTransaction(defaultTx)}
        >
          <div className={styles.title}>
            <img src={image} />
            <h2>
              {title} <span>-&gt;</span>
            </h2>
          </div>
          <p>{desc}</p>
        </button>
      ) : (
        <button
          className={styles.card}
          onClick={() => tonConnectUi.openModal()}
        >
          <div className={styles.title}>
            <img src={image} />
            <h2>
              {title} <span>-&gt;</span>
            </h2>
          </div>
          <p>{desc}</p>
        </button>
      )}
    </>
  );
}

export default ItemBtn;