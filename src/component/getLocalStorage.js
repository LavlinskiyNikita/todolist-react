const getLocalStorage = () => {
  let posts = localStorage.getItem("list")
  if (posts) {
    return (posts = JSON.parse(localStorage.getItem("list")))
  } else {
    return []
  }
} 
