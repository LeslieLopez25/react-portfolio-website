import React from "react";

import "../../App.css";
import "./about.styles.css";

export default function About() {
    return (
        <main class="about" id="about">
            <div class="max-width">
                <h2 class="title"><span>About Me</span></h2>
                <div class="about-content">
                    <div class="column left">
                        <img src="/assets/images/profile.png" alt="profile image" loading="lazy" />
                    </div>
                    <div class="column right">
                        <h3 class="text">I'm Leslie Lopez</h3>
                        <p>
                            Hello! I'm a passionate React frontend developer dedicated to mastering the art of creating seamless user
                            experiences.
                            Focused on becoming a full-stack React developer, I thrive on continuous learning and problem-solving. If
                            you're looking
                            for a dedicated and adaptable web developer with a strong emphasis on React, let's connect and create
                            exceptional
                            projects together!<br>
                                <br>Let's embark on this exciting tech journey together!
                                </p>
                            </div>
                    </div>
                </div>
                </div>
        </main>
    )
}