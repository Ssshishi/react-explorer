import React, { useEffect } from 'react';

import * as S from './styles';

function List(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="list">
      <S.Header>111</S.Header>
    </div>
  );
}

export default List;
