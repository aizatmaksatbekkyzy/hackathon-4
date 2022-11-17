import React, { useState } from "react";

const LikeAnimal = () => {
  const [like, setLike] = useState(false);

  return (
    <div>
      <h3 onClick={() => setLike(!like)}>Like:{like ? "💙" : "💛"}</h3>
    </div>
  );
};

export default LikeAnimal;
