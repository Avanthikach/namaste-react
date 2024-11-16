const heading = React.createElement("h1", {id:"heading"}, "hello world")
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [heading,heading]
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)