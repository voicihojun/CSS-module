import React, { useState } from "react";
import CheckBox from "./CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        I agree to all of the following terms and conditions
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? "true" : "false"}
      </p>
    </div>
  );
}

export default App;
