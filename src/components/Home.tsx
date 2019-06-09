import React, { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageNames } from "./imageNames";
import "./Home.css";

const column1 = imageNames.slice(0,9).map(x=> x.src);
const column2 = imageNames.slice(10,19).map(x=> x.src);
const column3 = imageNames.slice(20,29).map(x=> x.src);
const column4 = imageNames.slice(30,40).map(x=> x.src);

const ImageColumn: FunctionComponent<{ src: string[]}> = props => {
  const result = props.src.map(x => {
    return <LazyLoadImage key={x} src={x} />;
  });
  return <div className="column">
      {result}
    </div>;
};

export const Home: FunctionComponent = () => {
  return (
    <div className="row">
        <ImageColumn src={column1} />
        <ImageColumn src={column2} />
        <ImageColumn src={column3} />
        <ImageColumn src={column4} />
    </div>
  );
};
