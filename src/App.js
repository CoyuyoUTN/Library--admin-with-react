import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import DetailBook from "./components/DetailBook";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/register/" element={<RegisterForm />} />   
          <Route path="/login/" element={<LoginForm />} />                
          <Route path="/DetailBook/:id" element={<DetailBook />} />   
          <Route path="/UpdateBook/" element={<UpdateBook />} />   
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
