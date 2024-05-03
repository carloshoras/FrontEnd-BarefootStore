import '../styles/About.css'

function About() {
    return (
    
            <div className='about-container'>
                 <div className='about-text'>
                    <h1>About us!</h1>
                     <div className='about-img'>
                        <p>We are María, José and Carlos; three full-stack developers from Spain. We've been always passionate
                        about barefoot and nature so we decided to follow our passion and do this project together.
                        We build this site working fully remotely and we did our best to put together what we think
                        is a well-rounded webapp. Hope you enjoy it!</p>
                        {/* <img src="../../public/images/team1.png" /> */}
                        <img src="../../public/images/team2.png" /> 
                     </div>
                 </div> 
             </div>
    )
}

export default About