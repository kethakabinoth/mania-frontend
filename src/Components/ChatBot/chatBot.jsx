export default function ChatBot() {
    return (
        <iframe
            src="https://www.chatbase.co/chatbot-iframe/lwnkllKtfBhjzg7gVyiGP"
            width="100%"
            style={{ height: "100%", minHeight: "700px" }} // ✅ Corrected
            frameBorder="0" // ✅ Use camelCase for "frameBorder"
        ></iframe>
    );
}
