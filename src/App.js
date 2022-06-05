import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "./RoutesPage";
import { Provider } from "react-redux";
import store from "./Store";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading ... </div>}>
          <RoutesPage />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
