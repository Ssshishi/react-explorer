import React, { useEffect } from 'react';

import * as S from './styles';

function Alert(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="alert">
      <S.Header>111</S.Header>
    </div>
  );
}

export default Alert;
