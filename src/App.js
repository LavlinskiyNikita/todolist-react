import React, {useState, useMemo, useEffect} from "react";
import MyButton from "./component/UI/button/Mubutton"
import Myinput from "./component/UI/input/Myinput";
import TodoList from "./component/todoList";

const getLocalStorage = () => {
  let posts = localStorage.getItem("list")
  if (posts) {
    return (posts = JSON.parse(localStorage.getItem("list")))
  } else {
    return []
  }
} 

function App() {
  const [posts, setPosts] = useState(getLocalStorage());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(posts))
  }, [posts])

  const addToDoList = (e) => {
    e.preventDefault() 
    const newToDo = {
      id: Date.now(),
      title,
      description
    };
    setPosts([...posts, newToDo]);
    setTitle('')
    setDescription('')
  }

  const deleteTodo = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const searchTodolist = useMemo( () => {
    return posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, posts])

  return (
    <div className="wrapper">
      <form action="" className="form">
        <Myinput 
          type="text" 
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}       
        />
        <Myinput  
          type="text" 
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <MyButton onClick={addToDoList} >добавить пост</MyButton>
      </form>

      <Myinput 
        type="text" 
        placeholder="search"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="content-post">
        <TodoList remove={deleteTodo} posts={searchTodolist}/>
      </div>
    </div>
  );
}

export default App;
