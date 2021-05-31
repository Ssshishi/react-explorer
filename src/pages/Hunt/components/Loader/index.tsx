import React, { useEffect } from 'react';

function Loader(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="loader">
      <div>111</div>
    </div>
  );
}

export default Loader;
