import React from 'react';
import FirstForm from "./FirstForm";

const FirstApp = () => {
  return (
    <div className="FirstApp">
      <h2>First app!</h2>
      <p>
        Many text. Очень много текста.
      </p>
      <div>
        <FirstForm/>
      </div>
    </div>
  );
};

export default FirstApp;
