import Button from "../components/Button";

export default function Section20() {
  return (
    <div className="bg-primary bg-[#54a96a]">
    <main className="min-h-screen max-w-screen-xl  mx-auto px-4 py-8 flex flex-col gap-4 justify-between bg-section20">
      <h1 className="text-white text-5xl font-bold max-sm:text-3xl max-md:text-4xl">
        How may we reach you to see if our company is a good match for your project?
      </h1>

      <div className=" mt-6 flex-1 bg-black max-w-screen-lg w-full mx-auto grid grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">First name:</label>
          <input type="text" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">Last name:</label>
          <input type="text" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">Your email address:</label>
          <input type="email" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">Your project street address:</label>
          <input type="text" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">City:</label>
          <input type="text" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">State:</label>
          <input type="text" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">Zip code:</label>
          <input type="text" name="" id="" className="bg-white px-4 py-2" />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="" className="text-white text-lg font-semibold">Your renegade remodelers email address (if working with one)</label>
          <input type="email" name="" id="" className="bg-white px-4 py-2" />
        </div>
      </div>

      <Button backLink="/sec19" nextLink="/sec21" />
    </main>
    </div>
  )
}