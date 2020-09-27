import React, {Component} from 'react';
import Card from './Card';
import data from "../../data/entities.json";
import './Cards.scss';

class List extends Component {
  constructor(props) {
    super();
    this.state = { 
      isLoading : true,
      list : null,
    };
    this.updateCard = this.updateCard.bind(this);
  }
  render() {
    const { isLoading, list } = this.state;
 
    if (isLoading) {
      return <p>Данные загружаются</p>;
    }
    return (
      <div className="flatsList row">
        {list.map(item =>
          <Card key={item.id} item={item} updateCard={this.updateCard} />
        )}
      </div>
    );
  }
  componentDidMount() {
    this.getData()
      .then(data => {
        this.setState({
          isLoading: false,
          list: data.response
        });
      })
  }
  getData() {
    return new Promise((res, rej)=>{
      setTimeout(() => {
        res(data);
      }, 1000);
    })
  }
  sendData(id, path, value) {
    return new Promise((res, rej)=>{
      setTimeout(() => res({res: 1}), 100);
    })
  }
  updateCard(id, path, value) {
    const idx = this.state.list.findIndex(el => el.id === id);
    const newValue = {};
    newValue[path] = value;

    this.sendData(id, path, value)
      .then(res => {
        this.setState(state => {
          const list = [
            ...state.list.slice(0, idx),
            Object.assign({}, this.state.list[idx], newValue),
            ...state.list.slice(idx + 1)
          ]
          return {
            list
          }
        })
      })
  }
}

export default List;