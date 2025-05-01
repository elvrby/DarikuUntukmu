"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Messages: React.FC = () => {
  const [activeMessage, setActiveMessage] = useState<number | null>(null);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleBack = () => {
    setActiveMessage(null);
    setTypedText("");
    setIsTyping(false);
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
  };

  const handleSkip = () => {
    if (activeMessage !== null) {
      setTypedText(messages[activeMessage]);
      setIsTyping(false);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    }
  };

  const messages: { [key: number]: string } = {
    1: `Hii Zhanna Chekmareva, bagaimana kabarmu hari ini?\napakah kamu baik baik saja di sana? Aku sangat ingin tau kabar darimu.\nAku mencintaimu.`,
    2: `Maukah kamu menikah denganku suatu hari nanti?`,
  };

  useEffect(() => {
    if (activeMessage !== null) {
      const message = messages[activeMessage];
      let index = 0;
      let currentText = "";
      setTypedText("");
      setIsTyping(true);

      typingIntervalRef.current = setInterval(() => {
        if (index < message.length) {
          currentText += message.charAt(index);
          setTypedText(currentText);
          index++;
        } else {
          clearInterval(typingIntervalRef.current as NodeJS.Timeout);
          setIsTyping(false);
        }
      }, 20);

      return () => {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      };
    }
  }, [activeMessage]);

  return (
    <div className="text-pink-500 h-screen bg-blue-500 text-xs">
      <div className="flex items-center justify-center w-full h-screen p-4 px-4 md:px-96">
        <div className="w-full h-10/12 md:h-11/12 border-4 border-amber-300 bg-gray-800 p-5 rounded-2xl flex flex-col">
          <div className="border border-gray-500 p-5 rounded-2xl flex-1 overflow-y-auto relative">
            {activeMessage !== null && (
              <button onClick={handleBack} className="flex px-3 py-1 mb-4 bg-white text-black rounded hover:bg-gray-200 text-sm">
                ← Kembali
              </button>
            )}
            <h3 className="text-center text-2xl text-white">Messages</h3>

            {activeMessage === null && (
              <div className="space-y-2 mt-4">
                <button onClick={() => setActiveMessage(1)} className="bg-white w-full h-10 flex items-center px-4 rounded hover:bg-gray-100">
                  <span>Dariku Untukmu</span>
                </button>
                <button onClick={() => setActiveMessage(2)} className="bg-white w-full h-10 flex items-center px-4 rounded hover:bg-gray-100">
                  <span>Maukah Kamu</span>
                </button>
              </div>
            )}

            {activeMessage !== null && (
              <div className="mt-10 space-y-4 text-white">
                {typedText.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}

            {/* Tombol Skip saat animasi berlangsung */}
            {isTyping && (
              <button onClick={handleSkip} className="absolute top-5 right-5 px-3 py-1 bg-white text-black rounded hover:bg-gray-200 text-sm">
                Skip
              </button>
            )}
          </div>

          <div className="w-full mt-4 space-y-2">
            <Link href={"/"} className="block text-center w-full py-2 bg-amber-300 text-black rounded-xl hover:bg-gray-600">
              Selanjutnya
            </Link>
            <Link href={"/"} className="block text-center w-full py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-600">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
