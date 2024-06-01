import Button from "../components/Button";

export default function Section18() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between">
      <h1 className="text-primary text-5xl font-bold max-sm:text-3xl max-md:text-4xl text-[#54a96a]">
        What concerns do you have in regards to having your Kitchen Remodeled?
      </h1>

      <div className="mt-6 flex-1">
        <h2 className="font-semibold text-3xl max-sm:text-lg max-md:text-xl mt-4">
          Kitchen Concerns:
        </h2>

        <div className="mt-8 text-3xl flex flex-col gap-4 w-full max-sm:text-lg max-md:text-xl">
          <textarea name="" id="" rows={8} className="border-4 border-black rounded-md p-4 w-full max-sm:border-2" placeholder="Please type comments here" />
        </div>
      </div>

      <Button backLink="/sec17" nextLink="/sec19" />
    </main>
  )
}