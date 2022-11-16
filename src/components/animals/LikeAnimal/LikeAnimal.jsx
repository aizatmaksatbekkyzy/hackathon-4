import React, { useState } from "react";

const LikeAnimal = () => {
  const [like, setLike] = useState(false);

  return (
    <div>
      <h2 onClick={() => setLike(!like)}>Like:{like ? "❤️" : "🤍"}</h2>
    </div>
  );
};

export default LikeAnimal;
