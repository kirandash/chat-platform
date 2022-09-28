import { Routes, Route } from "react-router-dom";
import ConversationChannelPage from "./pages/ConversationChannelPage";
import ConversationsPage from "./pages/ConversationsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="conversations" element={<ConversationsPage />}>
        <Route path=":id" element={<ConversationChannelPage />} />
      </Route>
    </Routes>
  );
}

export default App;
