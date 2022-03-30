import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
      country:"in",
      pageSize:6,
      category:"general"
    }
    static propTypes = {      
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category:PropTypes.string      
    }

  constructor(props){
    super(props)
    console.log("Hello I am News Constructor")
    this.state={
        articles:[],
        loading:true,
        page:1,
      totalResults:0
    }
    document.title=`${this.capatlizeFirstletter(this.props.category)} - NewsApp`
  }

  capatlizeFirstletter = (string)=> {
    return string.charAt(0).toUpperCase() +string.slice(1)
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    this.updateNews()
  }
  handlePrevClick = async () =>{
      console.log("Previous")
      this.setState({page:this.state.page-1})
      this.updateNews()
  }
  handleNextClick = async () =>{
    console.log("Next") 
    this.setState({page:this.state.page+1})
    this.updateNews()
  }

  fetchMoreData = async () => {
   this.setState({page:this.state.page+1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
   let data = await fetch(url)
   let parsedData = await data.json()
   console.log(parsedData)
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults
    })
  }
  render() {
    return (
        <>
          <h1 className="text-center" style={{margin: '35px 0px'}}>NewsApp - Top {this.capatlizeFirstletter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}       
          {/* http://ajaxloadingimages.net/ */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}>
            <div className="container">

            
          <div className="row">
          {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?element.title.slice(0,15):"MISSING Title"} description={element.description?element.description.slice(0,30):"Missing Description"} 
                      imageurl={element.urlToImage?element.urlToImage:"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/282100/282129.6.jpg"} newsUrl={element.url}
                      author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>                
                  </div>
              })}
          </div>
          </div>
          </InfiniteScroll>      
        </>
    )
  }
}

export default News;
