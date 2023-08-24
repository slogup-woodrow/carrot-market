import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 xl:place-content-center py-20 px-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white flex flex-col justify-between sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-500 xl:bg-yellow-400 2xl:bg-pink-200 p-5 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between mb-2 odd:bg-blue-50 even:bg-yellow-500"
            >
              <span className="text-gray-500">Tooly Table</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        {["a", "b", "c", "d"].map((c, i) => (
          <li className="bg-red-500 py-50 empty:hidden list-none" key={i}>
            {c}
          </li>
        ))}
        {/* <div className="flex justify-between mb-2">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$19</span>
        </div> */}
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2">
            CheckOut
          </button>
        </div>
      </div>
      <div className="bg-white xl:pb-60 rounded-3xl shadow-xl overflow-hidden group">
        <div className=" landscape:bg-teal-500 portrait:bg-indigo-400 p-6 pb-20">
          <span className="text-white text-2xl">profile</span>
          {/* <span>maybe cart imoticon</span> */}
        </div>
        <div className="rounded-2xl p-6 bg-white relative -top-14">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-gray-500 transition-colors"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span>$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-300">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-500 h-72 mb-5"></div>
        <div className="flex flex-col">
          <span className="font-medium text-xl">swoon lounge</span>
          <span className="text-xs text-gray-500">chair</span>
          <div className="mt-3 mb-5 flex justify-between">
            <div className="flex items-center space-x-3">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-11 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-11 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 py-2 px-5 text-center rounded-lg text-xs text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
