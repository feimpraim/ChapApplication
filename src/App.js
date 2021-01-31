import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="27e15d72-5c1f-42f8-bd27-81b06648540c"
      userName="admin"
      userSecret="password"
    />
  );
};

export default App;
