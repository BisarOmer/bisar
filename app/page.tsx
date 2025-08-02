export default function Home() {

  const blogs = [
    { name: "Uber Engineering Blog", url: "https://www.uber.com/blog/engineering/" },
    { name: "Airbnb Engineering & Data Science", url: "https://medium.com/airbnb-engineering" },
    { name: "Slack Engineering", url: "https://slack.engineering/" },
    { name: "DoorDash Backend Engineering Blog", url: "https://careersatdoordash.com/engineering-blog/?category=Backend" },
    { name: "Stripe Engineering Blog", url: "https://stripe.com/blog" },
    { name: "System Design Newsletter", url: "https://newsletter.systemdesign.one/" },
    { name: "HelloInterview: System Design in a Hurry", url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction" },
    { name: "Refactoring Guru (Refactoring & Design Patterns)", url: "https://refactoring.guru/" },
  ];

  const courses = [
    {
      title: "MIT 6.824 – Distributed Systems",
      url: "https://www.youtube.com/@6.824/playlists",
    },
    {
      title: "MIT 6.172 – Performance Engineering of Software Systems",
      url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf",
    },
    {
      title: "System Design Walkthroughs",
      url: "https://www.youtube.com/playlist?list=PL5q3E8eRUieWtYLmRU3z94-vGRcwKr9tM",
    },
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900 p-8 font-mono">
      <div className="w-full max-w-3xl space-y-16">

        {/* Header / Intro */}
        <section className="space-y-4 text-left">
          <h1 className="text-4xl font-bold">Bisar Omer</h1>
          <p className="text-base leading-relaxed text-gray-700">
            As a Software Engineer and System Architect with over 4 years of experience, I specialize in building secure, high-performance systems for telecommunications and fintech.
            <br /><br />
            Currently Backend Manager at Ruyat Technologies, I've delivered mission-critical solutions including lawful interception systems, real-time data processing platforms, and secure digital wallets.
          </p>
        </section>

        {/* Skills */}
        <section className="text-left space-y-4">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <div className="text-sm text-gray-800 space-y-1">
            <p><span className="font-semibold">Programming Languages:</span> Java, Golang</p>
            <p><span className="font-semibold">Database:</span> MySQL, Redis, MongoDB, Cassandra</p>
            <p><span className="font-semibold">DevOps:</span> Git, Docker, Docker Compose, Linux</p>
            <p><span className="font-semibold">Other:</span> System Design, REST API, SSE, Distributed Systems, DSA, NATS</p>
          </div>
        </section>

        {/* Experience */}
        <section className="text-left space-y-4">
          <h2 className="text-2xl font-bold">Experience</h2>

          <div className="space-y-6 text-sm text-gray-800">

            {/* Ruyat */}
            <div>
              <p className="font-semibold text-base">Ruyat Technologies – Backend Manager</p>
              <p className="text-gray-600">Jun 2025 – Present · Sulaymaniyah, Iraq</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Developed the Law Enforcement Monitoring Facility (LEMF) for lawful packet interception via OpenLI.</li>
                <li>Managed backend architecture and team delivery for telecom compliance systems.</li>
              </ul>
            </div>

            {/* Netspot */}
            <div>
              <p className="font-semibold text-base">Netspot Solutions – Full Stack to Senior Software Engineer</p>
              <p className="text-gray-600">Feb 2022 – May 2025 · Sulaymaniyah, Iraq</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Scaled telecom platform from 20K to 1M users, delivering performance-critical backend systems.</li>
                <li>Deployed lawful interception systems for VoLTE networks, handling real-time data at telecom scale.</li>
                <li>Built Hakki, a telecom-grade chat app to bypass VoLTE limitations, with SMS/call support.</li>
                <li>Designed an SMS-based Self-Care System for balance recharge, plan changes, and account management.</li>
                <li>Developed a secure digital wallet using Golang & MySQL with real-time transaction processing.</li>
                <li>Led backend of in-house HRM and integrated gifting in CCBS, reducing vendor costs.</li>
                <li>Built CDR collection with Golang + NATS integrated with OCS for postpaid services.</li>
                <li>Modernized company site with Next.js + Strapi; built internal analytics and warehouse systems.</li>
              </ul>
            </div>

            {/* Click Iraq */}
            <div>
              <p className="font-semibold text-base">Click Iraq – Frontend Developer</p>
              <p className="text-gray-600">Jun 2021 – Nov 2021 · Sulaymaniyah, Iraq</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Built a performant real estate web app using Next.js and React.</li>
                <li>Designed responsive UI/UX in Adobe XD for mobile real estate platform.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Awards */}
        <section className="text-left space-y-4">
          <h2 className="text-2xl font-bold">Awards</h2>

          <div className="space-y-2 text-sm text-gray-800">
            <div>
              <p className="font-semibold">Netspot – 2024</p>
              <p className="text-gray-700">
                Received appreciation award for outstanding contributions and commitment to team success.
              </p>
            </div>

            <div>
              <p className="font-semibold">HackaSuly – 2019</p>
              <p className="text-gray-700">
                Built a system to simplify university student transfers as part of the e-government initiative.
              </p>
            </div>
          </div>
        </section>

        {/*Reading */}
        <section className="text-left space-y-4">
          <h2 className="text-2xl font-bold">Reading</h2>

          <p className="text-sm text-gray-800">
            A curated list of blogs, newsletters, and learning resources I follow regularly to stay sharp in system design, backend architecture, and engineering culture:
          </p>

          <ul className="list-disc pl-5 text-sm text-blue-600 space-y-1">
            {blogs.map((blog, index) => (
              <li key={index}>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {blog.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Courses */}
        <section className="text-left space-y-4">
          <h2 className="text-2xl font-bold">Courses</h2>

          <ul className="list-disc pl-5 text-sm text-blue-600 space-y-1">
            {courses.map((course, index) => (
              <li key={index}>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {course.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="text-left space-y-4">
          <h2 className="text-2xl font-bold">Education</h2>

          <div className="space-y-2">
            <p className="text-lg font-semibold">University of Sulaimani</p>
            <p className="text-sm text-gray-600">BSc in Computer Science — Oct 2017 – May 2021 · Sulaymaniyah</p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Relevant Courses:</span><br />
              Operating System · OOP · Database · Network · Computer Architecture · Compiler · AI · Cyber Security · GIS · Web Development · Mobile Application · Information System
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold">American Private Center</p>
            <p className="text-sm text-gray-600">Diploma in English — Feb 2015 – May 2017 · Sulaymaniyah</p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Courses:</span><br />
              American English File 1 · American English File 2 · American English File 3
            </p>
          </div>
        </section>

        {/* Contact Links */}
        <section className="text-left space-y-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul className="text-sm text-gray-800 space-y-1">
            <li>
              <a href="https://www.linkedin.com/in/bisaromer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn: bisaromer
              </a>
            </li>
            <li>
              <a href="https://www.github.com/bisarahmed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub: bisarahmed
              </a>
            </li>
            <li>
              <a href="mailto:biisaromer@gmail.com" className="text-blue-600 hover:underline">
                Email: biisaromer@gmail.com
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
