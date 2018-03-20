console.log('app.js is running')
//  JSX - JavaScript XML
const object = {
  title: 'South Park',
  subtitle: 'The Fractured But Whole',
  options: ['One', ' Two']
}

const template =
  <div>
  <h1>{object.title}</h1>
    {object.subtitle && <p>{object.subtitle}</p>}
    <p>{object.options.length > 0 ? 'Here are your options' + ' ' + object.options : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
//  create a templateTwo var in JSX
const user = {
  name: 'Sergio',
  age: 37,
  location: 'Provo, Ut'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name: 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    { getLocation(user.location) }
  </div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
