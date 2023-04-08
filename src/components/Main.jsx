import React, {useState, useEffect} from "react";
import Select from "./Select";

function Main() {
  const [word, setWord] = useState();
  const [all, setAll] = useState([]);
  const [main, setMain] = useState([]);

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setAll(dataJ);
    setMain(dataJ[0]);
  };
  
  useEffect(() => {
    dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };
  return (
    <div className="px-4">
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            value={word}
  onChange={(e) => setWord(e.target.value)}
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={Search}
          >
            Search
          </button>
        </div>
      </form>
      {word === "" ? (
  <Select all={all} main={main} />
) : (
  <div className="fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white bg-dark extra">
    type a word in the box
  </div>
)}
    </div>
  );
}

export default Main;
