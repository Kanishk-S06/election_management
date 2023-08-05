import React from "react";
import "./EmailMarketing.css";

const EmailMarketing = () => {
  const data="https://www.linkedin.com/in/agrkushal- https://codeluent.netlify.app/mailto:agrawalskushal@gmail.com<Person Kushal Agrawal (He/Him)1st degree connection1stAboutI love problem-solving a lot. It gives me a kind of blood rush when I am successfully able to solve a problem that I have been pondering over for an hour, a day, a week, or sometimes even for months. The love of problem-solving has also made me fall in love with coding. Most of what I have learned is thanks to my itching curiosity.1. I loved games and then my mind kicked in and asked how are these made. This led to the development of Codeluent Studios. A small indie dev studio where I make games for fun. Working on my own games made me realize How to take a product from development to production?.2. Working with Fossip, is helping me become accustomed to how to work with teams and collaborate with others on a shared project and how a production deployed app has also to be reiterated several times and nothing is perfect and bugs will come that you have to find and squash."
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card tweet-card">
            <div className="card-body">
              <h5 className="card-title">Tweet Card 1</h5>
              I don't like the way party A work
              <a href="#" className="btn btn-primary">
                Analyze
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card tweet-card">
            <div className="card-body">
              <h5 className="card-title"></h5>
              I think Party A sucks
              <a href="#" className="btn btn-primary">
                Analyze
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Tweet Card Divs */}
      <div className="row">
        <div className="col-md-6">
          <div className="card tweet-card">
            <div className="card-body">
              <h5 className="card-title">Tweet Card 3</h5>
                https://instagram.com/agrkushal
                https://www.linkedin.com/in/agrkushal
                https://www.linkedin.com/in/agrkushal/overlay/contact-info/
                https://buymeacoff.ee/agrkushal
                https://dribbble.com/agrkushal
                https://www.fiverr.com/agrkushal
                https://auth.geeksforgeeks.org/user/agrkushal
                https://hackerrank.com/agrkushal
                https://hashnode.com/@agrkushal
                https://www.kaggle.com/agrkushal
                https://leetcode.com/agrkushal
                https://t.me/agrkushal
                https://trello.com/agrkushal
                https://www.freecodecamp.org/agrkushal
                https://www.npmjs.com/~agrkushal
                Total Websites Username Detected On : 15
            </div>
            <button>Analyze</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card tweet-card">
            <div className="card-body">
              <h5 className="card-title">Tweet Card 4</h5>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Div */}
      <div className="row">
        <div className="col-md-12">
          <div className="horizontal-box">
            <div className="horizontal-div">
              <div className="horizontal-content">
              Subject: Your Vote Matters: Support Party "A" - The Republican Party<br/>
              Dear Kushal Agrawal,<br />
              
              As someone who finds joy in coding and problem-solving, your passion for learning and unwavering curiosity speaks volumes about your dedication to excellence. Your experiences as a Full Stack Developer at Fossip and Founder of Codeluent Studios showcase your expertise and leadership in the tech world.<br/>
              Given your keen eye for detail and user-centric approach, I believe you'll find synergy with Party "A" - The Republican Party. Their commitment to promoting innovation, education, and job growth aligns with your values and aspirations.<br/>
              I encourage you to use your analytical skills to research the candidates' track records and policies. Your vote carries immense weight in shaping the future of our nation.<br/>
              Trust your instincts and let your voice be heard. Register to vote and cast your ballot for a brighter future with Party "A."<br/>
              Thank you for your time and consideration. If you have any questions or need more information, please don't hesitate to reach out.<br/>
              Best regards,<br/>
              [Your Name]<br/>
              [Your Contact Information]

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
