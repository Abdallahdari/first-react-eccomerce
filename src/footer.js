import { useState } from "react";

const messages = ["learn rat", "go back to somali", "give up from learnig"];

function Footer() {
  const [Steps, change] = useState(1);

  function Previus() {
    if (Steps > 1) {
      change(Steps - 1);
    }
  }

  function Next() {
    if (Steps < 3) {
      change(Steps + 1);
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-slate-300 py-3 px-6 w-[400px]">
          <div>
            <div className="text-xl mb-5 numbers flex items-center justify-between">
              <p
                className={`${
                  Steps >= 1
                    ? "bg-blue-700 w-10 flex items-center justify-center transition text-white rounded-full aspect-square"
                    : "bg-gray-300 w-10 flex items-center justify-center transition text-black rounded-full aspect-square"
                }`}
              >
                1
              </p>
              <p
                className={`${
                  Steps >= 2
                    ? "bg-blue-700 w-10 flex items-center justify-center transition text-white rounded-full aspect-square"
                    : "bg-gray-300 w-10 flex items-center justify-center transition text-black rounded-full aspect-square"
                }`}
              >
                2
              </p>
              <p
                className={`${
                  Steps >= 3
                    ? "bg-blue-700 w-10 flex items-center justify-center transition text-white rounded-full aspect-square"
                    : "bg-gray-300 w-10 flex items-center justify-center transition text-black rounded-full aspect-square"
                }`}
              >
                3
              </p>
            </div>
            <h2 className="text-center mb-5 font-semibold">
              {Steps}: {messages[Steps - 1]}
            </h2>
            <div className="flex items-center justify-between">
              <button
                onClick={Previus}
                className="px-3 py-1 rounded bg-slate-900 text-white"
              >
                Previous
              </button>
              <button
                onClick={Next}
                className="px-3 py-1 rounded bg-slate-900 text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
