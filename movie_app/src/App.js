import React from 'react';
import { render } from 'react-dom';
import Protypes from "prop-types";
import axios from 'axios';
import Movie from "./movies";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  //async를 붙인 것은 조금 기다려야 한다라는 것을 알려주는 것.
  getMovies = async () =>{
    // await는 함수가 내가 뭘 기다렸으면 해? 라는 질문에 답하는 것이 되는 꼴.
    // axios 앞에 await를 붙임으로써 axios가 끝날 때까지 기다리기를 계속함 (js 문법임)
    // axios는 속도가 느리기 때문에 await를 붙여준 것.

    // await는 async를 쓰지 않으면 사용할 수 없다.

    // 정리하면 async, await를 붙이는 이유는 해당 함수 getMovies()에게 조금 시간이 필요하고, 그것을 기다려!
    // 라고 이야기 하는 것과 같다. 

    // 여기서 잡은 데이터를 state에 저장해서 사용할 것.
    // const a = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // axios를 이용한 data get
    // console.log(a.data.data.movies); // js 버전

    // es6 버전 멋지제
    const { data :  { data : { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({ movies, isLoading : false }); // = {movies: movies}
    
 
  }

  async componentDidMount(){ // render가 되고 난 후에 실행되는 함수라 했다.
    this.getMovies();


  }


  render(){
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        { isLoading ? 
                  (
                    <div className="loader">
                      "I am Loading"
                    </div>
                  )
                   :
                   (
                     //an arrow function wrapped by () will return the value it wraps, so if I wanted to use curly braces I had to add the return keyword
                      <div>
                        {movies.map(movie => (
                          <Movie id={movie.id} year={movie.year}
                                  title={movie.title} summary={movie.summary}
                                  poster={movie.medium_cover_image} key={movie.id}
                                  genres={movie.genres}
                          />
                        ))}
                      </div>
                   )
                   }
      </section>
    )
  }
}

export default App;
