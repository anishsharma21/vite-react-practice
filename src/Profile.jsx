import PropTypes from "prop-types";

export default function Profile({ user }) {
  return (
    <>
      <h2 className="profile-title">{user.name}</h2>
      <img className="profile-img" src={user.profilePicture} />
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
