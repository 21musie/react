import React from 'react'
import ReactDom from 'react-dom'
function App() {
  return (
    <div>App</div>
  )
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
export default App