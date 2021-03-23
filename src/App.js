import './App.css';
import React, { useState, useEffect } from 'react';

// import Page from './Components/Page';
import Layout from './Components/Layout';

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [pageContent, setPageContent] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);

  const url = './content.json';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setCurrentPage("Industries");
      })
      .catch(err => console.log(err))
  }, []);

  useEffect((data) => {
    updateContent(data);
  }, [currentPage]);

  const updateContent = () => {
    if (data) {
      setPageTitle(data.pages.filter(page => page.title === currentPage)[0].title);
      setPageContent(data.pages.filter(page => page.title === currentPage)[0].blocks[0])
    }
  }

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
