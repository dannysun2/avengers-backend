import React from 'react';
import CharacterList from './CharacterList';

class Battlefield extends React.Component {
  render() {
    return(
      <div className="container">
        <img src="https://i.annihil.us/u/prod/marvel/movies/infinitywar/images/title.png" alt="marvel logo" />
        <CharacterList />
      </div>
    )
  }
}

export default Battlefield;
