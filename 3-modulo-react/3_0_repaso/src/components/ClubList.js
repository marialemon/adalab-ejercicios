//import React, { useState } from "react";
import Club from "./Club";

function ClubList(props) {
  console.log(props.list);
  props.list.map((item) => {
    console.log(item.name);
  });

  return (
    <div className="ClubList">
      <h2>Listado de Clubes</h2>
      <Club></Club>
    </div>
  );
}

export default ClubList;
