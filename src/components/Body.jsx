import { useContext } from "react"
import StyleContext from "../context/StyleContext"
import WelcomeMessage from "./WelcomeMessage"

export default function Body(props) {
    
    const theme = useContext(StyleContext)
    
    return <div style={{
        backgroundColor: theme.body.mainColor,
        color: theme.body.textColor,
        ...styles.body
    }}>
        <WelcomeMessage />
    </div>
}

const styles = {
    body: {
        display: "flex",
        flex: 1,
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
} 