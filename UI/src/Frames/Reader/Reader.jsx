import Close from "@mui/icons-material/Close";
import Left from "@mui/icons-material/ChevronLeft";
import Right from "@mui/icons-material/ChevronRight";
import { useState, useEffect, Swipeable } from "react";
import React from "react";

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
    // Here you should call your API to fetch text data
    // For demonstration, I'll use a fake API call
    fetchTextFromAPI().then((textData) => {
      // Determine the number of words per page based on viewport width
      const wordsPerPage = calculateWordsPerPage();
      // Distribute text among pages dynamically
      const pages = distributeTextToPages(textData, wordsPerPage);
      setTextPages(pages);
    });
  }, []);

  // Function to fetch text data from the API (fake implementation)
  async function fetchTextFromAPI() {
    // Replace this with your actual API call
    // For demonstration, returning fake text data
    const loremIpsum = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet,",
      "consectetur",
      "adipiscing",
      "elit.",
      "Sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua.",
      "Ut",
      "enim",
      "ad",
      "minim",
      "veniam,",
      "quis",
      "nostrud",
      "exercitation",
      "ullamco",
      "laboris",
      "nisi",
      "ut",
      "aliquip",
      "ex",
      "ea",
      "commodo",
      "consequat.",
      "Duis",
      "aute",
      "irure",
      "dolor",
      "in",
      "reprehenderit",
      "in",
      "voluptate",
      "velit",
      "esse",
      "cillum",
      "dolore",
      "eu",
      "fugiat",
      "nulla",
      "pariatur.",
      "Excepteur",
      "sint",
      "occaecat",
      "cupidatat",
      "non",
      "proident,",
      "sunt",
      "in",
      "culpa",
      "qui",
      "officia",
      "deserunt",
      "mollit",
      "anim",
      "id",
      "est",
      "laborum.",
      // Repeat Lorem Ipsum text for more length
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet,",
      "consectetur",
      "adipiscing",
      "elit.",
      "Sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua.",
      "Ut",
      "enim",
      "ad",
      "minim",
      "veniam,",
      "quis",
      "nostrud",
      "exercitation",
      "ullamco",
      "laboris",
      "nisi",
      "ut",
      "aliquip",
      "ex",
      "ea",
      "commodo",
      "consequat.",
      "Duis",
      "aute",
      "irure",
      "dolor",
      "in",
      "reprehenderit",
      "in",
      "voluptate",
      "velit",
      "esse",
      "cillum",
      "dolore",
      "eu",
      "fugiat",
      "nulla",
      "pariatur.",
      "Excepteur",
      "sint",
      "occaecat",
      "cupidatat",
      "non",
      "proident,",
      "sunt",
      "in",
      "culpa",
      "qui",
      "officia",
      "deserunt",
      "mollit",
      "anim",
      "id",
      "est",
      "laborum.",
      // Repeat more Lorem Ipsum text for even more length
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet,",
      "consectetur",
      "adipiscing",
      "elit.",
      "Sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua.",
      "Ut",
      "enim",
      "ad",
      "minim",
      "veniam,",
      "quis",
      "nostrud",
      "exercitation",
      "ullamco",
      "laboris",
      "nisi",
      "ut",
      "aliquip",
      "ex",
      "ea",
      "commodo",
      "consequat.",
      "Duis",
      "aute",
      "irure",
      "dolor",
      "in",
      "reprehenderit",
      "in",
      "voluptate",
      "velit",
      "esse",
      "cillum",
      "dolore",
      "eu",
      "fugiat",
      "nulla",
      "pariatur.",
      "Excepteur",
      "sint",
      "occaecat",
      "cupidatat",
      "non",
      "proident,",
      "sunt",
      "in",
      "culpa",
      "qui",
      "officia",
      "deserunt",
      "mollit",
      "anim",
      "id",
      "est",
      "laborum.",
    ];

    return loremIpsum;
  }

  // Function to calculate the number of words per page based on viewport width
  function calculateWordsPerPage() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // Adjust these values based on your design and preferences
    const wordsPer100vw = 20; // Adjust this value as needed
    const wordsPer100vh = 30; // Adjust this value as needed

    // Calculate words per page based on viewport width and height
    const wordsPerPageWidth = Math.floor((wordsPer100vw * viewportWidth) / 100);
    const wordsPerPageHeight = Math.floor(
      (wordsPer100vh * viewportHeight) / 100
    );

    // Return the minimum of wordsPerPageWidth and wordsPerPageHeight
    return Math.max(wordsPerPageWidth, wordsPerPageHeight);
  }

  function Word({ word }) {
    return (
      <>
        <span>{word}</span>
      </>
    );
  }
  // Function to distribute text among pages dynamically
  function distributeTextToPages(textData, wordsPerPage) {
    const pages = [];
    let currentPage = [];
    let wordsCount = 0;
    // Iterate through each word in the textData
    textData.forEach((word) => {
      // If adding this word exceeds wordsPerPage, push the current page to pages and reset currentPage
      if (wordsCount + word.length > wordsPerPage) {
        pages.push(
          currentPage.map((word, index) => (
            <Word key={index} word={word}></Word>
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
        currentPage.map((word, index) => <Word key={index} word={word}></Word>)
      );
    }

    return pages;
  }

  return (
    <>
      <div>
        <ReaderActionBar name={document.name} close={close} />
        <div className="my-20 mx-4">
          <div className="flex flex-wrap gap-x-2">{textPages[currentPage]}</div>
        </div>
      </div>
    </>
  );
}
export default Reader;
