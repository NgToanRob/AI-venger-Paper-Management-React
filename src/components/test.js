const axios = require("axios"); // If you're using Node.js
// or include Axios from a CDN if you're in a browser environment

const apiUrl = "http://127.0.0.1:8000/chatpaper/1706.03762.pdf"; // Update with your API URL

// Query to send to Django API
const query = "what is transformer";

// Make a POST request to Django API
axios
    .post(apiUrl, { query })
    .then((response) => {
        // Assuming the API returns a list of messages in the response data
        const messages = response.data;
        console.log(response);
        console.log(messages);
    })
    .catch((error) => {
        console.error("Error fetching messages:", error);
    });

// const response = fetch("/api/messages/", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify("What is transformer"), // Sending the query string
// });
// const data = await response.json();
// console.log(data);
