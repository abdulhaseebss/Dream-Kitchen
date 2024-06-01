import Button from "../components/Button";

export default function Section6() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between">
      <h1 className="text-primary text-[#54a96a] text-5xl font-bold max-sm:text-3xl max-md:text-4xl">
        Tell us about your House?
      </h1>

      <div className="mt-6">
        <h2 className="font-semibold text-3xl mt-4">
          Type of architecture:
        </h2>
        <div className="mt-6 grid grid-cols-3 gap-8 [&_input]:border-2 [&_input]:border-primary [&_input]:appearance-none [&_input]:size-8 [&_input]:rounded-full checked:[&_input]:border-[10px] [&_input]:cursor-pointer [&_label]:text-lg max-sm:grid-cols-1">
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Ranch style house</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Cape cod</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Mediterranean Revival</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Townhome</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Colonial</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">American Craftsmen</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Farmhouse</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Tudor</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Single family home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Apartment</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Tiny home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Victorian house</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Cottage</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Mid-century modern</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Bungalow</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Mobile home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Contempory</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Greek Revival</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Multifamily home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Prairie School</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Split level home style</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">French country</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Georgian architecture</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex gap-4 items-center justify-between max-w-60">
            <label htmlFor="" className="font-medium">Cabin</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
        </div>
      </div>

      <Button backLink="/sec5" nextLink="/sec7" />
    </main>
  )
}