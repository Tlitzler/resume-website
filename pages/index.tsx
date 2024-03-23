// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import React, { useState, useRef, useEffect } from 'react';
import PageWrapper from '../app/Molecules/PageWrapper';
import Sidebar from '../app/Atoms/Sidebar';
import Button from '../app/Atoms/Button';
import Home from '../app/Templates/home';
import About from '../app/Templates/about';
import Projects from '../app/Templates/projects';
import Contact from '../app/Templates/contact';
import { ThemeProvider } from '@emotion/react';
import theme from '../app/Theme/theme';

const Page = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [page, setPage] = useState(0);

  useEffect(() => {
    switch (page) {
      case 0:
        if (homeRef.current === null) return;
        homeRef.current.scrollIntoView();
        break;
      case 1:
        if (aboutRef.current === null) return;
        aboutRef.current.scrollIntoView();
        break;
      case 2:
        if (projectsRef.current === null) return;
        projectsRef.current.scrollIntoView();
        break;
      case 3:
        if (contactRef.current === null) return;
        contactRef.current.scrollIntoView();
        break;
    }
  }
  , [page]);

  const sidebarContent = (
    <Sidebar 
      options={['Home', 'About', 'Projects', 'Contact']} 
      selectedOption={page}
      selectOption={setPage}/>
  );

  const handleScroll = (event: Event) => {  
    const scroll = (event as any as React.UIEvent<HTMLDivElement>).currentTarget.scrollTop;
    console.log('CUSTOM LOG scroll', scroll);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper 
        sidebarContent={sidebarContent}
        onScroll={handleScroll}>
        <div ref={homeRef}>
          <Home/>
        </div>
        <div ref={aboutRef}>
          <About/>
        </div>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        <div ref={contactRef}>
          <Contact/>
        </div>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Page;
