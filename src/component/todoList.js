import React from 'react';
import TodoItem from './todoItem';

const todoList = ({posts, remove}) => {
  return (
    <>
      <h1 className="todo">ваши задачи</h1>
      {
          posts.map((post) => 
          <TodoItem remove={remove} key={post.id} post={post}/>
      )}
    </>
  );
};


export default todoList;