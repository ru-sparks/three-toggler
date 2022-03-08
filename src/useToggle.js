import React, { useState } from "react";

const useToggle = (initial = false) => {
  let [toggle, setToggle] = useState(initial);

  return [toggle, setToggle];
};

export default useToggle;
