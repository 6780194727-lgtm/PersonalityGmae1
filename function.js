function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>React Counter</h2>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

// Render React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
