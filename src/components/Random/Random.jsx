import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGiph } from '../../Redux/randomSlice';
import { MdOutlineNavigateNext } from 'react-icons/md';

import s from './Random.module.scss'; // Импорт стилей

export default function Random() {
  const { randomGiph, error, loading } = useSelector((state) => state.random);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGiph());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getRandomGiph());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!randomGiph || !randomGiph.images || !randomGiph.images.fixed_height) {
    return <p>No GIF found</p>;
  }

  return (
    <div className={s.randomWrapper}>
      <div className={s.randomGiphCard}>
        <img
          key={randomGiph.id}
          src={randomGiph.images.fixed_height.url}
          alt={randomGiph.title}
          className={s.randomGiphImage}
        />
      </div>
      <button className={s.button} onClick={handleClick}>
        <MdOutlineNavigateNext size={32} />
      </button>
    </div>
  );
}

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRandomGiph } from '../../Redux/randomSlice';

// export default function Random() {
//   const { randomGiph, error, loading } = useSelector((state) => state.random);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRandomGiph());
//   }, [dispatch]);

//   const handleClick = () => {
//     dispatch(getRandomGiph());
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   if (!randomGiph || !randomGiph.images || !randomGiph.images.fixed_height) {
//     return <p>No GIF found</p>;
//   }

//   return (
//     <div>
//       <img
//         key={randomGiph.id}
//         src={randomGiph.images.fixed_height.url}
//         alt={randomGiph.title}
//       />
//       <button onClick={handleClick}>Следующая</button>
//     </div>
//   );
// }
