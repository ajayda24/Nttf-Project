import React from "react";

export default function Home() {
  return (
    <div className="p-5 py-8 flex flex-wrap gap-5 md:px-16">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const Card = () => {
  return (
    <div className="bg-white/10 w-60 h-60 relative">
      <div className="absolute bottom-0 p-5 min-w-full bg-white/5"></div>
    </div>
  );
};
