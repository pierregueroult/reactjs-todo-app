import React from 'react'

export default function Item({id, text, status, changeStatus, deleteFunction}) {
  return (
    <div className={`bg-slate-200 rounded-lg item item-${id} flex items-center gap-3 h-10 justify-between text-lg font-sans mt-2 mb-2`}>
      <div className='flex items-center gap-3'>
        <i className={status === true ? "fa-solid fa-square-check ml-3 text-gray-700": "fa-solid fa-square ml-3 text-black"} onClick={() => changeStatus(id)}></i>
        <p className={status === true ? 'line-through text-gray-700' : 'text-black'}>{text}</p>
      </div>
      <i className="fa-solid fa-xmark mr-3" onClick={() => deleteFunction(id)}></i>
    </div>
  )
}