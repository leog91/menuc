import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Opciones from './Opciones';
import Main from './Main';
import { connect } from 'react-redux';
import { addOrder, deleteOrder } from './actions';








class App extends Component {

  //do-refactor
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addOrder() {
    this.props.addOrder(this.state.text);
  }

  deleteOrder(id) {
    this.props.deleteOrder(id);
  }

  renderOrders() {
    const { orders } = this.props;
    return (

      <ul className="list-group " >
        {
          orders.map(order => {
            return (
              <li key={order.id} className="list-group-item">
                <span className="list-item">{order.text}</span>
                <span
                  className="list-item delete-button pull-right"
                  onClick={() => this.deleteOrder(order.id)}
                >
                  &#x2715;
                </span>
              </li>
            )
          }
          )
        }
      </ul>
    )
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Menu</h1>
        </header>
        <div className="container">
          <br></br>
          <div className="row">
            <div className="col-md-6">
              <div className="form-inline">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="milaCompleta"
                    onChange={event => this.setState({ text: event.target.value })}
                  />
                </div>
                <br></br>
              </div>
            </div>
            <div className="col-md-6">
              <Opciones />
              <button type="button"
                className="btn btn-success btn-block"
                onClick={() => this.addOrder()}
              >
                Add Order
            </button>
              <br></br>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
              {this.renderOrders()}
            </div>
            <div className="col-md-3">
            </div>
          </div>

          <Main />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state
  }
}

export default connect(mapStateToProps, { addOrder, deleteOrder })(App);
