import React, { useEffect } from 'react';

function List(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="list">
      <div>111</div>
    </div>
  );
}

export default List;
