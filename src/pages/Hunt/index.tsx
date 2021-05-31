import React, { useEffect } from 'react';

function Hunt(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="hunt">
      <img src="" alt="" />
      <h1>git小猎手</h1>
    </div>
  );
}

export default Hunt;
