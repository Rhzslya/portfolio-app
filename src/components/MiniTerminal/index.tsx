import { useState, useEffect } from "react";

export default function MiniTerminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const responses: Record<string, string> = {
    help: "Available commands: help, about, clear, other, secret",
    about: "Just a random soul wandering the internet :3",
    other: "Surprise me with your creativity! 😉",
  };

  // Secret Commands 🔥
  const secretCommands: Record<string, string | string[]> = {
    rizqi: "Ah, my first name! 😎",
    sabilla: "And that's my last name! 🔥",
    riska: "uWu :3",
    seira: "That's my favorite nickname!",
    miti: "It's mine... but do you really know why? 🤫",
    flugel: "A mystery even I can't explain...",
    sheeesh: "Sheeeeesh... 🗿",
    you: ["Yes?", "Who?", "Are you talking to me?", "Why me? 🤔"],
    me: ["Yes?", "Who?", "Are you talking to yourself?", "That's deep... 🤨"],
    hack: "🔓 ACCESS GRANTED... Just kidding! 😆",
    glitch: "ERROR 404: Reality not found... 👀",
    secret: "You've unlocked the unknown... but at what cost? 🕵️‍♂️",
    country: "🇮🇩 +62! INDOPRIDE! 🔥",
    address: "Guru Kojar Street... or is it? 👀",
    number: "Nice try, hacker. 😏",
    loveyou: [
      "Love you too! ❤️",
      "Sorry, I'm just a program. 😅",
      "Aww, thanks! 😊",
    ],
    destiny:
      "Your future is written in the stars... or is it just JavaScript? ✨",
    riddle: "What has keys but can't open locks? A keyboard! ⌨️",
    fate: "Some say fate is written, others say it's coded in TypeScript. 😆",
  };

  const handleCommand = () => {
    if (command === "clear") {
      setOutput("");
      setDisplayedOutput("");
      return setCommand("");
    }

    setDisplayedOutput("");
    setLoading(true);

    setTimeout(() => {
      let response = "";
      if (/^\d+(\s*[\+\-\*\/]\s*\d+)+$/.test(command)) {
        try {
          const result = new Function(`return ${command}`)();
          response =
            result === 12
              ? `Result: ${result} 🎉 Fun fact: I was born on the 12th!`
              : `Result: ${result}`;
        } catch {
          response = "Invalid expression.";
        }
      } else {
        const lowerCommand = command.toLowerCase();
        response =
          responses[lowerCommand] ||
          (secretCommands[lowerCommand] &&
            (Array.isArray(secretCommands[lowerCommand])
              ? getRandomResponse(secretCommands[lowerCommand])
              : secretCommands[lowerCommand])) ||
          `Command not found. Try "help".`;
      }

      startTypingEffect(response);

      setLoading(false);
    }, 500);

    setCommand("");
  };

  const startTypingEffect = (text: string) => {
    setOutput(text);
    setDisplayedOutput("");
    setTypingIndex(0);
  };

  useEffect(() => {
    if (typingIndex < output.length) {
      const timeout = setTimeout(() => {
        setDisplayedOutput((prev) => prev + output[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, output]);

  const getRandomResponse = (responses: string[]) =>
    responses[Math.floor(Math.random() * responses.length)];

  return (
    <section className="col-start-1 row-start-2">
      <div className="p-4 border h-full border-gray-600 bg-black text-green-400 font-mono rounded-md">
        <p>Type &quot;help&quot; for available commands.</p>
        <div className="flex justify-center items-center">
          <span className="text-amber-600">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            className="bg-transparent border-none outline-none text-white ml-2 w-full"
          />
        </div>
        {loading && <p className="text-yellow-500">Processing...</p>}
        {displayedOutput && <p>{displayedOutput}</p>}
      </div>
    </section>
  );
}
