import Avatar from "./Avatar";
import Card from "./Card";

function ProfileCard({ firstName, lastName, username }) {
  return (
    <Card>
      <div className="flex justify-center">
        <Avatar size="md" username={firstName + " " + lastName} />
      </div>
      <h2>{firstName + " " + lastName}</h2>
    </Card>
  );
}

export default ProfileCard;
