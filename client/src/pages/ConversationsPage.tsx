import { Outlet, useParams } from "react-router-dom";
import ConversationPanel from "../components/conversations/ConversationPanel";
import ConversationSidebar from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";
import mockConversations from "../__mocks__/conversations";

const ConversationsPage = () => {
  const { id } = useParams();
  return (
    <Page>
      <ConversationSidebar conversations={mockConversations} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};

export default ConversationsPage;
