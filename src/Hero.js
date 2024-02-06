import screenshot from  "./photo-grid.png"
function Hero(){
    return(
        <section className="hero">
            <img src={screenshot} className="hero--photo" alt="screenshot" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
export default Hero