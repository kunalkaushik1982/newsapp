import React, { Component } from "react";
import NewsItem from "./NewsItem";

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
    let url = "https://newsapi.org/v2/everything?q=apple&from=2022-03-24&to=2022-03-24&sortBy=popularity&apiKey=d25c7176f766428eb050cfb4a0a77ebc&page=1&pageSize=9"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
  }

  handlePrevClick = async () =>{
      console.log("Previous")
      let url = `https://newsapi.org/v2/everything?q=apple&from=2022-03-24&to=2022-03-24&sortBy=popularity&apiKey=d25c7176f766428eb050cfb4a0a77ebc&page=${this.state.page-1}&pageSize=9`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles})
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
      })
  }

  handleNextClick = async () =>{
    console.log("Next")
    if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){

    }
    else{
      let url = `https://newsapi.org/v2/everything?q=apple&from=2022-03-24&to=2022-03-24&sortBy=popularity&apiKey=d25c7176f766428eb050cfb4a0a77ebc&page=${this.state.page+1}&pageSize=9`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles})
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
      })
    }
  }

  render() {
    return (
        <div className="container my-3">
          <h2>NewsApp - Top Headlines</h2>          
          <div className="row">
          {
              this.state.articles.map((element)=>
              {
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?element.title.slice(0,15):"MISSING Title"} description={element.description?element.description.slice(0,30):"Missing Description"} 
                      imageurl={element.urlToImage} newsUrl={element.url}/>                
                  </div>
              })
          }
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>       
        </div>
    )
  }
}

export default News;
