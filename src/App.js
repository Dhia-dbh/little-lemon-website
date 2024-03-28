import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/home";
import NewReservation from "./components/newReservation/newReservation";
import NotFound from "./components/commun/not-found/not-found";

import "./App.css";

function App() {
  const [isReserved, setIsReserved] = useState(false);
  const handleReserve = () => {
    setIsReserved(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home isReserved={isReserved} />} />
        <Route
          path="/reservation/new"
          element={<NewReservation onReserve={handleReserve} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
