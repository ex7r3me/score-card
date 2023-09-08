export default function Home() {
  return (
    <div className="
      container 
      relative
      bg-light-green 
      rounded-2xl 
      text-center 
      m-4 
      p-4 
      w-4/5 
      sm:w-2/5
      before:content-[''] 
      before:block 
      before:absolute
      before:-top-2
      before:w-4
      before:h-4
      before:rotate-45
      before:bg-light-green
    ">
      <h1 role="heading" className="text-2xl font-bold">Welcome to Scorecard!</h1>
      <p className="my-2">Get started by selecting the scorecard you wish to use from the menu.</p>
    </div>
  );
}
