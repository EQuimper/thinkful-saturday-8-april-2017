// Do my state need to be global

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { createTodo, completedTodo, deletedTodo } from './actions';
import './App.css';

const Button = styled.button`
  height: 50;
  width: 100;
  background-color: #dadada;
`;

const Title = styled.h4`
  text-decoration: ${({ completed }) => completed && 'line-through'};
`;

const initialState = {
  title: '',
  date: ''
}

class App extends Component {
  state = initialState;

  _handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState(initialState);
  }

  _handleCompleted = id => this.props.completedTodo(id);

  _handleDeleted = id => this.props.deletedTodo(id);

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <h1>
          {todos.filter(todo => todo.completed).length} completed /{todos.length} totals
        </h1>
        <form onSubmit={this._handleSubmit}>
          <input
            onChange={this._handleChange}
            value={this.state.title}
            type="text"
            id="title"
            placeholder="Todo Here..."
          />
          <input
            type="date"
            id="date"
            placeholder="Date due..."
            onChange={this._handleChange}
            value={this.state.date}
          />
          <Button type="submit">Create Todo</Button>
        </form>
        <hr />
        {todos.map(({ title, due, id, completed }, i) => (
          <div key={id}>
            <Title completed={completed} onClick={() => this._handleCompleted(id)}>
              {title}
            </Title>
            <Title completed={completed} onClick={() => this._handleCompleted(id)}>
              {title}
            </Title>
            <p>Due: {due}</p>
            <button onClick={() => this._handleDeleted(id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  { createTodo, completedTodo, deletedTodo }
)(App);
