import React, { useState } from "react";
import styles from "./writerpopup.module.scss";

const mock = {
  strikePrice: "217$",
  expiration: "22/02/1992"
};

const WriterPopup = props => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.boxwhitecontainer}>
      <div className={styles.boxtitle}>
        <div className={styles.titleleft}>Write PUT option on ETH:DAI</div>
      </div>
      <div className={styles.boxtext}>
        <div className={styles.linetext}>
          I agree to Lock{" "}
          <input
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          ></input>
        </div>
        <div className={styles.linetext}>
          commiting to sell it for {mock.strikePrice}
        </div>
        <div className={styles.linetext}>
          anytime before expiration {mock.expiration}
        </div>
      </div>
      <div className={styles.buytext}>
        <div>Buy at Uniswap</div>
        <div>Buy at Bancor</div>
        <div>Buy at Kyber</div>
      </div>
    </div>
  );
};

export default WriterPopup;
