import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    part: 'id,snippet',
    regionCode:'US',
    maxResults: '50',
    order:'date'
  },
  headers: {
    'X-RapidAPI-Key': '1ece9a68e4msh53d6ba5b9a6c82dp17ad89jsna4f07ecd4ffe',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getYoutubeAPIData = (searchQuery = 'javascript') => {
    const apiOptions = {
        ...options,
        params:{
            ...options.params,
            q: searchQuery,
    },
    }
    return axios.request(apiOptions);
}