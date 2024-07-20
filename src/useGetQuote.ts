import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type TQuote = { author: string; content: string };
export default function useQetQuote() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState<TQuote>();

  useEffect(() => {
    async function getQuote() {
      const response = await fetch(`https://api.quotable.io/random`);
      const data = await response.json();
      setLoading(false);
      setQuote(data);
    }

    if (loading) {
      getQuote();
    }
  }, [loading]);

  function copyQuote(text: string) {
    toast.success("Copid to clipboard");
    navigator.clipboard.writeText(text);
  }
  function handleTwitterPost() {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote?.content} -- ${quote?.author}`,
      "_blank"
    );
  }
  return { loading, setLoading, quote, copyQuote, handleTwitterPost };
}
