import React from 'react';
import _ from 'lodash';

export default class CharacterItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectHeroHandler = this.selectHeroHandler.bind(this);
  }

  selectHeroHandler() {
    this.props.selectHero(this.props.character)
  }

  render() {

    return (
      <div className="column is-one-quarter">
        <div
          className={"card " + (_.includes(this.props.selectedHeroes, this.props.character) ? 'highlighted' : '')}
          onClick={() => this.selectHeroHandler()}
          >
          <div className="card-image">
            <figure className="image is-4by4">
              <img
                src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`}
                alt="hero" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {this.props.character.name}
                </p>
              </div>
            </div>
            <div className="content has-text-left">
              {
                (this.props.character.description === "")
                ? "No Data Available"
                : this.props.character.description
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
