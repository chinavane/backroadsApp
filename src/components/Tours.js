import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="精选" subTitle="旅游线路" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
