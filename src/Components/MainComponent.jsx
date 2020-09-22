import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import MovieCollections from "./MovieCollections";
import NewCollections from "./NewCollections";
import "../styles/MainComponent.css";

const MainComponent = () => {
  return (
    <div className="MainComponent">
      <Header />
      <Carousel />
      <MovieCollections />
      <NewCollections />
    </div>
  );
};

export default MainComponent;
