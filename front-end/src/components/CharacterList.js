import React from 'react';
import heroes from '../characters';
import CharacterItem from './CharacterItem';
import axios from 'axios';
import md5 from 'blueimp-md5';
import _ from 'lodash';

export default class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      selectedHeroes: []
    }

    heroes.map(e => {
      axios.get('http://gateway.marvel.com/v1/public/characters', {
              params: {
                ts: Date.now(),
                apikey: 'PUBLIC_KEY',
                hash: md5(`${Date.now()}PRIVATE_KEY + PUBLIC_KEY`),
                name: e
              }
            })
            .then(res => {
              if (res.data.data.results.length > 0) {
                this.setState({
                  heroes: this.state.heroes.concat(res.data.data.results[0])
                })
              }
            })
    });

    this.selectHero = this.selectHero.bind(this);
  }

  selectHero(hero) {
    if (_.includes(this.state.selectedHeroes, hero)) {
      console.log('remove')
      this.setState({
        selectedHeroes: _.remove(this.state.selectedHeroes, function(n) { return n.id != hero.id } )
      });
    } else {
      console.log('add')
      this.setState({
        selectedHeroes: this.state.selectedHeroes.concat(hero)
      });
    }
  }

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        {
          this.state.heroes.map((e, i) => {
          return (
            <CharacterItem
              key={i}
              character={e}
              selectHero={this.selectHero}
              selectedHeroes={this.state.selectedHeroes}
            />
            )
          })
      }
      </div>
    );
  }
}
