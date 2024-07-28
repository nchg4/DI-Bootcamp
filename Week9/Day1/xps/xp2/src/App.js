import React from 'react';

export function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return(
  <>
  <h3>{user.firstName}</h3>
  <h3>{user.lastName}</h3>
  <UseFavoriteColors favorites = {user.favAnimals} />
  </>
  );
}

function UseFavoriteColors(props){
  const favorites = props.favorites;
  return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
}
