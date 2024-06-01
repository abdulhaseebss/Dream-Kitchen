import Button from "../components/Button"

export default function Section5() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between">
      <h1 className="text-primary text-5xl font-bold max-sm:text-3xl text-[#54a96a] max-md:text-4xl">
        Tell us about your House?
      </h1>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-16 justify-items-center max-md:grid-cols-1">
        <div className="flex gap-4 items-center max-sm:flex-col">
          <label htmlFor="" className="font-semibold text-3xl max-md:text-xl max-sm:text-lg">
            Project type:
          </label>
          
          <select name="" id="" className="p-2 bg-[#54a96a] text-white bg-primary text-3xl rounded-md max-md:text-xl max-sm:text-lg">
            <option value="">Kitchen Remodel</option>
          </select>
        </div>
        
        <div className="flex gap-4 items-center max-sm:flex-col">
          <label htmlFor="" className="font-semibold text-3xl max-md:text-xl max-sm:text-lg">
            Type of home:
          </label>
          
          <select name="" id="" className="p-2 text-white bg-[#54a96a] bg-primary text-3xl rounded-md max-md:text-xl max-sm:text-lg">
            <option value="">Single Family</option>
            <option value="">Duplex</option>
            <option value="">Townhome/Row home</option>
            <option value="">Condo</option>
            <option value="">Multifamily</option>
          </select>
        </div>

        <div className="flex gap-4 items-center max-sm:flex-col">
          <label htmlFor="" className="font-semibold text-3xl max-md:text-xl max-sm:text-lg">
            Year built:
          </label>
          
          <select name="" id="" className="p-2 bg-[#54a96a] text-white bg-primary text-3xl rounded-md max-md:text-xl max-sm:text-lg">
            <option value="1898">1898</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
      
      <Button backLink="/sec4" nextLink="/sec6" />
    </main>
  )
}