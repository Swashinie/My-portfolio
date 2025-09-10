// Typed.js animation
var typed = new Typed(".text", {
  strings: ["a Student", "a Developer", "an AI Enthusiast"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// Toggle chatbot open/close
function toggleChat() {
  const body = document.getElementById("chatbot-body");
  body.style.display = body.style.display === "flex" ? "none" : "flex";
}

// Chatbot logic
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatbot-messages");
  const message = input.value.trim();
  if (!message) return;

  // Show user message
  chatBox.innerHTML += `<div class="user"><b>You:</b> ${message}</div>`;
  input.value = "";

  // Bot reply
  let reply = "Sorry, I only answer questions about Swashinie R.";
  if (message.toLowerCase().includes("skills")) {
    reply = "I know Java, Python, SQL, HTML, CSS, and basic Node.js/Tailwind.";
  } else if (message.toLowerCase().includes("projects")) {
    reply = "Projects: ATM System (Java), Calorie Counter App (Python), Microclimate Management System, AI-Drainage Monitoring System.";
  } else if (message.toLowerCase().includes("achievements")) {
    reply = "Finalist at SIH 2024, Vice President of English Club, Elite Rank in NPTEL Innovation by Design.";
  } else if (message.toLowerCase().includes("contact")) {
    reply = "📧 swashinier@gmail.com | 📞 8220830886";
  }

  // Show bot reply
  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot"><b>Bot:</b> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

// Send on Enter
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userInput").addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
  });
});
