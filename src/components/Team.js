import React from "react";
import "./Team.css"; // You can create this CSS file to style your page

const teamMembers = [
    {
        name: "Nguyen Toan",
    },
    {
        name: "Anh Dao",
    },
    {
        name: "Huynh Quynh Anh",
    },
    {
        name: "Ngo The Dung",
    },
    // Add more team members here
];

const Team = () => {
    return (
        <div className="team-container">
            <h1>Meet Our Team</h1>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        {/* <img src={member.imageUrl} alt={member.name} /> */}
                        <h2>{member.name}</h2>
                        {/* <p>{member.role}</p> */}
                        {/* <p>{member.bio}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
