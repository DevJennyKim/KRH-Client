import './App.scss';
import { useState, useEffect } from 'react';
import postData from '/src/data/postData.json';
import InputForm from './components/InputForm/InputForm';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Following from './components/Following/Following';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Posts from './components/Posts/Posts.jsx';

function App() {
  const [posts, setPosts] = useState(postData);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main className="main">
                  <section className="input-form__section">
                    <InputForm
                      setTooltipVisible={setTooltipVisible}
                      posts={posts}
                      setPosts={setPosts}
                    />
                  </section>
                  <Posts posts={posts} />
                  {tooltipVisible && <div className="overlay" />}
                </main>
              </>
            }
          />
          <Route path="/forYou" element={<Navigate to="/" />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
