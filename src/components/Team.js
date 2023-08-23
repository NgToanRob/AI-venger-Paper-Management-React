import React from "react";
import "./Team.css"; // You can create this CSS file to style your page

const teamMembers = [
    {
        name: "Jason Nguyen",
        role: "Mentor",
        imageUrl: 'https://ca.slack-edge.com/T02AF0SCB-UG51TGJSZ-ad07da213ba2-192',
    },
    {
        name: "Nguyen Toan",
        role: "Leader",
        imageUrl: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/269981759_3146716872272307_5495191076109967947_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hjXNFQD_eqMAX-I5Huc&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCn05QIiv6A25l1skqNP511qBFpRSwu_XNCsxhkG9qZFg&oe=64E9E6DF",
    },
    {
        name: "Anh Dao",
        role: "Full Stack",
        imageUrl: 'https://static2-images.vnncdn.net/files/publish/2022/12/8/meo-1-1416.jpg',
    },
    {
        name: "Huynh Quynh Anh",
        role: "Full Stack",
        imageUrl: 'https://ca.slack-edge.com/T02AF0SCB-U05DP9E4J74-9641521aab2b-512',
    },
    {
        name: "Ngo The Dung",
        role: "DevOps",
        imageUrl: 'https://ca.slack-edge.com/T02AF0SCB-U05E1TWTL1F-78fb398c8052-512'
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
                        {/* <p>{member.bio}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
