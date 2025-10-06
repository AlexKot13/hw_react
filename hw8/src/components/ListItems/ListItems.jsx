import React from 'react';
import { useState, useEffect } from "react"


const ListItems = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  // useEffect(() => {
  //   console.log('Компонент ListItems обновлен')
  // }, [items])

  useEffect(() => {
  console.log('Компонент ListItems смонтирован');
  }, []);

  const addItem = () => {
    if (inputValue.trim() === '') 
      return
    setItems([...items, inputValue.trim()])
    setInputValue('')
  }

  return (
    <div>
      <h2>Список элементов</h2>
      <input 
      type="text"
      placeholder="Введите элемент"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Добавить</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListItems;