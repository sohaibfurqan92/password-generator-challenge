import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <div className=" bg-gray-1 h-screen text-white flex flex-col md:justify-center md:items-center">
      <div className="md:w-1/2 md:container md:mx-auto h-full p-5">
        <h1 className="text-3xl font-bold mb-5 text-center">
          Password Generator
        </h1>
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
