import React, {useState, useMemo} from "react";
import MyButton from "./component/UI/button/Mubutton"
import Myinput from "./component/UI/input/Myinput";
import TodoList from "./component/todoList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "name one", description: "descroption one"},
    {id: 2, title: "name two", description: "descroption two"},
    {id: 3, title: "name tfree", description: "descroption tfree"},
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');

  const addToDoList = (e) => {
    e.preventDefault() 
    const newToDo = {
      id: Date.now(),
      title,
      description
    };
    localStorage
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
