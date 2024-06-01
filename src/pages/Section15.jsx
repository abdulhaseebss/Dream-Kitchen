import Button from "../components/Button";

export default function Section15() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between">
      <h1 className="text-primary text-5xl font-bold max-sm:text-3xl max-md:text-4xl text-[#54a96a]">
        Have you thought about how you are paying for this Kitchen Remodel?
      </h1>

      <div className="mt-6 flex-1">
        <h2 className="font-semibold text-3xl max-sm:text-lg max-md:text-xl mt-4">
          Payment:
        </h2>

        <div className="mt-8 text-3xl flex flex-col gap-4 max-w-max max-sm:text-lg max-md:text-xl">
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">I have money saved (cash/check)</label>
          </div>
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">I have some cash / & will put some on a credit card</label>
          </div>
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">I have my own financing / am financing through a bank/credit union</label>
          </div>
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">I would you to help get the project financed</label>
          </div>
          <div className="border-4 border-black rounded-md p-4 flex gap-4 max-sm:border-2">
            <input type="radio" name="kitchenmodel" id="" className="accent-black cursor-pointer" />
            <label htmlFor="" className="">Other - please explain</label>
          </div>
        </div>
      </div>

      <Button backLink="/sec14" nextLink="/sec16" />
    </main>
  )
}