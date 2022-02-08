import React from "react";
import img from "../../myphoto.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <img
        style={{ width: "20%", height: "20%", borderRadius: "50%" }}
        src={img}
      />
    </div>
  );
};

export default ProfilePhoto;
