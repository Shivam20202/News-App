import React from 'react';
import PropTypes from 'prop-types';
import image from './news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4"> {/* Adjusting layout based on screen size */}
      <div className="card bg-dark text-light" style={{ height: "100%" }}> {/* Make card full height */}
        <img 
          src={src ? src : image} 
          className="card-img-top" 
          alt={title} 
          style={{ height: "200px", objectFit: "cover" }} // Ensure image fits well
        />
        <div className="card-body d-flex flex-column"> {/* Use flex for card body to ensure uniformity */}
          <h5 className="card-title" style={{ flexGrow: 1 }}>
            {title.length > 50 ? title.slice(0, 50) + '...' : title}
          </h5>
          <p className="card-text">
            {description ? (description.length > 90 ? description.slice(0, 90) + '...' : description) : "The description is not available for this news."}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItem;





































// import React from 'react';
// import image from'../assets/news.jpg'

// const NewsItem = ({title,description,src,url}) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
//   <img src={src?src:image} style={{height:"200px",width:"360px", height: "200px", objectFit: "cover", width: "100%"}} className="card-img-top" alt="title" />
//   <div className="card-body">
//     <h5 className="card-title">{title.slice(0,50)}</h5>
//     <p className="card-text">{description?description.slice(0,90):"The description is not available for this news."}</p>
//     <a href={url} className="btn btn-primary">Read More</a>
//   </div>
// </div>
//   )
// }

// export default NewsItem

