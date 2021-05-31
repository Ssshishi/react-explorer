import React, { useEffect } from 'react';

import * as S from './styles';

function Filter(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="filter">
      <S.Header>111</S.Header>
    </div>
  );
}

export default Filter;
