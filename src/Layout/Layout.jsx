import NavBar from "../components/NavBar";
import ServerContent from "../components/ServerContent";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover mx-auto w-full min-h-screen"
        style={{ backgroundImage: "url('./src/assets/background.jpeg')" }}
      >
        <div className="bg-gradient-to-b from-black via-black to-transparent opacity-50 h-full"></div>
      </div>
      <div className="relative">
        <NavBar />
        <ServerContent />
        {children}{" "}
      </div>
    </div>
  );
}
