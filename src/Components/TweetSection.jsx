import React from "react";

const TweetCards = () => {
  return (
    <div className="container box-card">
        <h1>Tweet Section</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card tweet-card">
            <div className="card-body">
              <h5 className="card-title">Tweet Card 1</h5>
              <p className="card-text">
              Landslides at Shristhal road pose threat to residents https://www.thegoan.net/goa-news/landslides-at-shristhal-road-pose-threat-to-residents/102289.html
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card tweet-card">
            <div className="card-body">
              <h5 className="card-title">Tweet Card 2</h5>
              <p className="card-text">
              he Anti-Narcotics Cell (ANC) of the Mumbai Police confiscated drugs valued at Rs 43 lakh, including MD (Methylene Dioxy) and apprehended seven individuals. The operation spanned from Wednesday to Saturday and encompassed Kandivali, Sakinaka, and Mazgaon regions."
              </p>        
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCards;

