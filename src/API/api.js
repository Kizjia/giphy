import axios from 'axios';

// Укажите ваш ключ API
const API_KEY = '2tvk8A5DjzrvMHTG4iOnsblABpvuGSci';

// Создаем экземпляр axios с базовым URL
const instance = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/`,
});

export const giphsAPI = {
  getGiphs(query, offset) {
    return instance.get('search', {
      params: {
        api_key: API_KEY,
        q: query,
        limit: 12,
        offset: offset, // Добавляем offset для пагинации
      },
    });
  },
  getRandomGiph() {
    return instance.get('random', {
      params: {
        api_key: API_KEY,
      },
    });
  },

  getTrendingGiphs(offset) {
    return instance.get('trending', {
      params: {
        api_key: API_KEY,
        limit: 12,
        offset: offset,
      },
    });
  },
};
