import React, {useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import AddItem from './components/AddItem';
import Item from './components/Item';

export default function App() {

  const [todo, setTodo] = useState({data: []});

  useEffect(() => {
    if(localStorage.getItem('todoData') === null) {
      localStorage.setItem('todoData', JSON.stringify(todo));
    } else {
      setTodo(JSON.parse(localStorage.getItem('todoData')));
    }
  }, [])// eslint-disable-line

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todo));
  }, [todo]) 

  function pushTodo (newData) {
    let r = todo.data
    r.push(newData);
    editTodo(r)
    return;
  }
  
  function addTask (text) {
    let newData = {
      'id': uuid(),
      'text': text,
      'status': false,
    }
    pushTodo(newData);
  }

  function changeStatus(id) {
    let r = todo.data

    for (let i = 0; i < r.length; i++) {
      const element = r[i];
      if(element.id === id) {
        
        element.status = !element.status
      }
    }
    editTodo(r)
  }

  function deleteFunction(id) {
    let r = todo.data;
    for (let i = 0; i < r.length; i++) {
      var element = r[i];
      if(element.id === id) {
        r.pop(i);
        editTodo(r);
      }
    }
  }

  function sortData (list) {
    let s = []
    let e = []
    for (let i = 0; i < list.length; i++) {
      var element = list[i];
      if (element.status === false ) {
        e.push(element);
      } else {
        s.push(element);
      }
    }
    let r = [...e, ...s]
    return r;
  }

  function editTodo(list) {
    const r = sortData(list);
    setTodo({data: r});
  }

  return (
    <>
      <header className='flex flex-row h-20 justify-between items-center bg-slate-900 text-white'>
        <h1 className='font-serif text-3xl m-10'>Todo-app</h1>
        <p className='font-sans text-m m-10'>This app autosaves your tasks !</p>
      </header>
      <div className="items w-64 m-2">
        {todo.data.map(({id, text, status}, i) => (
          <Item id={id} text={text} status={status} changeStatus={changeStatus} key={i+1} deleteFunction={deleteFunction}/>
        ))}
      </div>
      <AddItem addTask={addTask}/>
    </>
  )
}
