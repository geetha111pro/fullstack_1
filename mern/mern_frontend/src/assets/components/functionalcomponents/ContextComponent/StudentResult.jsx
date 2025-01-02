import { useContext } from "react";
import { ThemeProvider } from "../useContext";
var StudentResult=() => {
    var result = useContext(ThemeProvider);

    return(
        <section>
        <h1>Result - sgpa is {result.sgpa} and cgpa is {result.cgpa}</h1>
        </section>
    )
}
export default StudentResult;