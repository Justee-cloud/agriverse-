const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotIcon.onclick = () => {
  chatbotBox.style.display = chatbotBox.style.display === "flex" ? "none" : "flex";
};

function chatbotReply(input) {
  input = input.toLowerCase();
  if (input.includes("soil")) return "Loamy soil is best for most crops.";
  if (input.includes("maize")) return "Maize grows well in well-drained loamy soil.";
  if (input.includes("poultry")) return "Provide clean housing and feed for poultry.";
  if (input.includes("goat")) return "Goats need grass and grains with clean water.";
  if (input.includes("fertilizer")) return "Use NPK fertilizer for balanced nutrients.";
  return "I'm still learning about that topic, but I'll update soon!";
}

chatbotInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && chatbotInput.value.trim() !== "") {
    const userText = chatbotInput.value.trim();
    chatbotMessages.innerHTML += `<div><b>You:</b> ${userText}</div>`;
    const botResponse = chatbotReply(userText);
    setTimeout(() => {
      chatbotMessages.innerHTML += `<div><b>AgriVerse Bot:</b> ${botResponse}</div>`;
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 500);
    chatbotInput.value = "";
  }
});
