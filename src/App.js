import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/register/" element={<RegisterForm />} />                
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
