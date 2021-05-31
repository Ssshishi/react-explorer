import React, { useEffect } from 'react';

function Nav(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="nav">
      <div>111</div>
    </div>
  );
}

export default Nav;
