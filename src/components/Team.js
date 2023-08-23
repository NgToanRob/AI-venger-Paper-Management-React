import React from "react";
import "./Team.css"; // You can create this CSS file to style your page

const teamMembers = [
    {
        name: "Johnx Doe",
        role: "Frontend Developer",
        bio: "Passionate about creating user-friendly and visually appealing web interfaces. Loves experimenting with new technologies.",
        imageUrl: "john-doe.jpg", // Replace with the actual image URL
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        bio: "Bringing designs to life with a keen eye for detail and aesthetics. Enjoys finding creative solutions to design challenges.",
        imageUrl: "jane-smith.jpg", // Replace with the actual image URL
    },
    {
        name: "John Doe",
        role: "Frontend Developer",
        bio: "Passionate about creating user-friendly and visually appealing web interfaces. Loves experimenting with new technologies.",
        imageUrl: "john-doe.jpg", // Replace with the actual image URL
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        bio: "Bringing designs to life with a keen eye for detail and aesthetics. Enjoys finding creative solutions to design challenges.",
        imageUrl: "jane-smith.jpg", // Replace with the actual image URL
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
                        <img src={member.imageUrl} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
