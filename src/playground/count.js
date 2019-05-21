class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count : 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
    console.log('add one')
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
    console.log('minus one')
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    console.log('reset')
  }
  render() {
    return (

      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+ 1</button>
        <button onClick={this.handleMinusOne}>- 1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>

    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))


























// ============================ OLD =============================

// let count = 0;
// const addOne = () => {
//   count ++
//   renderCounterApp()
//   console.log('addOne')
// }
// const subOne = () => {
//   count --
//   renderCounterApp()
//   console.log('subOne')
// }
// const reset = () => {
//   count = 0
//   renderCounterApp()
//   console.log('reset')
// }
//
// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={subOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );
// console.log(templateTwo)
// const appRoot = document.getElementById('app')
//
// ReactDOM.render(templateTwo, appRoot)
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp()
