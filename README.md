import axios from "axios";

const options = {
method: 'GET',
url: 'https://youtube-v31.p.rapidapi.com/search',
params: {
relatedToVideoId: '7ghhRHRP6t4',
part: 'id,snippet',
type: 'video',
maxResults: '50'
},
headers: {
'X-RapidAPI-Key': '1ece9a68e4msh53d6ba5b9a6c82dp17ad89jsna4f07ecd4ffe',
'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
