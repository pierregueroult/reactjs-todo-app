import React, { useEffect} from 'react'

export default function AddItem({addTask}) {

  function clickHandler () {
    const text = document.querySelector('input','#add').value
    addTask(text)
    document.querySelector('input', '#add').value = '';
    return;
  }

  useEffect(() => {
    
    const eventKey = document.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        clickHandler();
      }
    })
  
    return () => {
      document.removeEventListener('keydown', eventKey);
    }
  }, []) // eslint-disable-line
  

  return (
    <div className='m-2 flex items-center justify-between w-64'>
      <input type={'text'} className='border-2 text-lg border-gray-700 w-auto rounded-lg' id='#add' autoComplete='off'/>
      <button className='text-center w-auto text-lg' onClick={() => clickHandler()}>Add</button>
    </div>
  )
}
