let count = 0;
const addOne = () => {
  count ++
  renderCounterApp()
  console.log('addOne')
}
const subOne = () => {
  count --
  renderCounterApp()
  console.log('subOne')
}
const reset = () => {
  count = 0
  renderCounterApp()
  console.log('reset')
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);
console.log(templateTwo)
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
