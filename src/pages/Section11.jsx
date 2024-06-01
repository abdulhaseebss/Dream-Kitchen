import Button from "../components/Button";

export default function Section11() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between">
      <h1 className="text-primary text-5xl font-bold max-sm:text-3xl max-md:text-4xl text-[#54a96a]">
        Why are you remodelling your kitchen?
      </h1>

      <div className="mt-6 flex-1">
        <h2 className="font-semibold text-3xl max-sm:text-lg max-md:text-xl mt-4">
          Remodelling reasons:
        </h2>

        <div className="mt-8 text-3xl flex flex-col gap-4 max-w-max max-sm:text-lg max-md:text-xl">
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">Kitchen is old &amp; needs replacement</label>
          </div>
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">We want a different style</label>
          </div>
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">Other please explain</label>
          </div>
        </div>
      </div>

      <Button backLink="/sec10" nextLink="/sec12" />
    </main>
  )
}