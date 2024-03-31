import { createContext } from "react"

export default createContext({
    style: {
        menu: {
            backgroundColor: "#1E1E1E",
            textColor: "white",
            highlightColor: "#FF5733"
        },
        body: {
            mainColor: "#262626",
            textColor: "#CCCCCC",
            accentColor: "#4CAF50"
        }
    }
})