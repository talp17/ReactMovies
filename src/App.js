import React ,{Component}  from 'react';
import './App.css';
import Movie from './comps/Movie';

class App extends Component {

  state={
    msg:"",
    title:"",
    year:"",
    allMovies:[]
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <h1 className="m-5">Lookup Any Movie!</h1>
          <input name="title"  placeholder="Enter a title" onChange={this.handleChange.bind(this)} value={this.state.title}></input><br/>
          <input name="year" placeholder="Enter a year" onChange={this.handleChange.bind(this)}  value={this.state.year} ></input><br/>
          <button className="btn btn-warning" onClick={this.sendResult.bind(this)}>Submit</button>
          <button className="btn btn-secondary" onClick={this.resetBtn.bind(this)}>Reset</button>

          <p className="bg-warning mt-3">{this.state.msg}</p>

          <div className="row">
            {this.state.allMovies.map(movie=> <Movie  key={movie.imdbID} m={movie}/>)}
          </div>
        </div>
      </div>
    );
  }


  handleChange(event) {
    this.setState({msg:""});
    this.setState({[event.target.name]: event.target.value});
  }


  //get movies from api or error when click send button
  async sendResult(){
    this.setState({allMovies:[]});
    if(this.state.title ==""){
        this.setState({msg:"Please enter a title"});
    }
    else{
      let res = await fetch(`http://www.omdbapi.com/?s=${this.state.title}&y=${this.state.year}&apikey=c8a0ca29`);
      let data = await res.json();
      if(data.Response == "True"){
         //get the array of movies from the results (named Search)
        data = data.Search;
        this.setState({allMovies:data});
      }
      else{
        this.setState({msg:"Movie not found"});
      }
    }
  }


  //reset the inputs, movies and errors when click reset button
  resetBtn(){
    this.setState({allMovies:[]});
    this.setState({msg:""});
    this.setState({title:""});
    this.setState({year:""});
  }
}


export default App;