// import Avatar from "./components/Avatar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      {/* <Avatar size={200} username="ali" />
      <Avatar size={150} username="ali2" />
      <Avatar size={100} username="ali3" />
      <Avatar size={50} username="ali4" />
      <Avatar size={25} username="ali5" /> */}
      <ProfileCard lastName="nili" firstName="ali" />
    </div>
  );
}

export default App;
