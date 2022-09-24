import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home page here</div>} />
      <Route
        path="conversations"
        element={
          <div>
            <div>Conversations</div>
            <Outlet />
          </div>
        }
      >
        <Route path=":/id" element={<div>Conversation ID page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
