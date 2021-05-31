import React, { useEffect } from 'react';

function Alert(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="alert">
      <div>111</div>
    </div>
  );
}

export default Alert;
