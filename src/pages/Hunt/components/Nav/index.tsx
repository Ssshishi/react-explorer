import React, { useEffect } from 'react';

import Princess from '../../../../assets/images/princess.png';
import gitPng from '../../../../assets/images/hub.png';
import starPng from '../../../../assets/images/star.png';
import * as S from './styles';

function Nav(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);

  const share = [
    {
      value: 'View Source',
      img: gitPng,
      to: 'https://github.com/Ssshishi/react-explorer',
      id: 1,
      background: '#2e3338'
    },
    {
      value: 'Star Me',
      img: starPng,
      to: 'https://github.com/Ssshishi',
      id: 2,
      background: '#04a2ea'
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
          <h2>GitHunt</h2>
          <div>Most starred projects on GitHub</div>
        </div>
      </div>

      {/* 跳转btn */}
      <div className="nav-btn">
        {share.map(item => (
          <button
            key={item.id}
            style={{ backgroundColor: item.background }}
            type="button"
            onClick={() => {
              handleClick(item.to);
            }}
          >
            <img src={item.img} alt="" />
            <strong>{item.value}</strong>
          </button>
        ))}
      </div>
    </S.Nav>
  );
}

export default Nav;
