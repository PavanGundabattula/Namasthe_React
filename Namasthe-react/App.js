{/* <div id="parent">
    <div id= "child">
        <h1>I m in h1 Tag</h1>
        <h1>I m in h1 Tag</h1>
    </div>
</div> */}


const heading = React.createElement("div",{id:'parent'},React.createElement("div",{id:'child'},[React.createElement("h1",{},"I am H1 Tag"),React.createElement("h1",{},"I am H2 Tag")]));

        const root = ReactDOM.createRoot(document.getElementById('header'));

        root.render(heading)