import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Profile from './components/Profile';
import RepoList from './components/RepoList';
import {fetchUserData, fetchUserRepos} from './utils/api';

import './App.css';

class App extends Component {
  state = {
    search: "",
    username: "dechegaray",
    loading: false,
    user: null,
    repos: []
  }

  componentDidMount() {
    const { username } = this.state;

    this.getUserData(username);
    this.getUserRepos(username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  
  getUserData = (username) => {
    fetchUserData(username)
      .then(response => {
        this.setState({user: response.data});
      });
  }

  getUserRepos = async (username) => {
    try {
      const response = await fetchUserRepos(username);
      this.setState({repos: response.data});
    } catch (error) {
      this.setState({user: null});
      console.error(error);
    };
  }

  onSearchChange = (e) => {
    this.setState({ search: e.target.value });
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    const usernameSearched = this.state.search;

    if (!usernameSearched) {
      alert('No search criteria has been entered!');
    } 

    this.setState({username: usernameSearched, search: ''});

    this.getUserData(usernameSearched);
    this.getUserRepos(usernameSearched);
  }

  render () {
    const { user, repos, search } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search onSearchSubmit={this.onSearchSubmit} onSearchChange={this.onSearchChange} search={search} />
          <Profile user={user}/>
          <RepoList repos={repos} />
        </div>
      </div>
    );
  }
}

export default App;
