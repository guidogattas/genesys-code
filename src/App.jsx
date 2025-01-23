import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';


import Footer from './components/common/Footer/Footer.jsx';
import Header from './components/common/Header/Header.jsx';
import Solutions from './components/Solutions/Solutions.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import WhoWeAre from './components/WhoWeAre/WhoWeAre.jsx';
import Careers from './components/Careers/Careers.jsx';
import Error from './components/common/Error/Error.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';


function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
