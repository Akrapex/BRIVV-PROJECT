import ChatPanel from "../components/messages/ChatPanel";
import MessageList from "../components/messages/MessageList";
import PropertySidebar from "../components/messages/PropertySidebar";


const Messages = () => {
  return (
    <section className="   bg-[#F7F8F6]">
      
        <div className=" wrapper flex justify-center items-center gap-4">
          <MessageList />

          <ChatPanel />

          <PropertySidebar />
        </div>
      
    </section>
  );
}

export default Messages
