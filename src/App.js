// import components
import Nav from "./components/Nav.js"

// import sections
import CatList from "./sections/CatList.js"
import FavoriteList from "./sections/FavoriteList.js"

// import react router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={ <CatList /> } />
          <Route path="/favorites" element={ <FavoriteList /> }/>
          <Route path="*" element={ <NoPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NoPage() {
  return (
    <div style={{
      marginTop: "128px",
      textAlign: "center",
    }}>
      <h1>Ошибка 404</h1>
    </div>
  )
}

export default App;
