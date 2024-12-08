
const FilterSection = () => {
  return (
    <section className="container p-4 md:p-0">
      <div className="mt-20 flex justify-between  md:text-start text-center items-center lg:flex-row flex-col w-full">
        <div>
          <h1 className="text-2xl jon text-indigo-950 font-bold">
            Ecommerce Acceories & Fashion item
          </h1>
          <p className="text-sm text-gray-400 lato mt-2">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex lg:items-center gap-4 lg:flex-row flex-col mt-8 lg:mt-0">
          <div className="flex lg:items-center gap-x-1">
            <p className="lato text-indigo-900">Per Page:</p>
            <input
              type="text"
              className="w-14 h-6 outline-none border border-slate-300"
            />
          </div>
          <div className="flex items-center gap-x-1">
            <p className="lato text-indigo-900">Sort By:</p>
            <input
              type=""
              placeholder={`Best Match`}
              className="w-24 h-6 outline-none border border-slate-300 text-sm flex items-center pl-1"
            />
          </div>
          <div className="flex items-center gap-x-1">
            <p className="lato text-indigo-900">View:</p>
            <input
              type="text"
              className="w-28 h-6 outline-none border border-slate-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;