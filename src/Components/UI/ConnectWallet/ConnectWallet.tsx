import { useState } from "react";
import "./ConnectWallet.scss";

const ConnectWallet = () => {
  const walletList = [
    {
      id: 1,
      name: "Metamask",
      icon: "",
    },
    {
      id: 2,
      name: "Wallet Connect",
    },
  ];

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="connect-wallet">
      <button
        type="button"
        className="connect-wallet__btn"
        onClick={handleClick}
      >
        Connect Wallet
      </button>
      <div className={`wallet-list ${active ? "wallet-list__show" : ""} `}>
        <div className="wallet-list__head">
          <h4>Connect Wallet</h4>
          <button type="button" onClick={handleClick}>
            Close
          </button>
        </div>
        <div className="wallet-list__body">
          <ul>
            {walletList.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="wallet-list__button"
                  onClick={handleClick}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <p>
            Note: Start your journey by connecting with one of the above
            wallets. be sure to store your private keys or seed phrases
            securely. never share them with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
