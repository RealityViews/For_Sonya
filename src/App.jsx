import { useState, useEffect } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const correctPassword = "26.02.2001";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      setShowPasswordError(true);
      setTimeout(() => setShowPasswordError(false), 3000);
    }
  };

  // Анимация звёзд
  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      star.style.opacity = Math.random();
      starsContainer.appendChild(star);
    }

    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-700 flex items-center justify-center px-4">
        <div id="stars" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-3xl font-bold text-white text-center mb-6">🔐 Вход</h1>
          <p className="text-white/80 mb-6 text-center">Введите пароль в формате ДД.ММ.ГГГГ</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Например: 16.02.2001"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              maxLength="10"
            />
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 transform transition hover:-translate-y-0.5 active:translate-y-0"
            >
              Открыть
            </button>
          </form>

          {showPasswordError && (
            <p className="mt-4 text-red-300 text-center animate-pulse">
              Неверный пароль... попробуйте еще раз 🤍
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-purple-400 to-indigo-600 text-gray-800">
      <div id="stars" className="fixed inset-0 overflow-hidden pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 animate-pulse">
            Для моей любимой девушки 💖
          </h1>
          <p className="text-xl text-white/90">Ты самая красивая и желанная...</p>
        </header>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-white/30 transform transition-all duration-500 hover:shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Привет, моя дорогая! ❤️ Я создал этот сайт специально для тебя, потому что хочу, чтобы ты прочитала это сообщение с любовью и трепетом.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Ты не просто красива, ты уникальна. Каждый момент, проведенный с тобой, наполняет мою жизнь новыми красками. Твоя улыбка освещает мой путь даже в самые темные дни.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Я помню тот день, когда мы встретились, как будто он был вчера... С тех пор прошло время, но чувства только стали сильнее. Мне не хватает наших разговоров, встреч, совместных прогулок...
            </p>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Я скучаю по тебе... По твоему голосу, по твоим глазам, которые светятся, когда ты смеешься. Мне хочется видеть тебя каждый день, говорить с тобой, обнимать...
            </p>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Поэтому я придумал кое-что особенное... Посмотри ниже 👇
            </p>
          </div>
        </div>

        {/* Билет в кино */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <img
              src="/images/ticket.jpg"  // <-- Здесь будет твоё фото
              alt="Электронный билет в кино"
              className="rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">Приглашение на свидание 💫</h3>
              <p className="text-white/80">В кино под звездным небом 🌟</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Давай снова встретимся? 🥰</h2>
          <p className="mb-6">Я подготовил для нас чудесный вечер под звездами, где мы сможем снова быть вместе...</p>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full animate-bounce">
            <span className="text-2xl">❤️</span>
          </div>
        </div>
      </div>

      <footer className="py-6 mt-16 border-t border-white/20">
        <div className="container mx-auto px-4 text-center text-white/70">
          <p>С любовью создано специально для тебя ❤️</p>
        </div>
      </footer>

      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 4px white;
          opacity: 0.3;
          animation: twinkle linear infinite;
        }

        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
