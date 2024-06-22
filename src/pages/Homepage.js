import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <main className="dark:bg-gray-800 bg-gray-900 relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-white font-black text-3xl">
            NewsPresso
          </div>
        </div>
      </header>
      <div className="bg-gray-900 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-white dark:bg-gray-800 mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white">
              Stay
              <span className="text-5xl sm:text-7xl">Updated</span>
            </h1>
            <br />
            <p className="text-sm sm:text-base text-white dark:text-gray-300">
              Exploring the dynamic realm where change unfolds, offering insights into the infinite and interconnected landscape where natural phenomena and human stories converge.
            </p>
            <div className="flex mt-8">
              <Link
                to="/news"
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src="/logo.png"
              className="max-w-full md:max-w-xl m-auto mt-[-70px] md:mt-[-100px]"
              alt="NesPresso Logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
