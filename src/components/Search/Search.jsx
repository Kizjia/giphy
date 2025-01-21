import React from 'react';
import Input from './Input/Input';
import Results from './Results/Results';
import s from './Search.module.scss';

export default function Search() {
  return (
    <div className={s.Search}>
      <Input />
      <Results />
    </div>
  );
}
