import dynamic from 'next/dynamic'
const NoSSR = dynamic(() => import('@/components/yahtzee-scorecard/yahtzee-scorecard'), { ssr: false })

export default function Yahtzee() {
  return (
    <div className="max-w-md p-4 m-4 ml-auto mr-auto overflow-x-auto shadow-md bg-beige rounded-2xl">
      <h1 role='heading' className="my-2 text-3xl font-bold text-center">Yahtzee</h1>
      <NoSSR />
    </div>
  );
}
