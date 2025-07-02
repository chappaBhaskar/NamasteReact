/**<div id="parent">
    <div id="child">
        <h1>"Hello I am H1 Tag"</h1>
        <h2>"Hello I am H2 Tag"</h2>
    </div>
   </div>
**/




const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello I am H1 tag from React"),React.createElement("h1",{},"Hello I am H1 tag from React")])
)










//const heading =React.createElement("h1",{id:"heading"},"Hello world from React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);