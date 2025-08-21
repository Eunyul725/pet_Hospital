import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Home = lazy(()=> import('./pages/Home'));
const About = lazy(()=> import('./pages/About'));
const Info = lazy(()=> import('./pages/Info'));
const Departments = lazy(()=> import('./pages/Departments'));
const Emergency = lazy(()=> import('./pages/Emergency'));

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* 로딩 바 */}
      <div className="relative w-52 h-8">
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 animate-loading"></div>
        </div>
      </div>

      {/* 텍스트 */}
      <p className="mt-8 text-emerald-600 font-medium">
        로딩 중입니다...
      </p>
      <p className="text-sm text-gray-500 mt-2">잠시만 기다려주세요 🐾</p>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/info' element={<Info /> } />
          <Route path='/departments' element={<Departments /> } />
          <Route path='/emergency' element={<Emergency /> } />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
