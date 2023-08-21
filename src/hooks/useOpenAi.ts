import { useState } from "react";
import { Cluster } from "../types";
import { clustersDetails } from "../constants/clusters";

function useOpenAI(apiKey: string) {
  const [data, setData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function callOpenAiAPI(cluster: Cluster): Promise<void> {
    setIsLoading(true);
    console.log("Calling OpenAI API...");

    const clusterDetails = clustersDetails[cluster];

    if (!clusterDetails) {
      console.error("Cluster details not found");
      setIsLoading(false);
      return;
    }

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${clusterDetails.description} Task:\nGenerate a concise daily sci-fi inspired sounding horoscope specifically for a ${clusterDetails.sign}.  It should follow this format:\n\n-    Provide insight into potential challenges or conflicts they might face in the day.\n    - Offer guidance or advice on how to navigate these challenges.\n    - End with a positive affirmation or a word of wisdom tailored to the ${clusterDetails.sign}'s characteristics.`,
        },
      ],
      temperature: 1,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
          },
          body: JSON.stringify(APIBody),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, callOpenAiAPI };
}

export default useOpenAI;
