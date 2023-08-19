import { useState } from "react";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

interface AstroScope {
  name: string;
  background: string;
}

function DemoPage() {
  const [data, setData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [astroScope, setAstroScope] = useState<AstroScope>({
    name: "",
    background: "",
  });

  const cygnus = {
    name: "Cygnus",
    background: `Background:
    The Cygnus symbolizes an individual inspired by the grace and majesty of the celestial swan, gliding serenely across the cosmic river. This sign cherishes balance, elegance, and calm leadership. Often, they are perceived as beacons of tranquility, guiding those around them with a gentle touch and an intuitive understanding of life's ebb and flow.`,
  };

  const lyrian = {
    name: "Lyrian",
    background: `Background:
    The Lyrian represents an individual guided by the cosmic lyre, orchestrating the rhythm of the galaxies. This sign values harmony, leadership, and the intricate dance of the cosmos. They are often seen as guides, leading others through challenges and chaos.`,
  };

  const quantix = {
    type: "INTP",
    name: "Quantix",
    background: `Background:
    Radiating with potential and endless possibilities, Quantix embodies the brilliance of the atomic world. Curious and innovative, they're constantly theorizing and seeking to understand the very fabric of existence. Their energy is a dance of potential and realization.`,
  };

  async function callOpenAiAPI(astroScope: AstroScope): Promise<void> {
    setIsLoading(true);
    console.log("Calling OpenAI API...");

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${astroScope.background} Task:\nGenerate a concise daily sci-fi inspired sounding horoscope specifically for a ${astroScope.name}.  It should follow this format:\n\n-    Provide insight into potential challenges or conflicts they might face in the day.\n    - Offer guidance or advice on how to navigate these challenges.\n    - End with a positive affirmation or a word of wisdom tailored to the ${astroScope.name}'''s characteristics.`,
        },
      ],
      temperature: 1,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data.choices[0].message.content);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
    setIsLoading(false);
  }

  async function getAstroScope(astroscope: AstroScope): Promise<void> {
    setAstroScope(astroscope);
    await callOpenAiAPI(astroscope);
  }

  return (
    <div>
      <h1>Stellarity</h1>
      <div>
        <button onClick={() => getAstroScope(cygnus)} className="button">
          Cygnus
        </button>
        <button onClick={() => getAstroScope(lyrian)} className="button">
          Lyrian
        </button>
        <button onClick={() => getAstroScope(quantix)} className="button">
          Quantix
        </button>
        <p>{astroScope.background}</p>
        {isLoading ? <div>Loading...</div> : data !== "" && <p>{data}</p>}
      </div>
    </div>
  );
}

export default DemoPage;
