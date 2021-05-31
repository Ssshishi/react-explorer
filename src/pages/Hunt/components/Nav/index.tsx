import React, { useEffect } from 'react';
import * as S from './styles';

function Nav(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="nav">
      <S.Header>111</S.Header>
    </div>
  );
}

export default Nav;
