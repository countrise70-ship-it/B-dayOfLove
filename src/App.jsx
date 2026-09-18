import { useState } from "react";
import "./App.css";

const GIRLFRIEND_NAME = "Anjali";

const QUOTES = [
  "If distance could talk, it would probably complain about how much I miss you. ❤️",
  "You're miles away, but somehow you're still the closest person to my heart. 💕",
  "Consider this my little piece of love travelling all those miles to you. 🥹💕",
];

function App()
{
  const [name, setName] = useState("");
  const [step, setStep] = useState("name");
  const [toast, setToast] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  const [noPosition, setNoPosition] = useState({
    top: "55%",
    left: "65%",
  });

  const showToast = (message) =>
  {
    setToast(message);

    window.setTimeout(() =>
    {
      setToast("");
    }, 2500);
  };

  const checkName = () =>
  {
    const enteredName = name.trim();

    if (!enteredName)
    {
      showToast("Heyyy... you forgot to tell me your name 😏💕");
      return;
    }

    if (enteredName.toLowerCase() !== GIRLFRIEND_NAME.toLowerCase())
    {
      showToast(
        "Hmm... that's not the beautiful girl I'm looking for 👀 Try again ❤️"
      );
      return;
    }

    showToast(
      `I knew it was you, ${GIRLFRIEND_NAME} ❤️ Finally... I've been waiting for you.`
    );

    window.setTimeout(() =>
    {
      setStep("confirm");
    }, 1800);
  };

  const moveNoButton = () =>
  {
    const newTop = Math.floor(Math.random() * 65) + 15;
    const newLeft = Math.floor(Math.random() * 70) + 15;

    setNoPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`,
    });

    showToast("Nice try 😏 The NO button doesn't want you to leave ❤️");
  };

  const confirmGirlfriend = () =>
  {
    showToast("I knew it! 😌❤️ Now let's continue...");

    window.setTimeout(() =>
    {
      setStep("quotes");
    }, 1500);
  };

  const nextQuote = () =>
  {
    if (quoteIndex < QUOTES.length - 1)
    {
      setQuoteIndex((current) => current + 1);
    } else
    {
      setStep("birthday");
    }
  };

  const showSurprise = () =>
  {
    setStep("surprise");
  };

  return (
    <main className="birthday-page">
      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 15 }, (_, index) => (
          <span key={index}>♥</span>
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}

      <section className="card">
        {step === "name" && (
          <div className="content fade-in">
            <div className="emoji">💌</div>

            <p className="small-title">A tiny little security check...</p>

            <h1>Before we continue 👀</h1>

            <p className="subtitle">
              I need to make sure this surprise is actually
              <br />
              going to the right person. 😌
            </p>

            <h2>What's your name, beautiful? ❤️</h2>

            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
              onKeyDown={(event) =>
              {
                if (event.key === "Enter")
                {
                  checkName();
                }
              }}
              autoComplete="off"
            />

            <button
              type="button"
              className="primary-button"
              onClick={checkName}
            >
              Confirm ❤️
            </button>

            <p className="hint">
              Hint: Arun definitely knows the answer. 😏
            </p>
          </div>
        )}

        {step === "confirm" && (
          <div className="content fade-in">
            <div className="emoji">👀</div>

            <p className="small-title">Okay... one more question</p>

            <h1>Very important! 😌</h1>

            <h2>
              Are you
              <br />
              <span className="pink-text">Arun's girlfriend?</span> ❤️
            </h2>

            <p className="subtitle">
              Please choose carefully...
              <br />
              Your answer may affect your birthday surprise. 👀
            </p>

            <div className="choice-area">
              <button
                type="button"
                className="yes-button"
                onClick={confirmGirlfriend}
              >
                YES ❤️
              </button>

              <button
                type="button"
                className="no-button"
                style={{
                  top: noPosition.top,
                  left: noPosition.left,
                }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
              >
                NO 😏
              </button>
            </div>

            <p className="hint">
              Why is the NO button running away? 😂
            </p>
          </div>
        )}

        {step === "quotes" && (
          <div className="content fade-in">
            <div className="emoji">💭</div>

            <p className="small-title">Things I want you to know...</p>

            <div className="quote-box">
              <p>"{QUOTES[quoteIndex]}"</p>
            </div>

            <p className="quote-count">
              {quoteIndex + 1} / {QUOTES.length}
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={nextQuote}
            >
              {quoteIndex < QUOTES.length - 1
                ? "Tell me more... 💕"
                : "Okay... ❤️"}
            </button>
          </div>
        )}

        {step === "birthday" && (
          <div className="content birthday-content fade-in">
            <div className="emoji birthday-emoji">🎂</div>

            <p className="small-title">For the birthday girl...</p>

            <h1>
              Happy Birthday,
              <br />
              <span className="pink-text">{GIRLFRIEND_NAME}! ❤️</span>
            </h1>

            <p>Today is all about you. ✨</p>

            <p>
              I wish I could be there beside you right now — annoying you,
              making you laugh,and probably making you
              roll your eyes at me. 😌❤️
            </p>

            <p>
              But for now, there are miles between us. Different places,
              different screens, but somehow my heart still knows exactly where
              it belongs.
            </p>

            <p className="highlight-text">With you. ❤️</p>

            <p>
              Long distance isn't always easy. There are hugs we can't give,
              moments we can't share immediately, and days when I wish you were
              just a few steps away instead of miles away.
            </p>

            <p>
              But until distance becomes just a memory, I'll keep choosing you
              — through every call, every message, every silly conversation and
              every little moment.
            </p>
            <h2 className="final-message">
              Happy Birthday to my favourite person. 🥹💕
            </h2>

            <button
              type="button"
              className="primary-button surprise-button"
              onClick={showSurprise}
            >
              Okay... show me my surprise 🎁
            </button>
          </div>
        )}

        {step === "surprise" && (
          <div className="content fade-in">
            <div className="big-heart">❤️</div>

            <p className="small-title">Your surprise...</p>

            <h1>For you, always. 💕</h1>

            <p className="surprise-text">
              If I could give you one thing today, it would be the chance to
              see yourself through my eyes.
            </p>

            <p className="surprise-text">
              Maybe then you'd understand why, even from miles away, you still
              manage to make my ordinary days feel a little more beautiful.
            </p>

            <p className="surprise-text">
              Distance can separate two people. It can't decide how much one
              heart can love another.
            </p>

            <h2 className="distance-line">
              Miles apart.
              <br />
              Hearts together. ❤️
            </h2>

            <p className="signature">
              With love,
              <br />
              Arun ❤️
            </p>

            <div className="heart-row" aria-hidden="true">
              ❤️ 💕 ❤️ 💕 ❤️
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;