import React from 'react'
import "./App.css"
const About = () => {
    return (
        <div className="page-shell about-page">
            <div className="page-header">
                <p className="eyebrow">About Code Reviewer</p>
                <h1>Helping developers write cleaner, safer, and smarter code.</h1>
                <p>
                    Code Reviewer is built to turn code into actionable feedback. Instead of only
                    highlighting syntax problems, it helps developers understand quality, logic,
                    maintainability, and best practices in a simple, human-readable way.
                </p>
            </div>

            <div className="feature-grid">
                <div className="feature-card">
                    <span className="card-number">01</span>
                    <h3>AI-Powered Review</h3>
                    <p>
                        Get instant suggestions on structure, readability, performance, and common
                        implementation issues in your code.
                    </p>
                </div>

                <div className="feature-card">
                    <span className="card-number">02</span>
                    <h3>Developer-Focused</h3>
                    <p>
                        Our review experience is designed for engineers who want practical guidance,
                        not generic explanations.
                    </p>
                </div>

                <div className="feature-card">
                    <span className="card-number">03</span>
                    <h3>Faster Iteration</h3>
                    <p>
                        Improve code quality early, reduce review friction, and move from draft to
                        production-ready faster.
                    </p>
                </div>
            </div>

            <div className="story-panel">
                <div className="story-text">
                    <p className="eyebrow">Our mission</p>
                    <h2>Make code quality easier for every team.</h2>
                    <p>
                        Whether you are building a side project, learning a new framework, or shipping
                        production code, Code Reviewer helps you catch mistakes before they become
                        bigger problems. We aim to make technical feedback approachable and useful for
                        developers at every stage.
                    </p>
                </div>

                <div className="stats-box">
                    <div>
                        <strong>24/7</strong>
                        <span>AI feedback</span>
                    </div>
                    <div>
                        <strong>Instant</strong>
                        <span>Suggestions</span>
                    </div>
                    <div>
                        <strong>Clean</strong>
                        <span>Code habits</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About





