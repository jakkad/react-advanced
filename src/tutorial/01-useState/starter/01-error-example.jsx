const ErrorExample = () => {
  let count = 0;

  function increaseCounter() {
    count = count + 1;
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default ErrorExample;
