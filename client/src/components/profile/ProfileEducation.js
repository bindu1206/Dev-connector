import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ProfileEducation = ({ profile: {
    education
} }) => {
  return (
    <div>
      <h2 class="text-primary">Education</h2>
      {education.length > 0 ? (
        <>
          {" "}
          {education.map((edu) => (
            <>
              <div key={edu._id}>
                <h3 class="text-dark">{edu.school}</h3>
                <p>
                  {dayjs(edu.from).format("MMM  YYYY")} -{" "}
                  {edu.to === null
                    ? "Current"
                    : dayjs(edu.to).format(" MMM  YYYY")}
                </p>
                <p>
                  <strong>Degree: </strong>{edu.degree}
                </p>
                { edu.fieldofStudy &&  <p>
                  <strong>Field Of Study: </strong>
                  {edu.fieldofStudy}
                </p>}
                
                <p>
                  <strong>Description: </strong>
                  {edu.description}
                </p>
              </div>
            </>
          ))}{" "}
        </>
      ) : (
        <h4>No education credentials</h4>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
