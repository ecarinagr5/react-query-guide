"use client";

const Card = ({ title, image }: { title: string, image:string }) => {
  return (
    <div className="bg-emerald-100 p-5">
      <h2>{title}</h2>
      <img src={"https://image.tmdb.org/t/p/w500"+image}></img>
    </div>
  );
};

export default Card;
