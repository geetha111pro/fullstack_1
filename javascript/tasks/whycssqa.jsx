import React from 'react'

whycssqa=()=>{
    return(
        <section>
            <div>
                <p style={{fontSize:"10px"}}>1.React converts the JavaScript object into a style attribute in HTML at runtime.</p>
                <p style={{fontSize:"10px"}}>2.How it's embedded: Styles are written in .module.css files and imported as JavaScript objects. React generates unique class names to avoid conflicts.Conversion process: During the build process, tools like Webpack transform these CSS modules into unique class names and inject them into the DOM.</p>
            </div>
        </section>
    )
}
export default whycssqa;