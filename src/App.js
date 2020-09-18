const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Pesto',
      animal: 'Dog',
      breed: 'Corgi'
    }),
    React.createElement(Pet, {
      name: 'Kit',
      animal: 'Cat',
      breed: 'Long Hair'
    }),
    React.createElement(Pet, {
      name: 'Cocoa',
      animal: 'Dog',
      breed: 'Australian Shepherd'
    })
  ])
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
