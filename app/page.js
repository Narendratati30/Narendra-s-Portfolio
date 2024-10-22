"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Narendra and his Resume?",
    },
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: "user", content: messageInput }];
    setMessages(newMessages);
    setMessageInput("");

    const apiMessage = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages }),
    }).then((res) => res.json());
    setMessages([
      ...newMessages,
      { role: "system", content: apiMessage.message },
    ]);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skiils</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:narendratati07@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small> Hi I am</small> Narendra Tati
              </h1>
              <p>
                I am a software engineer currently pursuing my Master of Science in Information Systems at the University of Utah. 
                  My professional experience includes working as a Java Developer at Accenture, where I developed and maintained Java-based backend services, 
                  built RESTful APIs using Spring Boot, and optimized SQL queries to improve system performance. Prior to that, I was a Junior Web Developer 
                  at Wipro Technologies, where I contributed to Java application development and collaborated with front-end teams to enhance system integration. 
                    I am proficient in Java, Python, HTML, CSS, JavaScript, and SQL, and have hands-on experience with cloud platforms like AWS and Google Cloud. 
                    Additionally, I hold certifications in AWS Cloud, front-end development, and Google Data Analytics.
              </p>
              <div className="call-to-action">
                <a href="./Narendra_Resume.pdf" className="button black">
                  {" "}
                  View Resume{" "}
                </a>
                <a
                  href="mailto:narendratati07@gmail.com"
                  className="button white"
                >
                  {" "}
                  Contact Me{" "}
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/narendra-tati/">
                  <img src="./imgs/linkedin.png" alt="Linkedin" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/hero-image.png" alt="Narendra Tati" width="100%" />
          </div>
        </section>

        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/React.png" alt="REACT" width="128" />
              <img src="./imgs/nodejs.png" alt="NODE>JS" width="128" />
              <img src="./imgs/java.jpg" alt="Java" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
              <img src="./imgs/selenium.png" alt="Selenium" width="128" />
              <img src="./imgs/cucumber.png" alt="Cucumber" width="128" />
              <img src="./imgs/aws.png" alt="AWS" width="128" />
              <img src="./imgs/google-cloud.png" alt="Google" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Programming</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
              <h3>Frameworks & Libraries</h3>
              <ul>
                <li>Spring Boot</li>
                <li>Hibernate</li>
                <li>React</li>
                <li>Rest API</li>
              </ul>
              <h3>Testing</h3>
              <ul>
                <li>Selenium</li>
                <li>Cucumber</li>
              </ul>
              <h3>Data</h3>
              <ul>
                <li>MySQL</li>
                <li>Power BI</li>
                <li>Tableau</li>
                <li>Big Query</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi, I’m Narendra Tati, a dedicated Software engineer based in Salt Lake City, UT. 
              I’m currently pursuing a Master of Science in Information Systems at the University of Utah, 
              where I’m expanding my skills in data engineering, systems analysis, and Python programming. 
              I hold a Bachelor’s degree in Electrical and Electronics Engineering from Koneru Lakshmaiah University in India.
              </p>
              <p>
                With professional experience at Accenture and Wipro Technologies, I’ve successfully enhanced system performance, 
              optimized backend services, and improved application usability. During my time at Accenture as a Java Developer, 
              I specialized in developing and maintaining scalable backend services using SQL and Spring Boot. I designed and built RESTful APIs, 
              optimized SQL queries, and implemented multithreading techniques to improve data processing efficiency. I also utilized Tableau and 
              Power BI to generate data visualizations that provided valuable insights to stakeholders. These experiences have equipped me with a 
                deep understanding of data engineering best practices and the ability to contribute to the success of complex projects
              </p>
            </div>
          </div>
        </section>

        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-1.png"
                    alt="workplace 1 -"
                    width="100%"
                  />
                  <figcaption>workplace-1 Wipro</figcaption>
                </div>
              </figure>
              <h3>Wipro</h3>
              <div>2021-2022</div>
              <p>This is an IT Industry and I worked as an Junior Web Developer</p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-2.png"
                    alt="workplace 2 -"
                    width="100%"
                  />
                  <figcaption>workplace-2 Accenure</figcaption>
                </div>
              </figure>
              <h3>Accenture</h3>
              <div>2022-2023</div>
              <p>
                This is an IT Industry and I worked as an Java Developer.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="bento">
          <h2>
            <small> Previous </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./imgs/bento-1.jpg" alt="Netflix" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-2.jpg" alt="Youtube" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-3.png" alt="canvas" width="100%" />
            </a>
          </div>
        </section>

        <section className="chatbot container">
          <h2>
            <small> talk to me </small>
            chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                I have put together a chatbot here which knows all my skills,work
                experience and has a copy of my CV/Resume. You can use it to ask
                questions about me to get a better idea of who I am and what
                I have done.
              </p>
              <p>
                you can also download my resume here if you want to take a look
                at it. I am currently looking for new oppurtunities so if you
                have a project you think I would be a good fit for, please get in
                touch!
              </p>
              <a href="./Narendra_Resume.pdf" className="button black">
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={"${message.role}"}>
                      <span className={"avatar "}>
                        {message.role === "user" ? "You" : "AI"}
                      </span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
                <form onSubmit={submitForm} className="chat-message">
                  <input
                    type="text"
                    placeholder="Hey Narendra, what skills are you best at?"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button className="button black">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
