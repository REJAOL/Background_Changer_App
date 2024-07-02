import { useState } from "react"


function App() {

  const [color, setColor] = useState("yellow")


  return (
    <>
      <div className="w-full h-screen text-white" style={{ backgroundColor: color }}>
        <h1 className="text-black bg-green-400 px-4 py-4 text-center font-bold text-3xl">background changer App</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >lavender</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
