import React, {Component} from 'react';
import './styles/ContentGrid.css'
import { Link } from "gatsby"

class ContentGrid extends Component {

  getThumbnailStyle = (color) => {
    return (
      {backgroundColor: color,}
    )
  }

  gridCell = (post) => {
    const {title, path, color, description, thumbnail} = post.node.frontmatter;
    return(
      <div key={title} className="grid-cell">
        <Link className="grid-link" to={path}>
          <div className="grid-thumbnail-container">
            <div className="grid-thumbnail" style={this.getThumbnailStyle(color)}>
              {(this.props.blog ?
                <img className="fluid" src={require("../../static" + thumbnail)} alt="thumbnail-img"/>
                :
                <img className="fitted" src={require("../../static" + thumbnail)} alt="thumbnail-img"/>
              )}
            </div>
          </div>
        </Link>
        <div className="grid-text">
          <h2> <Link to={path}> {title} </Link> </h2>
          <p> {description} </p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content-grid-container">
        {this.props.dataArray.map(post => this.gridCell(post))}
      </div>
    );
  }
}

export default ContentGrid;
