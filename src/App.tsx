import { Route, Routes } from 'react-router-dom'
import { Header } from './component/header/header';
import './App.css'
import { Favorite } from './component/about/favorite';
import { MainPage } from './component/main/main';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </div>
  )


}

export default App;
