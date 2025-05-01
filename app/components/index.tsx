const Index: React.FC = () => {
  return (
    <div className="text-pink-500 h-screen ">
      <div className="items-center inline-flex justify-center w-full h-screen p-4">
        {/* Loading Layout */}
        <div className="w-full h-96 border-2 border-pink-600 p-3 rounded-2xl">
          <div className="text-center">
            <h1 className="">Cinta</h1>
          </div>
          {/* Notifikasi layar selamat datang untuk loading */}
          <div className="border-2 border-pink-600 p-4 text-xs rounded-lg">
            <p className="leading-[200%]">welcome home zhanna chekmareva I've been waiting for you to come you know ^^</p>
          </div>
          {/* Text */}
          <div className="text-xs mt-5">
            <p>&gt;Read</p>
            <p>&gt;preparing launch the app</p>
            <p>&gt;Ready</p>
          </div>
          {/* Loading */}
          <div></div>

          <div className="text-center text-xs">
            <p>smile UwU</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
