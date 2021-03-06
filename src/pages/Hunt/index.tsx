import React, { useEffect } from 'react';

import Nav from './components/Nav';
import Alert from './components/Alert';
import Date from './components/Date';
import Filter from './components/Filter';
import List from './components/List';
import Loader from './components/Loader';

import * as S from './styles';

function Hunt(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="hunt">
      <S.Title>git小猎手</S.Title>
      {/* nav 主题 和 源代码 */}
      <Nav />
      {/* token */}
      <Alert />
      {/* 时间区间 代码选择 日期 UI */}
      <Date />
      <Filter />
      {/* 项目list 项目名 建立信息 info  类型 star fork issue */}
      <List />
      {/* 加载模块 上一个 年，月，日 */}
      <Loader />
    </div>
  );
}

export default Hunt;
