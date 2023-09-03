// import Avatar from "./components/Avatar";
// import ProfileCard from "./components/ProfileCard";
// import Item from "./components/Item";
import PeopleList from "./components/PeopleList";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function App() {
  return (
    <section>
      {/* <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul> */}
      <PeopleList peoples={people} />
    </section>
  );
}

export default App;
