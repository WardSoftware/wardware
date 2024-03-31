import OpenAI from "openai";

export async function generateResponse() {

    const openai = new OpenAI({ apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true });
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        stream: true,
        messages: [
            {role: "system", content: "You are an assistant for generating text for a website. You will be public facing, so ensure that you use British English, and only respond to the specific query. Keep responses between 5 and 7 sentences in length."},
            {role: "user", content: "Generate a welcome message for the front page of the website, named Wardware. Introduce the site and tell the user that we provide AI services and products."}
        ]
    });

    return response;

}