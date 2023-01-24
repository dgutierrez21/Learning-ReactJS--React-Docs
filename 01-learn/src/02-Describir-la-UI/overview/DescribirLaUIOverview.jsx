import { Gallery } from "./gallery/Gallery";
import { List } from "./list/List";
import { PackingList } from "./packingList/PackingList";
import { Profile } from "./profile/Profile";
import { TodoList } from "./todoList/TodoList";

export const DescribirLaUIOverview = () => {
  return (
    <>
      <Gallery />
      <TodoList />
      <div className="separator"></div>
      <Profile />
      <div className="separator"></div>
      <PackingList />
      <div className="separator"></div>
      <List/>
    </>
  );
};
