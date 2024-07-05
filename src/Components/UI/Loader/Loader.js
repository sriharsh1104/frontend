import React from "react";
import { LineWave } from "react-loader-spinner";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="overlayloader">
      <span className="overlayloader__inner">
        <LineWave
          height="150"
          width="150"
          color="#000000"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </span>
    </div>
  );
};

export default Loader;
