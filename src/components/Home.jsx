
import React, { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState('');

  const handleRoom = () => {
    if (value.trim()) {
      window.location.href = `/room/${value}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      handleRoom();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Video Chat
          </h1>
          
          <p className="text-gray-300">
            Connect with others instantly using a shared room ID
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleKeyPress}
              type="text"
              placeholder="Enter room ID"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            onClick={handleRoom}
            disabled={!value.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;