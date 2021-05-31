import React, { useEffect } from 'react';

import Princess from '../../../../assets/images/princess.png';
import * as S from './styles';

function Nav(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);

  const share = [
    {
      value: 'View Source',
      img: '../../../../assets/images/github.png',
      to: 'https://github.com/Ssshishi/react-explorer',
      id: 1
    },
    {
      value: 'Star Me',
      img: '../../../../assets/images/star.png',
      to: 'https://github.com/Ssshishi',
      id: 2
    }
  ];

  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <S.Nav>
      {/* 头像 标题 */}
      <div className="nav-title">
        <img src={Princess} alt="" />
        <div>
          <h1>GitHunt</h1>
          <div>Most starred projects on GitHub</div>
        </div>
      </div>

      {/* 跳转btn */}
      <div className="nav-btn">
        {share.map(item => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              handleClick(item.to);
            }}
          >
            <img src={item.img} alt="" />
            <span>{item.value}</span>
          </button>
        ))}
      </div>

      <S.Header>1</S.Header>
    </S.Nav>
  );
}

export default Nav;
