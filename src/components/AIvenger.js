import React from "react";

const AIvenger = () => {
    const titleStyle = {
        fontSize: "64px",
        color: "#ff5555",
        textAlign: "center",
        marginBottom: "20px",
    };

    const subtitleStyle = {
        fontSize: "32px",
        marginBottom: "10px",
    };

    const subtitleRocketStyle = {
        color: "#ff9800",
    };

    const subtitleCheckStyle = {
        color: "#4caf50",
    };

    const subtitleUploadStyle = {
        color: "#2196f3",
    };

    const subtitleAssistantStyle = {
        color: "#9c27b0",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px", // Add margin here
    };

    return (
        <div style={containerStyle}>
            <div>
                <h2 style={titleStyle}>
                    <strong>Welcome to AIvenger PaperManagement</strong>
                </h2>
                <h3 style={{ ...subtitleStyle, ...subtitleRocketStyle }}>
                    🚀 Personalized AI-Powered Recommendations
                </h3>

                <p>
                    Discover cutting-edge research effortlessly. Our AI analyzes
                    your preferences and interests to suggest the most relevant
                    academic papers in AI, including NLP, computer vision,
                    reinforcement learning, data science, and image
                    preprocessing. Stay ahead of the curve without the hassle of
                    manual searching.
                </p>

                <h3 style={{ ...subtitleStyle, ...subtitleCheckStyle }}>
                    📰 Stay Up-to-Date with Latest Trends
                </h3>

                <p>
                    Never miss a breakthrough. Our search engine provides
                    instant access to the newest papers in your chosen fields of
                    interest. Stay informed about the latest developments and
                    stay competitive in your academic pursuits.
                </p>

                <h3 style={{ ...subtitleStyle, ...subtitleUploadStyle }}>
                    💬 Engage in Informed Discussions
                </h3>

                <p>
                    Dive deep into papers with confidence. Utilize our Chat
                    Paper feature to interact with an intelligent assistant bot.
                    It generates paper summaries and answers your questions,
                    ensuring you have a strong grasp of the material. Discuss
                    concepts, methodologies, and implications with ease.
                </p>

                <h3 style={{ ...subtitleStyle, ...subtitleAssistantStyle }}>
                    🧠 Effortless Knowledge Acquisition
                </h3>

                <p>
                    Consume complex research with simplicity. Our app translates
                    intricate academic language into comprehensible insights.
                    Whether you're a seasoned researcher or just starting, our
                    user-friendly summaries help you grasp the core concepts of
                    any paper.
                </p>

                <h3 className="subtitle subtitle-power">
                    🤝 Community and Collaboration
                </h3>

                <p>
                    Connect with fellow enthusiasts. Join a thriving community
                    of researchers, students, and professionals. Discuss papers,
                    share insights, and collaborate on projects. AIvenger
                    PaperManagement fosters an environment where knowledge is
                    shared and collaborations are born.
                </p>
            </div>
        </div>
    );
};

export default AIvenger;
