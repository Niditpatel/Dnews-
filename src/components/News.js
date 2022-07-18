import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 8
    }

    static propTypes = {
        country : PropTypes.string.isRequired ,
        pageSize : PropTypes.number.isRequired,
        category : PropTypes.string.isRequired
    }
    capitalizeFirstLetter = (str) =>{
    return str[0].toUpperCase() + str.slice(1);
    }
    
     articles = [];
    constructor(props){
        super(props);
        this.state = {
            articles :this.articles,
            loading : false,
            page: 1 
        }   
        document.title = ` Dnews - ${this.capitalizeFirstLetter(this.props.category)} `
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06a6243ef4af431cbdee78c02f195ead&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      fetch(url).then((res) => res.json())
              .then((json) => {
                  this.setState({
                      articles: json.articles,
                      totalResults : json.totalResults,
                      loding:false
                  })
              });
    }
     handlenextclick = async() =>{
      if(!(this.state.page + 1) >   Math.ceil(this.state.totalResults/this.props.pageSize)){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06a6243ef4af431cbdee78c02f195ead&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      fetch(url).then((res) => res.json())
              .then((json) => {
                  this.setState({
                      articles: json.articles,
                      totalResults : json.totalResults,
                      loding:false
                  })
              });
    }
  }
      handlepreviousclick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06a6243ef4af431cbdee78c02f195ead&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        fetch(url).then((res) => res.json())
                .then((json) => {
                    this.setState({
                        articles: json.articles,
                        totalResults : json.totalResults,
                        loding:false
                    })
                });
    }
 
  render() {
    return (
      <div className='container my-3'>
        <div className="container my-3">
            <h1 className='my-5 text-center'>Dnews - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
           {this.state.loading && <Spinner/>}

              <div className="row">
                { this.state.loading && this.state.articles.map((element)=>{
                  return  <div className="col-md-4 my-2" key={element.url}>
                  <Newsitem  title={element.title?element.title : ''}  source={element.source.name}  author={element.author} date={element.publishedAt} description={element.description?element.description :''} imageUrl={element.urlToImage} newsUrl={element.url}></Newsitem>
                  </div>
                })}
              </div>
              <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} onClick={this.handlepreviousclick} 
                className="btn btn-dark"> &larr; Previous</button>
                <button className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
              </div>
           </div>
      </div>
    )
  }
}

export default News