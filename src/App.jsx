import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { useRecoilValueLoadable } from 'recoil';
import { todoListSelector } from './atoms';

function App() {

  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  )
}

function TodoList(){
  const todoListLoadable = useRecoilValueLoadable(todoListSelector);

  if (todoListLoadable.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (todoListLoadable.state === 'hasError') {
    return <div>Error loading todos!</div>;
  }

  const todos = todoListLoadable.contents;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? 'Completed' : 'Pending'}
        </li>
      ))}
    </ul>
  );
}

export default App
