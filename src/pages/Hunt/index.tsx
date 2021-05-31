import React, { useEffect } from 'react';

function Hunt(): JSX.Element {
  useEffect(() => {
    console.log(1111);
  }, []);
  return (
    <div className="hunt">
      <h1>git小猎手</h1>
      {/* nav 主题 和 源代码 */}
      <div>
        <div>1111</div>
      </div>
      {/* token */}
      <div>2222</div>
      {/* 时间区间 代码选择 日期 UI */}
      <div>33333</div>
      {/* 项目list 项目名 建立信息 info  类型 star fork issue */}
      <div>444</div>
      {/* 加载模块 上一个 年，月，日 */}
      <div>555</div>
    </div>
  );
}

export default Hunt;
