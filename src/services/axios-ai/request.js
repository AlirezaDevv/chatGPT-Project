import axios from "axios";



export default function GetPrompt(userPrompt) {
  const options = {
    method: "POST",
    url: "https://open-ai21.p.rapidapi.com/conversationgpt35",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "667125954cmshd591f803ef390f9p1a2e48jsnf5cf272970d6",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      web_access: false,
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
    },
  };

  return axios.request(options);
}
