import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./domains/Login.js";
import Setting from "./domains/Setting.js";
import Curriculum from "./domains/Curriculum.js";
import CurriDetail from "./domains/CurriDetail.js";
import Main from "./Main.js";
import Commodity from "./domains/Commodity.js";
import NewCommodity from "./domains/NewCommodity.js";
import CalendarMain from "./domains/CalendarMain.js";
import CalendarUpdate from "./domains/CalendarUpdate.js";
import NewCalendar from "./domains/NewCalendar.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/curridetail" element={<CurriDetail />} />
          <Route path="/commodity" element={<Commodity />} />
          <Route path="/commodity/new" element={<NewCommodity />} />
          <Route path="/calendar" element={<CalendarMain />} />
          <Route path="/calendar/update" element={<CalendarUpdate />} />
          <Route path="/calendar/new" element={<NewCalendar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
