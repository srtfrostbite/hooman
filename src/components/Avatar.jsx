const AVATAR_SIZE = {
  sm: 50,
  md: 100,
  lg: 150,
};

function getAvatarSize(size = "md") {
  const nSize = AVATAR_SIZE[size];
  if (!nSize) {
    return AVATAR_SIZE["md"];
  }
  return nSize;
}
function Avatar({ size, username }) {
  //   const { size, username } = props;
  return (
    <img
      className="rounded-full shadow-xl"
      width={getAvatarSize(size)}
      height={getAvatarSize(size)}
      alt={username}
      src="https://i.imgflip.com/7xsvgh.jpg"
    />
  );
}

export default Avatar;
