import {RequestHandler, rest} from 'msw'
import {setupServer} from 'msw/node'
import { fetchData } from '../api'
import BASE_URL from '../api'


const movieResponse={
    "dates": {
      "maximum": "2022-01-04",
      "minimum": "2021-11-17"
    },
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.",
        "popularity": 11671.933,
        "poster_path": "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        "release_date": "2021-12-15",
        "title": "Homem-Aranha: Sem Volta Para Casa",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 2893
      },
    ],
    "total_pages": 96,
    "total_results": 1903
}

// quando eu fizer uma requisição pra esse endpoint
//vou retornar uma vetor com um objeto
const server = setupServer(rest.get("https://api.themoviedb.org/3/movie/now_playing", (req,res,ctx)=>{

console.log('aqui')
return res(
    ctx.json(
        // [{
        //     id:1, 
        //     title:"Homem Aranha",
        //     overview: "Heis o poderoso homem aranha"
        // }]

        {
            id:1,nome:"elson"
        }
    )
)

}))

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())

it("Buscar lista de filmes", async ()=>{
    const pessoa = await fetchData("movie/now_playing")
    // expect (movies).toEqual(movieResponse)
    expect.objectContaining({id:1,nome:"elson"});
})