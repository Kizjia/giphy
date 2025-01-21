import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingGiphs } from '../../Redux/trendSlice';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

import { memo } from 'react';
import s from './Trend.module.scss'; // Подключаем стили

const Trend = memo(function TableTrend() {
  const { trendGiphs, loading, error, offset } = useSelector(
    (state) => state.trend
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingGiphs(offset));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getTrendingGiphs(offset)); // Запрос новых гифок
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.trendGiphsWrapper}>
      <h1 className={s.title}>В тренде</h1>
      <div className={s.trendGiphContainer}>
        {trendGiphs.map((trendGiph) => (
          <a
            key={trendGiph.id}
            href={`https://giphy.com/gifs/${trendGiph.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={s.trendGiphCard}
          >
            <img
              className={s.trendGiphImage}
              src={trendGiph.images.fixed_height.url}
              alt={trendGiph.title}
            />
          </a>
        ))}
      </div>
      <button className={s.loadMoreBtn} onClick={handleClick}>
        <MdOutlineKeyboardDoubleArrowDown size={32} />
      </button>
    </div>
  );
});

export default Trend;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTrendingGiphs } from '../../Redux/trendSlice';
// import { memo } from 'react';

// const Trend = memo(function TableTrend() {
//   const { trendGiphs, loading, error, offset } = useSelector(
//     (state) => state.trend
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTrendingGiphs(offset));
//   }, [dispatch]);

//   const handleClick = () => {
//     dispatch(getTrendingGiphs(offset)); // Запрос новых гифок
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <p>тут будут гифки</p>
//       {trendGiphs.map((giph) => (
//         <img
//           key={giph.id}
//           src={giph.images.fixed_height.url}
//           alt={giph.title}
//         />
//       ))}
//       <button onClick={handleClick}>Еще</button>
//     </div>
//   );
// });

// export default Trend;
