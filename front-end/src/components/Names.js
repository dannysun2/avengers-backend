import React from 'react';
import CharacterList from './CharacterList';
import axios from 'axios';

class Names extends React.Component {
  constructor() {
    super()
    this.state = {
      names: []
    }
  }

  componentDidMount() {
    axios.get('/api/characters')
          .then(res => {
            this.setState({
              names: res.data
            })
          })
    this.removeCharacter = this.removeCharacter.bind(this);
  }

  removeCharacter(e) {
    axios.post('/api/character/delete', {
      character: e
    })
    .then(res => {
      this.setState({
        names: res.data
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.names.map( (e) => {
              return (
                <article className="message is-warning">
                  <div className="message-body">
                  {e}
                  </div>
                  <button onClick={() => this.removeCharacter(e)}>Remove</button>
                </article>
              );
          })
        }
      </div>
    )
  }
}

export default Names;
