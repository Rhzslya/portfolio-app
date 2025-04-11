import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shellVariants } from "@/utils/FramerMotionStyle";

type Command = {
  command: string;
  output: string;
};

export default function TerminalWithApi() {
  // State untuk input user
  const [userInput, setUserInput] = useState(""); // Perintah yang diketik user

  // State untuk output terminal
  const [fullOutput, setFullOutput] = useState(""); // Output penuh dari command
  const [displayedOutput, setDisplayedOutput] = useState(""); // Output yang ditampilkan perlahan
  const [typingIndex, setTypingIndex] = useState(0); // Untuk efek mengetik

  // State untuk mode loading
  const [isLoading, setIsLoading] = useState(false);

  // State untuk menyimpan daftar command

  // State untuk mode penambahan command baru
  const [isAddingCommand, setIsAddingCommand] = useState(false);
  const [pendingCommand, setPendingCommand] = useState(""); // Nama command yang akan ditambah
  const [waitingForOutput, setWaitingForOutput] = useState(false); // Apakah sedang menunggu output baru
  const [isHidden, setIsHidden] = useState(false);

  // Fetch daftar command dari API saat komponen pertama kali dimount
  useEffect(() => {
    const fetchCommands = async () => {
      try {
        const res = await fetch("/api/commands");
        const data: { success: boolean; commands: Command[] } =
          await res.json();
        if (!data.success) return;
      } catch (error) {
        console.error("Failed to fetch commands", error);
      }
    };
    fetchCommands();
  }, []);

  // Fungsi untuk menangani perintah yang diketik user
  const handleCommand = async () => {
    if (userInput.trim() === "") return;

    // Mode menambahkan command baru
    if (isAddingCommand) {
      await handleAddCommand();
      return;
    }

    if (handleBuiltInCommands(userInput)) return;

    await executeCommand(userInput);

    setDisplayedOutput("");
    setTypingIndex(0);
    setUserInput("");
  };

  // Fungsi untuk menangani perintah bawaan
  const handleBuiltInCommands = (input: string) => {
    if (input === "clear") {
      setFullOutput("");
      setDisplayedOutput("");
      setUserInput("");
      return true;
    }

    if (input === "addcmd") {
      setIsAddingCommand(true);
      setFullOutput("Enter the new command name:");
      setDisplayedOutput("");
      setTypingIndex(0);
      setUserInput("");
      return true;
    }

    return false;
  };

  // Add Command Mode
  const handleAddCommand = async () => {
    if (!waitingForOutput) {
      // 🔥 Cek apakah command sudah ada sebelum lanjut
      const commandName = userInput.startsWith("!")
        ? userInput.slice(1)
        : userInput;

      const isHidden = userInput.startsWith("!");
      setIsHidden(isHidden);
      setPendingCommand(commandName);
      setFullOutput("Now type the output for this command.");
      setDisplayedOutput("");
      setTypingIndex(0);
      setUserInput("");
      setWaitingForOutput(true);
    } else {
      setIsLoading(true);
      try {
        const res = await fetch("/api/commands", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            command: pendingCommand,
            output: userInput,
            hidden: isHidden,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setFullOutput("Command successfully added!");
        } else {
          setFullOutput(data.message);
        }
      } catch (error) {
        setFullOutput(`Error adding command: ${error}`);
      } finally {
        setDisplayedOutput("");
        setTypingIndex(0);
        setUserInput("");
        setIsAddingCommand(false);
        setWaitingForOutput(false);
        setIsLoading(false);
      }
    }
  };

  const executeCommand = async (input: string) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: input }),
      });

      const data = await res.json();
      setFullOutput(data.success ? data.output : `Command not found: ${input}`);
    } catch (error) {
      setFullOutput(`Error executing command: ${error}`);
    } finally {
      resetCommandState();
    }
  };

  // Reset state command setelah proses selesai
  const resetCommandState = () => {
    setUserInput("");
    setIsAddingCommand(false);
    setWaitingForOutput(false);
    setIsLoading(false);
    setDisplayedOutput("");
    setTypingIndex(0);
  };

  // Efek mengetik untuk menampilkan output secara perlahan
  useEffect(() => {
    if (typingIndex < fullOutput.length) {
      const timeout = setTimeout(() => {
        setDisplayedOutput((prev) => prev + fullOutput[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, fullOutput]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsAddingCommand(false);
        setWaitingForOutput(false);
        setFullOutput("Command creation canceled.");
        setDisplayedOutput("");
        setTypingIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userInput]);

  const playTypingSound = () => {
    const audio = new Audio("/sound/pop-2.mp3");
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <motion.section
      variants={shellVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }} // Efek sedikit membesar saat di-hover
      className="lg:col-start-1 row-start-5 lg:row-start-2 lg:row-span-2 xl:row-span-1"
    >
      <div className="p-4 border max-w-[300px] md:max-w-[400px] lg:max-w-[300px] mx-auto xl:max-w-[300px] xl:w-full lg:max-h-[300px] h-full border-green-500 bg-black text-green-400 font-mono rounded-md text-base lg:text-base">
        <h3 className="text-center text-xl max-[350px]:text-xl min-[350px]:text-2xl lg:text-xl mb-2 text-amber-500 font-press-start-2p">
          8-Bit Shell
        </h3>
        <p className="my-2 text-sm lg:text-base">
          {isAddingCommand
            ? "Command creation mode active! Type your command."
            : 'Need help? Type "help" to see available commands.'}
        </p>

        <div className="flex justify-center items-center">
          <span className="text-green-500 animate-pulse">█</span>
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              playTypingSound(); // Tambahkan suara saat mengetik
            }}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            className="bg-transparent border-2 border-green-500 outline-none text-green-500 font-press-start-2p px-2 py-1 ml-2 w-full text-sm lg:text-base"
            autoFocus
          />
        </div>

        {isLoading && <p className="text-yellow-500 my-2">Processing...</p>}
        {displayedOutput && !isLoading && (
          <p className="my-2">{displayedOutput}</p>
        )}
        {/* {isAddingCommand && (
          <button
            onClick={cancelCommand}
            className="w-[50%] flex justify-center mx-auto  mt-12 px-4 py-2 bg-red-600 text-white font-bold rounded-md"
          >
            Cancel
          </button>
        )} */}
      </div>
    </motion.section>
  );
}
