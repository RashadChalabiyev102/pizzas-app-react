import React from "react";

import style from "../scss/components/NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.root}>
      <h1>Not Found</h1>
      <p>Unfortunately this page is not available</p>
    </div>
  );
};

export default NotFound;
