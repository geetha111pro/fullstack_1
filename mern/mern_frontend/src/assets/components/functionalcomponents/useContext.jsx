import React from "react";
import Component2 from "./ContextComponent/Component2";

export var ThemeProvider = React.createContext();
var ExamResults = () => {
    return (
        <section>
            <ThemeProvider.Provider value={{ sgpa: "10.00",cgpa:"9.05" }}>
                <h1>This is an example of use context</h1>
                <Component2 />


            </ThemeProvider.Provider>
        </section>
    )

}
export default ExamResults;
