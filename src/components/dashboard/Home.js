import Card from "./utils/Card";

export default function Home() {
  return (
    <div className="p-2 sm:p-5 py-8 text-white">
      <h2>Trending</h2>
      <div className="p-5 flex justify-evenly flex-wrap gap-5 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h2>Recently Added</h2>
      <div className="p-5 py-8 flex justify-evenly flex-wrap gap-5 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
