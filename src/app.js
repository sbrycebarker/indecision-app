class IndecisionApp extends React.Component {
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    const options = ['Option one', 'Option two', 'Option four']

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick')
  }
  render(){
    return(
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

// Options => goes here

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('Remove All');
  }
  render(){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

// Option => Option component here

class Option extends React.Component {
    render(){
      return (
        <div>
          {this.props.optionText}
        </div>
      )
    }
}


// Addoption => goes here

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    } else {
      alert("NO OPTION")
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="New Option" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
