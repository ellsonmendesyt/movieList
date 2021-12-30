import axios from "axios";

 const API_KEY='3b88845e949fdf7b792077a7a905048d';
const BASE_URL='https://api.themoviedb.org/3';





const {REACT_APP_API_BASE_URL,REACT_APP_API_KEY} = process.env;

// make a single request to themoviedb
export const fetchData = async (endpoint)=>{
   const response= await axios.get(`${REACT_APP_API_BASE_URL}${endpoint}`)
    const {data}=response;
    return data;
}

export default{
    // create a multi request
    getHomeList: async function (){
        return[
            {
                slug:'cinemas',
                title:"Filmes em cartaz",
                items: await fetchData(`/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=pt-BR`)
            },
            {
                slug:'2019-novembro',
                title:'Lançados em Novembro de 2020',
                items:await fetchData(`/discover/movie?api_key=${REACT_APP_API_KEY}&language=pt-BR&primary_release_date.gte=2019-02-01&&primary_release_date.lte=2019-05-20&page=1`)
            }
        ]
    },
    fetchOneMovie: async (id,type)=>{
        let info={}

        if(id){
            switch(type){
                case 'movie':
                    info = await fetchData(`/movie/${id}?language=pt-BR&api_key=${REACT_APP_API_KEY}`)
                    break;
                    case 'tv':
                    info = await fetchData(`/tv/${id}?language=pt-BR&api_key=${REACT_APP_API_KEY}`)
                    break;
            }
        }
    }
}

// `/watch/${item.id}` assistir