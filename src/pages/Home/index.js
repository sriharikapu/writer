import React from "react";
import styles from "./home.module.scss";

import Tutorial from "../../components/Tutorial";
import WriterPopup from "../../components/WriterPopup";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Tutorial /> */}
      <WriterPopup />
    </div>
  );
};
export default Home;
