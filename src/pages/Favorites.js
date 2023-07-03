import { useContext } from "react";
import FavoritesContext from "../store/Favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteContext = useContext(FavoritesContext);
  let content;
  if (favoriteContext.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favoriteContext.favorites} />
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
