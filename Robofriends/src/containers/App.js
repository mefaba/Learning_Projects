import React from 'react';
import CardCollection from "../components/CardCollection"
import { robots } from '../robots';
import Searchbox from "../components/Searchbox";
/* import logo from './logo.svg'; */
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary"
/* const state = {
  robots: {robots},
  searchField: ""
} */


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({ robots: json.concat(robots)}))
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
    /* console.log(filteredRobots) */
  }

  render(){
    const filteredRobots = this.state.robots.filter((x)=>{
      return x.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="tc">
        <h1>Robot Arkadaşlarım</h1>
        <Searchbox searchChange = {this.onSearchChange} />
        <ErrorBoundary>
          <CardCollection robots = {filteredRobots}/>
        </ErrorBoundary>
      </div>
    );

  }
  
  
}
export default App;



/* function App() {
  return (
    <div className="tc">
      <h1>Annnüüüüüüüüüüüüüü</h1>
      <Searchbox />
      <CardCollection robots = {robots}/>
    </div>
  );
}
export default App; */



