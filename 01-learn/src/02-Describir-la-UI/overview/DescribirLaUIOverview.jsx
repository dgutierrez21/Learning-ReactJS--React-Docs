import { Gallery } from "./gallery/Gallery";
import { Profile } from "./profile/Profile";
import { TodoList } from "./todoList/TodoList";

export const DescribirLaUIOverview = () => {
  return (
    <>
      <Gallery />
      <TodoList />
      <div className="separator"></div>
      <Profile/>
    </>
  );
};
