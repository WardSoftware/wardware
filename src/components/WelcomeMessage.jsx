import { useEffect, useState } from "react"
import { generateResponse } from "../functions/generateResponse";

export default function WelcomeMessage(props) {
    

    const [message, setMessage] = useState("")

    const streamGPTMessage = async () => {
        var fullValue = "";
        const stream = await generateResponse();
        for await (const chunk of stream) {
            fullValue += chunk.choices[0]?.delta?.content || "";
            setMessage(fullValue);
        }
    }
    
    useEffect(() => {
        streamGPTMessage();
    }, [])

    return <div style={styles.textBodyStyle}>
        {message}
    </div>
}

const styles = {
    textBodyStyle: {
        width: "80%",
        fontWeight: 600,

    }
}