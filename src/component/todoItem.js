import React from 'react';
import ButtonItem from './UI/button/ButtonItem';

const todoItem = (props) => {
  return (
    <div className="todo-item">
       <div className="todo-item__content">
        <p className="todo-list_title">{props.post.title}</p>
        <p className="todo-list_description">{props.post.description}</p>
       </div>
       <div className="todo-list_btn-delete">
        <ButtonItem onClick={() => props.remove(props.post)}>удалить</ButtonItem>
       </div>
    </div>
  );
};

export default todoItem;