document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Function to append messages to the chat box
    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.innerHTML = `<span class="${sender}-message">${message}</span>`;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    }

    // Handle send button click
    sendBtn.addEventListener("click", function () {
        const message = userInput.value.trim();
        if (message) {
            appendMessage("user", `You: ${message}`);
            userInput.value = ""; // Clear the input field

            // Send message to the server
            fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            })
                .then((response) => response.json())
                .then((data) => {
                    appendMessage("pro", data.response);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    });
});
