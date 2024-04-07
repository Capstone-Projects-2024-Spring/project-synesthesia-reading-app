import Close from "@mui/icons-material/Close";
import Left from "@mui/icons-material/ChevronLeft";
import Right from "@mui/icons-material/ChevronRight";
import { useState, useEffect, Swipeable } from "react";
import React from "react";
import { generate } from "random-words";

function Reader({ document = { name: "Unnown title" }, close }) {
  const [textPages, setTextPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle page navigation
  const goToNextPage = () => {
    if (currentPage < textPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  function ReaderActionBar({ name, close }) {
    return (
      <div
        id="actionBar"
        className="fixed top-0 left-0 bg-purple-900 w-screen h-16 flex justify-between"
      >
        <div className="m-3 text-blue-100 text-xl font-bold tracking-wide">
          {name}
        </div>

        <div className="relative">
          <Left
            sx={{ color: "white", fontSize: 50 }}
            style={{ position: "absolute", top: 4, right: 180 }}
            onClick={goToPreviousPage}
          />
          <Right
            sx={{ color: "white", fontSize: 50 }}
            style={{ position: "absolute", top: 4, right: 100 }}
            onClick={goToNextPage}
          />
          <Close
            sx={{ color: "white", fontSize: 50 }}
            style={{ position: "absolute", top: 4, right: 20 }}
            onClick={close}
          />
        </div>
      </div>
    );
  }
  // Fetch text data from the API
  useEffect(() => {
    //
    fetchTextFromAPI().then((pageObj) => {
      // Determine the number of words per page based on viewport width
      const wordsPerPage = calculateWordsPerPage();
      // Distribute text among pages dynamically
      const pages = distributeTextToPages(pageObj, wordsPerPage);
      setTextPages(pages);
    });
  }, []);

  // Function to fetch text data from the API (fake implementation)
  async function fetchTextFromAPI() {
    // Replace this with your actual API call
    // For demonstration, returning fake text data
    function generateRandomWordsList(numWords) {
      // Generate random list of words
      const randomWords = [];
      for (let i = 0; i < numWords; i++) {
        randomWords.push(generate());
      }

      // Generate map of words to random RGB values
      const wordRGBMap = {};
      randomWords.forEach((word) => {
        const red = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const green = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const blue = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const rgbValue = `rgb(${red}, ${green}, ${blue})`;
        wordRGBMap[word] = rgbValue;
      });

      // Return object containing list of words and map of words to RGB values
      return {
        words: randomWords,
        wordRGBMap: wordRGBMap,
      };
    }
    return generateRandomWordsList(2000);
  }

  // Function to calculate the number of words per page based on viewport width
  function calculateWordsPerPage() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // Adjust these values based on your design and preferences
    const wordsPer100vw = 80; // Adjust this value as needed
    const wordsPer100vh = 120; // Adjust this value as needed

    // Calculate words per page based on viewport width and height
    const wordsPerPageWidth = Math.floor((wordsPer100vw * viewportWidth) / 100);
    const wordsPerPageHeight = Math.floor(
      (wordsPer100vh * viewportHeight) / 100
    );

    // Return the minimum of wordsPerPageWidth and wordsPerPageHeight
    return Math.max(wordsPerPageWidth, wordsPerPageHeight);
  }

  function Word({ word, RGB }) {
    return (
      <>
        <span style={{color: RGB}}>{word}</span>
      </>
    );
  }
  // Function to distribute text among pages dynamically
  function distributeTextToPages(pageObj, wordsPerPage) {
    var textData = pageObj.words;
    var wordRGBMap = pageObj.wordRGBMap;
    const pages = [];
    let currentPage = [];
    let wordsCount = 0;
    // Iterate through each word in the textData
    textData.forEach((word) => {
      // If adding this word exceeds wordsPerPage, push the current page to pages and reset currentPage
      if (wordsCount + word.length > wordsPerPage) {
        pages.push(
          currentPage.map((word, index) => (
            <Word key={index} word={word} RGB={wordRGBMap[word]}></Word>
          ))
        );
        currentPage = [];
        wordsCount = 0;
      }

      // Add the current word to currentPage
      currentPage.push(word);
      wordsCount += word.length;
    });

    // Push the remaining words to the last page
    if (currentPage.length > 0) {
      pages.push(
        currentPage.map((word, index) => (
          <Word key={index} word={word} RGB={wordRGBMap[word]}></Word>
        ))
      );
    }

    return pages;
  }

  return (
    <>
      <div>
        <ReaderActionBar name={document.name} close={close} />
        <div className="my-20 mx-4">
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {textPages[currentPage]}
          </div>
        </div>
      </div>
    </>
  );
}
export default Reader;
