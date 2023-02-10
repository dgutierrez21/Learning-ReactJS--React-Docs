import { ChatRoomApp } from "./chatRoom/ChatRoomApp";
import { VideoPlayerApp } from "./videoPlayer/VideoPlayerApp";

export const SincronizacionConEfectos = () => {
  return (
    <>
      {/* <VideoPlayerApp /> */}
      <div className="separator"></div>
      <ChatRoomApp />
    </>
  );
};
