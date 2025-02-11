import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
function App(){
return(    
<div>
<Header />
    <Note />
    <Footer />
    {/* //////before using map method for loop////// */}
    <Header />
    
    {notes.map(  (note)=> 
    <Note 
    key={note.id}
    title={note.title}
    content={note.content}
    />  )}
    
    <Footer />
</div>    
);
}

export default App;
