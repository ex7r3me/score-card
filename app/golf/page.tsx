import GolfScorecard from "@/components/golf-scorecard/golf-scorecard";

export default function Home() {
  return (
    <div className="bg-beige p-4 m-4 ml-auto mr-auto max-w-md rounded-2xl overflow-x-auto shadow-md">
      <h1 role='heading' className="text-3xl font-bold my-2 text-center">Golf</h1>
      <GolfScorecard />
    </div>
  );
}
