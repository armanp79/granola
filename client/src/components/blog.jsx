import React from 'react';

import {images} from './images/images.jsx';

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import axios from 'axios';
import BlogCard from './blogCard.jsx';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogPosts : []
    };
  }


  componentDidMount() {
    axios.get('/api/blog')
      .then(response=>{
        this.setState({
          blogPosts: response.data
        })
      });
  }




  render() {
    if (this.state.blogPosts.length === 0) {
      return (
        <div className="wrapper">
          <div className="blog-container" style={{minHeight:'70vh', marginTop: '110px'}}>
            <div style={{textAlign:'center'}}>
              <h1>The Blog</h1>
            </div>
            Loading ...
          </div>
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="blog-container" style={{minHeight:'70vh', marginTop: '110px'}}>
          <div style={{textAlign:'center'}}>
            <h1>The Blog</h1>
          </div>
          <CardColumns>
            {this.state.blogPosts.map(item => <BlogCard post={item}/>)}
          </CardColumns>

        </div>
      </div>
    );
  }
}

export default Blog;