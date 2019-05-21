console.log("build it is running")
let visiblility = false

const toggleVisibility = () => {
  visiblility = !visiblility;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visiblility Toggle</h1>
    <button onClick={toggleVisibility}>
      {visiblility ? 'Hide details' : 'Show details'}
    </button>
    {visiblility && (
      <div>
        <p>Hey. These are some things that you can see now!</p>
      </div>
    )}
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'))
};

render()
