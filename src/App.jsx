import "./App.css";
import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-react-dmw2.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus("Server connection failed.");
    }
  };

  return (
    <div className="container">
      <h2>Contact Me</h2>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        <p>{status}</p>
      </div>
    </div>
  );
}

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
              {/* About Section */}
<section className="about-section">
  <p className="section-label">About</p>
  <h2>Me</h2>

  <div className="about-card">
    <img
      src="/profile.jpg"
      alt="Abhishek Kumar Singh"
      className="about-image"
    />

    <div className="about-content">
      <h3>Abhishek Kumar Singh</h3>

      <p>
        I am a BTech Computer Science student and Full Stack Developer.
        I build responsive web applications using React, JavaScript,
        Node.js, Express, Python, and SQL. I enjoy solving real-world
        problems and continuously improving my development skills.
      </p>

      <div className="skills">
        <span>React</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>Python</span>
        <span>SQL</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>
  </div>
</section>

{/* GitHub Activity Section */}
<section className="github-section">
  <p className="section-label">Development</p>
  <h2>GitHub Activity</h2>

  <div className="github-card">
    <img
      src="https://ghchart.rshah.org/3b82f6/abhishekroket"
      alt="GitHub Contribution Graph"
      className="github-graph"
    />

    <a
      href="https://github.com/abhishekroket"
      target="_blank"
      rel="noopener noreferrer"
      className="btn secondary"
    >
      View GitHub Profile
    </a>
  </div>
</section>
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
            <div className="card">
              <h3>Backend Development</h3>
              <p>Building REST APIs and server-side applications using Node.js, Express , and MongoDB.</p>
            </div>
          </div>
        );

      case "blogs":
  return (
    <div className="container">
      <section className="blog-section">
        <p className="section-label">Featured</p>
        <h2>Blogs</h2>

        <div className="blog-card">
          <h3>How I Built My Full Stack Portfolio with React and Node.js</h3>

          <p className="blog-date">May 2026 • 5 min read</p>

          <p>
            In this article, I share how I created my personal portfolio
            using React, Vite, Node.js, Express, and deployed it using
            Vercel and Render. The project includes a responsive design,
            live contact form, and GitHub activity integration.
          </p>

          <a
            href="https://github.com/abhishekroket/portfolio-react"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Read More
          </a>
        </div>

        <div className="blog-card">
          <h3>My Journey to Becoming a Full Stack Developer</h3>

          <p className="blog-date">May 2026 • 4 min read</p>

          <p>
            From learning C programming to building modern web applications
            with React and Node.js, this blog summarizes my learning path,
            projects, and goals as a BTech Computer Science student.
          </p>

          <a
            href="https://github.com/abhishekroket"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Read More
          </a>
        </div>
      </section>
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
          return <ContactPage />;

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