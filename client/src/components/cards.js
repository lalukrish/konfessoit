import React from "react";
import "./Cards.css";

const Cards = () => {
  const data = [
    {
      name: "coding",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "debugging",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "reels",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "web design",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "photo",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "reg",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "reg",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
    {
      name: "reg",
      id: 1,
      img: "https://thumbs.dreamstime.com/b/hacking-thief-concept-side-view-hacker-using-computer-digital-interface-sitting-desk-blurry-interior-d-123641233.jpg",
    },
  ];

  return (
    <div className="app-container">
      <div className="card-container">
        {data.map((item) => (
          <div className="card">
            <img src={item.img} alt="Product Image" />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">what is this.?</p>
              <a href="/form" className="btn btn-primary">
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
