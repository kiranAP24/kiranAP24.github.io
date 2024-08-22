// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css'; // Import your CSS file

const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-image"></div>
                <div className="hero-content">
                    <img src="path/to/your/profile-picture.jpg" alt="Profile" className="profile-picture" />
                    <h1 className="hero-title">Hi, I'm Kiran</h1>
                    <p className="hero-description">I’m a software engineer with a passion for creating innovative solutions. Welcome to my portfolio!</p>
                </div>
            </header>

            {/* Experience Section */}
            <section className="experience">
                <div className="container">
                    <h3 className="section-title">Here’s where I’ve worked at</h3>
                    <div className="experience-card">
                        <h5 className="experience-card-title">Datapy, [Location]</h5>
                        <h6 className="experience-card-subtitle">Software Engineer Trainee (April 2023 - August 2023)</h6>
                        <ul className="experience-card-details">
                            <li>Worked on [Brief Description of Key Responsibilities]</li>
                            <li>[Another Key Responsibility]</li>
                            <li>[Additional Details]</li>
                        </ul>
                    </div>
                    <div className="button">
                        <a href="/experience" className="button-text">VIEW DETAILED WORK EXPERIENCE</a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <div className="container">
                    <h3 className="section-title">Here are my favorite projects</h3>
                    <a href="/projects/data-deduplication" className="project-card">
                        <div className="project-card-content">
                            <div className="project-card-title-container">
                                <h5 className="project-card-title">
                                    Data Deduplication for Cloud <span className="project-card-date">(August 2024)</span>
                                </h5>
                                <p className="project-card-subtitle">A tool to efficiently remove duplicate data from cloud storage.</p>
                            </div>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Django</span>
                                <span className="tech-tag">Cloud Storage</span>
                            </div>
                        </div>
                    </a>
                    <a href="/projects/online-auction" className="project-card">
                        <div className="project-card-content">
                            <div className="project-card-title-container">
                                <h5 className="project-card-title">
                                    Online Auction Website <span className="project-card-date">(July 2024)</span>
                                </h5>
                                <p className="project-card-subtitle">An auction platform for users to bid on items online.</p>
                            </div>
                            <div className="tech-tags">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">MongoDB</span>
                            </div>
                        </div>
                    </a>
                    <a href="/projects/calculator" className="project-card">
                        <div className="project-card-content">
                            <div className="project-card-title-container">
                                <h5 className="project-card-title">
                                    Calculator Application <span className="project-card-date">(June 2024)</span>
                                </h5>
                                <p className="project-card-subtitle">A calculator app with a user-friendly interface.</p>
                            </div>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Tkinter</span>
                            </div>
                        </div>
                    </a>
                    <div className="button">
                        <a href="/projects" className="button-text">VIEW ALL PROJECTS</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <a href="mailto:kiran@example.com" className="footer-link">Email</a>
                        <a href="https://www.linkedin.com/in/kiran/" className="footer-link">LinkedIn</a>
                        <a href="https://github.com/kiran" className="footer-link">Github</a>
                    </div>
                    <div className="footer-column">
                        <h4>General</h4>
                        <a href="/" className="footer-link">Home</a>
                        <a href="/projects" className="footer-link">Projects</a>
                        <a href="/experience" className="footer-link">Experience</a>
                        <a href="/blog" className="footer-link">Blog</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
