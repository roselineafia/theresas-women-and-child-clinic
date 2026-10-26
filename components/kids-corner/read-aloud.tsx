"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";

export function ReadAloudControls({ text, label = "Read aloud" }: { text: string; label?: string }) {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      alive.current = false;
      window.speechSynthesis?.cancel();
    };
  }, []);

  function stop() {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }

  function speak() {
    if (!supported) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.04;
    utterance.lang = "en-GB";
    const voice = synth.getVoices().find((item) => item.lang.toLowerCase().startsWith("en"));
    if (voice) utterance.voice = voice;
    utterance.onend = () => {
      if (alive.current) setSpeaking(false);
    };
    utterance.onerror = () => {
      if (alive.current) setSpeaking(false);
    };
    setSpeaking(true);
    synth.resume();
    synth.speak(utterance);
  }

  if (supported === null) return null;

  if (!supported) {
    return (
      <p className="text-base font-semibold text-muted">
        Read aloud is not available in this browser. The words stay on the screen for you.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button type="button" variant="teal" onClick={speak} aria-pressed={speaking}>
        {speaking ? "Reading…" : label}
      </Button>
      <Button type="button" variant="secondary" onClick={stop}>
        Stop reading
      </Button>
    </div>
  );
}
