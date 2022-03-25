import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(){
    super()
    console.log("Hello I am News Constructor")
    this.state={
        articles:[],
        loading:false,
        page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/everything?q=apple&from=2022-03-24&to=2022-03-24&sortBy=popularity&apiKey=d25c7176f766428eb050cfb4a0a77ebc&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false})
  }

  handlePrevClick = async () =>{
      console.log("Previous")
      let url = `https://newsapi.org/v2/everything?q=apple&from=2022-03-24&to=2022-03-24&sortBy=popularity&apiKey=d25c7176f766428eb050cfb4a0a77ebc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })
  }

  handleNextClick = async () =>{
    console.log("Next")
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/everything?q=apple&from=2022-03-24&to=2022-03-24&sortBy=popularity&apiKey=d25c7176f766428eb050cfb4a0a77ebc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })

    }
    
  }

  render() {
    return (
        <div className="container my-3">
          <h1 className="text-center">NewsApp - Top Headlines</h1>
          {this.state.loading && <Spinner/>}       
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?element.title.slice(0,15):"MISSING Title"} description={element.description?element.description.slice(0,30):"Missing Description"} 
                      imageurl={element.urlToImage} newsUrl={element.url}/>                
                  </div>
              })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>       
        </div>
    )
  }
}

export default News;
