import React, {Component} from 'react';
import classNames from 'classnames';

class Card extends Component {
  constructor() {
    super();
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }
  render() {
    let {item} = this.props;

    return (
      <div className="flatList__col col-lg-4 col-md-6 col-12 mb-4">
        <div className="flatCard card">
          <img className="card-img-top img-fluid" src="//placehold.it/500x200" alt="Plug" />
        <div className="card-body">
          <div className="card-title h5 flatCard__title">{item.attributes.title}</div>
          <dl className="row">
            <dt className="col-sm-4">Комнат</dt>
            <dd className="col-sm-8">{item.attributes.rooms}</dd>
            <dt className="col-sm-4">Площадь</dt>
            <dd className="col-sm-8">{`${item.attributes.area} ${item.attributes.unit}`}</dd>
            <dt className="col-sm-4">Адрес</dt>
            <dd className="col-sm-8">{`${item.attributes.address.city}, ${item.attributes.address.street}, ${item.attributes.address.house}`}</dd>
          </dl>
          <div className="flatCard__address"></div>
          <div className="">
            {item.relationships.type === "agent" ? "Агент: ": ""}
            <a href="#">{`${item.relationships.attributes.last_name} ${item.relationships.attributes.first_name}`}</a>
          </div>
        </div>
        <div className="card-footer text-right">
          <button className = {classNames({
              "btn" : true,
              "btn-link" : true,
              "flatCard__like" : true, 
              "flatCard__like--liked" : item['like']
            })} onClick={this.handleLikeClick}>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="flatCard__like__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d=
                {classNames({
                  "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" : !item['like'], 
                  "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" : item['like']
                })}
                />
              </svg>
            </button>
        </div>
      </div>
      </div>
    )
  }
  handleLikeClick() {
    let {item, updateCard} = this.props;
    updateCard(item.id, 'like', !item.like);
  }
  
}

export default Card;