import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
        <div>
          <div className="card">
                 <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}>{source}</span>
                <img src={!imageUrl?'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/329900/329922.6.jpg':imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {date}</small></p>
                    <a href={newsUrl}  rel='noreferrer'  target='_blank' className="btn btn-sm btn-dark">Read more</a>
                </div>
          </div>
        </div>
    )
  }
}

export default Newsitem