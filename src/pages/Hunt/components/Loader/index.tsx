import React, { useEffect } from 'react';

import * as S from './styles';

function Loader(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="loader">
      <S.Header>111</S.Header>
    </div>
  );
}

export default Loader;
