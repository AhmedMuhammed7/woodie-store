const ProfileWidget = ({ image, name }) => (
  <div className="d-flex align-items-center">
    <div
      className="profile-picture  rounded-circle me-3"
      style={{ width: "50px", height: "50px" }}
    >
      <img
        src={`http://localhost:4000/uploads/${image}`}
        alt="not found"
        className="rounded-circle w-100 h-100"
      />
    </div>

    <div>{name}</div>
  </div>
);

export default ProfileWidget;
