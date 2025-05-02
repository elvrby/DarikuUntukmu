"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Messages: React.FC = () => {
  const [activeMessage, setActiveMessage] = useState<number | null>(null);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleBack = () => {
    setActiveMessage(null);
    setTypedText("");
    setIsTyping(false);
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleSkip = () => {
    if (activeMessage !== null) {
      setTypedText(messages[activeMessage]);
      setIsTyping(false);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    }
  };

  const messages: { [key: number]: string } = {
    1: `2 февраля 2022 года, день, когда мы стали парой, очень счастливый день, сделал меня очень счастливой. В то время мои глаза и сердце были сосредоточены только на тебе, на том, как ты прекрасна и твоих обширных знаниях, и ты заставил меня влюбиться в тебя.
    \n много моментов, которые мы пережили, много историй, которые мы получили, грустные, счастливые, злые и другие, но мы все еще любим друг друга и вместе, и я помню, как однажды написала
    "Я реинкарнация, моя жизнь была 100 раз, и это последняя в моей жизни только для любви к тебе" эти слова, кажется, дают мне одну надежду, что ты единственный человек, который всегда будет со мной, и я действительно люблю тебя, даже когда ты злишься на меня, я всегда даю тебе что-то, что может заставить тебя смеяться и улыбаться снова, от глаз, до самого сердца, может быть, это то, что мы чувствуем`,
    2: `Maukah kamu menikah denganku suatu hari nanti?`,
    3: `Привет, Жанна, как у тебя дела сегодня? Ты достаточно отдохнула? Я не думаю, что ты отдохнула, но я хочу сказать, я понимаю, что ты взрослая и можешь хорошо о себе позаботиться, но я всегда хочу выразить тебе свою обеспокоенность тем, что есть люди, которые будут грустить, если с тобой случится что-то плохое. Это может ощущаться по-другому, но я всегда беспокоюсь о тебе.
    \n Кажется, что мы не так давно знакомы, и ты выросла в прекрасную, смелую и трудолюбивую взрослую женщину, я горжусь тобой. И я уверена, что однажды ты встретишь мужчину, который будет очень сильно любить тебя, который всегда будет рядом, который всегда тебя поймет, и этот человек будет лучше твоего бывшего возлюбленного.
    \n не волнуйся, я в порядке, старый я, не нынешний я, я все больше понимаю, что я был неправ, я был слишком эгоистичен и не имел чувств, но я чувствую, что теперь я намного лучше, я исправляю то, что не так внутри меня, что иногда каждая схватка, с которой мы сталкиваемся, заключается не только в победе, но и в понимании друг друга, по крайней мере, это то, что я также узнал о математике, в схватке никто не будет прав, если я прав, то я получаю 0, а если я проигрываю, я получаю -1
    \n хахаха, почему мы говорим о математике, но ты самая умная в математике, я хочу быть такой же умной в математике, как ты, Жанна.
    \n но в этом случае я хочу сказать, извини, за все`,
  };

  const imageMap: { [key: number]: string[] } = {
    1: ["/image.jpg", "/image.jpg", "/image.jpg"],
    2: ["/image.jpg", "/image.jpg"],
  };

  useEffect(() => {
    if (activeMessage !== null) {
      const message = messages[activeMessage];
      let index = 0;
      let currentText = "";
      setTypedText("");
      setIsTyping(true);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

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

      // Auto-play music
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.warn("Autoplay failed", err);
          });
        }
      }, 500);

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
              <div className="space-y-2 mt-4 text-left">
                <button onClick={() => setActiveMessage(1)} className="bg-white w-full h-10 flex items-center px-4 rounded hover:bg-gray-100">
                  <span className="text-left">From Eyes Down To Heart</span>
                </button>
                <button onClick={() => setActiveMessage(2)} className="bg-white w-full h-10 flex items-center px-4 rounded hover:bg-gray-100">
                  <span className="text-left">From Me To You</span>
                </button>
              </div>
            )}

            {activeMessage !== null && (
              <div className="mt-10 space-y-4 text-white">
                {typedText.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
                {imageMap[activeMessage] && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {imageMap[activeMessage].map((src, idx) => (
                      <img key={idx} src={src} alt={`Gambar ${idx + 1}`} className="w-full rounded-lg border border-gray-600" />
                    ))}
                  </div>
                )}
              </div>
            )}

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
