import "./App.css";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("home");

  const projects = [
    {
      title: "Calculator",
      desc: "JavaScript calculator with clean UI.",
    },
    {
      title: "Weather App",
      desc: "Weather forecast app using API integration.",
    },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <div className="container">
            <div className="hero-card">
              {/* Banner Image */}
              <img
                src="/banner.jpg"
                alt="Portfolio Banner"
                className="banner"
              />

              {/* Profile Image + Buttons */}
              <div className="profile-row">
                <img
                  src="/profile.jpg"
                  alt="Abhishek Kumar Singh"
                  className="profile-img"
                />

                <div className="hero-actions">
                <a
                  href="/resume.pdf"
                  download
                  className="btn secondary"
                >
                  Resume
                </a>
                

                  <button
                    className="btn"
                    onClick={() => setActivePage("contact")}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

              {/* Personal Info */}
              <h1>Abhishek Kumar Singh</h1>

              <h3 className="subtitle">
                Full Stack Developer | BTech CSE Student
              </h3>

              <p className="bio">
                I build modern web applications using React, JavaScript,
                Python, and SQL. I enjoy solving problems and creating
                real-world projects.
              </p>
            </div>

            {/* Featured Projects */}
            <h2>Featured Projects</h2>

            {projects.map((project) => (
              <div className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        );

      case "work":
        return (
          <div className="container">
            <h2>Work</h2>
            <div className="card">
              <h3>Frontend Development</h3>
              <p>Building responsive websites using React and JavaScript.</p>
            </div>
          </div>
        );

      case "blogs":
        return (
          <div className="container">
            <h2>Blogs</h2>
            <div className="card">
              <h3>My Learning Journey</h3>
              <p>Articles about programming and web development.</p>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="container">
            <h2>Projects</h2>
            {projects.map((project) => (
              <div className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className="container">
            <h2>Contact</h2>
            <div className="card">
              <p>Email: your@email.com</p>
              <p>GitHub: github.com/yourusername</p>
              <p>LinkedIn: linkedin.com/in/yourusername</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app dark">
      <nav className="navbar">
        <div className="nav-left">Abhishek</div>

        <div className="nav-right">
          <button className="nav-link" onClick={() => setActivePage("home")}>
            Home
          </button>

          <button className="nav-link" onClick={() => setActivePage("work")}>
            Work
          </button>

          <button className="nav-link" onClick={() => setActivePage("blogs")}>
            Blogs
          </button>

          <button
            className="nav-link"
            onClick={() => setActivePage("projects")}
          >
            Projects
          </button>

          <button
            className="nav-link"
            onClick={() => setActivePage("contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;