import React from "react";
import styles from "./optiontable.module.scss";
import { Link } from 'react-router-dom'

const options = [
  {
    type: "PUT",
    underliyngAsset: "ETH",
    strikePrice: "$218",
    maturity: "22/02/2020"
  },
  {
    type: "CALL",
    underliyngAsset: "ETH",
    strikePrice: "$218",
    maturity: "22/02/2020"
  }
];

const OptionTable = () => {
  return (
    <div className={styles.tablecontainer}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>UnderlyingAsset</th>
            <th>Strike Price</th>
            <th>Maturity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr key={index}>
              <td>{option.type}</td>
              <td>{option.underlyingAsset}</td>
              <td>{option.strikePrice}</td>
              <td>{option.maturity}</td>
              <td>
                <Link to={option.type === 'put' ? '/buyput' : 'buycall'}><button>Write!</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionTable;
