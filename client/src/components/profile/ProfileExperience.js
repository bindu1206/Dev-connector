import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <>
      <h2 class="text-primary">Experience</h2>
      {experience.length > 0 ? (
        <>
          {" "}
          {experience.map((exp) => (
            <>
              <div key={exp._id}>
                <h3 class="text-dark">{exp.company} at {exp.location && <span>{exp.location}</span>}</h3>
                <p>{dayjs(exp.from).format("MMM  YYYY")} - {exp.to === null ? "Current" : dayjs(exp.to).format(" MMM  YYYY")}</p>
                <p>
                  <strong>Position: </strong>{exp.title}
                </p>
                <p>
                  <strong>Description: </strong>{exp.description}
                </p>
              </div>
            </>
          ))}{" "}
        </>
      ) : (
        <h4>No experience credentials</h4>
      )}
    </>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.func.isRequired,
};

export default ProfileExperience;
