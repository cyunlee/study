import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //strictMode가 앱을 감싸고 있는데 엄격하게 리액트에서 관리하는 것.
  //기본적으로 생애주기 관련해서 똑같은 동작이 여러번 발생하는 것이 좋지 않기 때문에 정확히 감지하기 때문에.. 두 번 렌더를 한다.
);
