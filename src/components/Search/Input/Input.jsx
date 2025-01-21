import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGiphs, setNewQuery } from '../../../Redux/giphsSlice';
import 'font-awesome/css/font-awesome.min.css'; // Импорт иконок FontAwesome
import s from './Input.module.scss'; // Стили
import { FaSearch } from 'react-icons/fa';

export default function Input() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNewQuery(query));
    dispatch(fetchGiphs({ query: query, offset: 0 }));
  };
  return (
    <div className={s.inputWrapper}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={s.input}
        placeholder="Введите запрос..."
      />
      <button className={s.button} onClick={handleClick}>
        <FaSearch size={24} />
      </button>
    </div>
  );
}
