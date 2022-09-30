import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <main>
      <TodoProvider>
        <TodoInput />
        <TodoList  />
      </TodoProvider>
    </main>
    
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <div>Counter: {counter}</div>
//       <button type="button" onClick={() => setCounter(counter + 1)}>
//         Increase Counter
//       </button>
//     </div>
//   );
// }

// export default App;
