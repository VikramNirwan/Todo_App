import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="container .bg-secondary-subtle ">
      <h1 className="text-center">Todo List</h1>
      <Todos />
    </div>
  );
};

export default App;
