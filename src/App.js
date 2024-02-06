import './App.css';
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

function App (){
  const cards = data.map(item=>{
    return(
    <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewcount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />)
  })
  return(
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

export default App;