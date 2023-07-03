import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage() {
  const navigate = useNavigate();
  function addMetupHandler(meetupData) {
    fetch(
    'https://react-getting-started-79387-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      navigate('/', { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
