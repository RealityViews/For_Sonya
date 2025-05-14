import React, { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    let formatted = '';
    if (value.length > 0) formatted += value.slice(0, 2);
    if (value.length > 2) formatted += '.' + value.slice(2, 4);
    if (value.length > 4) formatted += '.' + value.slice(4, 8);
    setPassword(formatted);
  };

  const handleSubmit = () => {
    if (password === '26.02.2001') {
      setIsAuthenticated(true);
    } else {
      alert('Пароль неверный 😕 Попробуй ещё раз.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center p-6 transition-all duration-700">
      {!isAuthenticated ? (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center text-white space-y-6 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Привет, Соня </h1>
          <p className="text-sm md:text-base opacity-90">Введи свою дату рождения, чтобы открыть сообщение.</p>

          <input
            type="text"
            inputMode="numeric"
            placeholder="16.02.2001"
            value={password}
            onChange={handlePasswordChange}
            className="w-full py-3 px-4 text-center text-lg bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-white/70 transition-all"
            maxLength="10"
          />

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Открыть
          </button>
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center text-white animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ты самая лучшая!</h2>
          <p className="mb-6 leading-relaxed text-left">
            Привет, Соня 💖 Я так много думал о тебе... Ты не просто человек, ты целый мир.
            Надеюсь, мы снова встретимся. Я скучаю и очень хочу быть рядом.
          </p>
          <img
            src="/images/ticket.jpg"
            alt="Билет в кино"
            className="rounded-xl shadow-lg w-full mt-4"
          />
        </div>
      )}
    </div>
  );
}
