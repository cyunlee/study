
import './App.css';
import PostList from './Ex1';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';

function App() {
  return (
    <div className="App">
    {/* 클래스형 컴포넌트 라이프사이클 */}
    <LifeCycleClass />
    <hr />

    {/* 함수형 컴포넌트 라이프사이클 */}
    <LifeCycleFunc />

    {/* 실습1 */}
    <PostList />
    </div>
  );
}

export default App;
