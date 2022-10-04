import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/register/" element={<RegisterForm />} />   
          <Route path="/login/" element={<LoginForm />} />                
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
