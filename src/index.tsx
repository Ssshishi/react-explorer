import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // 严格模式检查仅在开发模式下运行
  // 识别不安全的生命周期
  // 过时字符串 ref API 的警告
  // 使用废弃的 findDOMNode 方法的警告
  // 检测意外的副作用
  // 检测过时的 context API
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
