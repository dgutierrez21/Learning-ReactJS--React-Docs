import { useEffect, useRef, useState } from "react";

export const VideoPlayerApp = () => {
  const [estaReproduciendo, setEstaReproduciendo] = useState(false);
  const [texto, setTexto] = useState("");

  return (
    <div className="d-flex flex-column gap-3 align-items-start">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        onClick={() => setEstaReproduciendo(!estaReproduciendo)}
        className="btn btn-primary"
      >
        {estaReproduciendo ? "Pausar" : "Reproducir"}
      </button>

      <VideoPlayer
        estaReproduciendo={estaReproduciendo}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

function VideoPlayer({ src, estaReproduciendo }) {
  const ref = useRef(null);

  useEffect(() => {
    if (estaReproduciendo) {
      console.log("Llamando a video.play()");
      ref.current.play(); // Llamar a estos mientras se renderiza no está permitido.
    } else {
      console.log("Llamando a video.pause()");
      ref.current.pause(); // Además, esto falla.
    }
  }, [estaReproduciendo]);

  // if (estaReproduciendo) {
  //   ref.current.play(); // Llamar a estos mientras se renderiza no está permitido.
  // } else {
  //   ref.current.pause(); // Además, esto falla.
  // }

  return <video className="w-50" ref={ref} src={src} loop playsInline></video>;
}
