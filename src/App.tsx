import { Route, Routes } from 'react-router-dom'
import { Header } from './component/header/header';
import './App.css'
import { Favorite } from './component/about/favorite';
import { MainPage } from './component/main/main';

//Ключевой файл, где мы отрисовываем шапку и две страницы Главная и Понравившиеся, с помощью Route, мы можем переключать странцы 
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
