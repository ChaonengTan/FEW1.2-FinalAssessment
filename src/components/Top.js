import data from './metal.json'
function Top() {
  return (
    <div className="Navbar">
        <h1>Chaoneng Tan</h1>
        <p>FEW 1.2 Final Assessment</p>
        <p>Total Bands: {data.length}</p>
    </div>
  )
}

export default Top