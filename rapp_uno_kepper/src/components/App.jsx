import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
return(    
<div>
<Header />
    <Note />
    <Footer />
    {/* //////before using map method for loop////// */}
    <Header />
    <Note />
    <Footer />
</div>    
);
}

export default App;
