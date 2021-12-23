import axios from "axios";

const API_KEY='3b88845e949fdf7b792077a7a905048d';
const BASE_URL='https://api.themoviedb.org/3';

const basicFetch = async (endpoint)=>{
    // const req = await fetch(`${BASE_URL}${endpoint}`)
    // const json = await req.json();
    //  return json;

   const response= await axios.get(`${BASE_URL}${endpoint}`)
    const {data}=response;
    return data;
}

export default{
    getHomeList: async function (){
        return[
            {
                slug:'cinemas',
                title:"Filmes em cartaz",
                items: await basicFetch(`/movie/now_playing?api_key=3b88845e949fdf7b792077a7a905048d&language=pt-BR`)
            },
            {
                slug:'2020-novembro',
                title:'Lançados em Novembro de 2020',
                items:await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&primary_release_date.gte=2019-02-01&&primary_release_date.lte=2019-05-20&page=1`)
            }
        ]
    },
    fetchOneMovie: async (id,type)=>{
        let info={}

        if(id){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                    case 'tv':
                    info = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break;
            }
        }
    }
}

// `/watch/${item.id}` assistir