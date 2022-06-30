import React from 'react';
import headshot from '../../assets/small/headshot.png'

function About() {
    return (
        <section class="center my-5">
            <div class="center med-pad">
                <h1 id="about">About Me</h1>
                <img src={headshot} alt="developer headshot" class="small-photo" />
                    <p class="center">Full-Stack Bootcamp soon-to-be graduate with experience in front-end web development with back-end connectivity. Current front-end development intern at Integrated Marketing Agency 'White Hat'. 
                    </p>
            </div>
        </section>
    )
}

export default About;