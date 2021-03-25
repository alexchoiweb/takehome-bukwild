import './App.css';
import React, { useState, useEffect, useRef } from 'react';

import Layout from './Components/Layout';

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState("Industries");
  const [pageContent, setPageContent] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);

  const loaded = useRef(false);

  const url = './content.json';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        loaded.current = true;
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if (loaded.current) {
      setCurrentPage(currentPage);
      setPageTitle(data.pages.filter(page => page.title === currentPage)[0].title);
      setPageContent(data.pages.filter(page => page.title === currentPage)[0].blocks[0]);
    }
  }, [currentPage, data])

  return (
    <div className="App" style={{
      backgroundImage: pageContent ? `url("/images/${pageContent.background}")` : 'black'
    }} >
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage} />
      { pageContent &&
        <div className="page-div">
          <div className="page-header">
            <h1 className="page-title">{pageTitle}</h1>
            <p className="page-subheader">{pageContent.subhead}</p>
          </div>
          <div className="page-cta">
            <h3>{pageContent.cta}</h3>
            <div className="page-cta-button">
              <span>Let's talk.</span>
              <button>&nbsp;&nbsp;→</button>
            </div>
          </div>
        </div>
      }
    </ div>
  );
}

export default App;
