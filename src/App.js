import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
    fName: "Victor",
    lName: "Ejiogu",
    email: 'vic@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {

  render() {
    
    const fetch = () => {
      this.props.fetchPosts();
    }
  
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: fetch
    };

    const { posts } = this.props;

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          <SharedButton {...configButton} />
          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem {...configListItem} key={index} />
                );
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps, { fetchPosts })(App);
