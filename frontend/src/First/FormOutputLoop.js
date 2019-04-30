import React from "react";
import FirstOutput from "./FirstOutput";

const FormOutputLoop = (props) => {
  let blocks = [];

  for (let i = 0; i < props.list.length; i++) {
    blocks.push(
      <FirstOutput wtf={props.list[i].title} />
    );
  }

  return blocks;
};

export default FormOutputLoop;
/*<div className="search-item">
        {props.list[i].title}
      </div>*/
