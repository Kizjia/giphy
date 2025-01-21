import React from 'react';
import s from './Results.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGiphs } from '../../../Redux/giphsSlice';
import { memo } from 'react';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

const Results = memo(function Table() {
  const { giphs, loading, error, query, offset } = useSelector(
    (state) => state.giph
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchGiphs({ query, offset })); // Запрос новых гифок
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.resultsWrapper}>
      <div className={s.giphContainer}>
        {giphs.map((giph) => (
          <a
            key={giph.id}
            href={`https://giphy.com/gifs/${giph.id}`} // Ссылка на giphy
            target="_blank"
            rel="noopener noreferrer"
            className={s.giphCard}
          >
            <img
              className={s.giphImage}
              src={giph.images.fixed_height.url}
              alt={giph.title}
            />
          </a>
        ))}
      </div>
      {giphs.length ? (
        <button className={s.loadMoreBtn} onClick={handleClick}>
          <MdOutlineKeyboardDoubleArrowDown size={32} />
        </button>
      ) : (
        <h1 className={s.empty}>Тут будут гифки</h1>
      )}
    </div>
  );
});

export default Results;
