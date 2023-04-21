import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import RoadTrips from './pages/RoadTrips';
import PlanYourTrip from './pages/PlanYourTrip';
import CarReviews from './pages/CarReviews';
import {Route, Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/roadtrips" element= {<RoadTrips />} />
        <Route path="/pages/carreviews" element= {<CarReviews />} />
        <Route path="/pages/planyourtrip" element= {<PlanYourTrip />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
