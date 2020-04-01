module.exports = {
  /* Your site config here */
  siteMetadata: {
		siteUrl: `https://formless.github.io`,
    name: `Peter Le`,
    role: ``,
    email: `PeterALe1@gmail.com`,
    socialMedia : [
        {"name": "github", "link": "https://github.com/formless"},
        {"name": "linkedin", "link": "https://www.linkedin.com/in/peter-le-a4112761/"},
        // {"name": "facebook", "link": "https://facebook.com"},
        // {"name": "twitter", "link": "https://twitter.com"},
        {"name": "instagram", "link": "https://www.instagram.com/le.peter.music/"},
        {"name": "youtube", "link": "https://www.youtube.com/playlist?list=PLX0IxtXxz_ro_LPtwtsKxefpKOTmJV2XL"}
      ],
    about: `
      <h4>Software developer, Heavy Metal musician, and martial artist based in Northern Virginia</h4>
      <h5>Seeking work as a developer, though open to music and martial arts projects</h5>
      <p></p>
      <p>See the PDF version of my resume <a href="https://drive.google.com/open?id=1XePzTMCTWWLOGHEaey61JJtIXf5m8160">here</a>.</p>
      `,
    education: [
      {
        degree: "Bachelor of Science",
        major: "Computer Science",
        when: "2009-2013",
        school: "University of Virginia",
        where: "Charlottesville, VA",
        moreInfo: `
          <p>Rodman Engineering Scholar concentrating on Computer Science and Music studies.</p>
          <p>Treasurer, President, and Coach at the Virginia Wushu Club where I organized practices, trips, and a national collegiate tournament.
          Coach for Virginia Sanda (Chinese kickboxing).</p>
          <p>Senior Project: CakePHP application in service of Center for Nonprofit Excellence</p>
          <p>Notable Coursework:</p>
          <ul>
            <li>Defense Against the Dark Arts (Cybersecurity)</li>
            <li>Game Development</li>
            <li>Human Computer Interaction</li>
            <li>Operating Systems</li>
          </ul>
        `
    },
      {
        degree: "Advanced Studies",
        when: "2004-2009",
        school: "Thomas Jefferson High School for Science and Technology",
        where: "Alexandria, VA",
        moreInfo: `
          <p>Hung around the Computer Systems Lab (Syslab), where I did my senior project. Participated in Vietnamese Student Association and Future Business Leaders of America.</p>
          <p>Notable Coursework:</p>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Computer Architecture</li>
            <li>Parallel Computing</li>
          </ul>`
    },
  ],
  experience: [
      {
        role: "Senior Software Engineer",
        when: "2014-Present",
        company: "Custom Ink",
        where: "Fairfax, VA",
        moreInfo: `Design and develop Ruby on Rails, Java, and Javascript web applications and other software to support internal business needs.
        Contribute to development culture through mentoring, code review, and regular evaluation of development practices.
        Interview and evaluate potential Inkers. One time hand model.`
      },
      {
        role: "Software Engineer",
        when: "2013-2014",
        company: "Northrop Grumman",
        where: "Fairfax/Chantilly VA",
        moreInfo: `Worked with Python, Qt, and MySQL to support signal processing software -- designed a tool to compare and backup data across sites.
        Django application development to monitor satellite communications hardware, improved automated monitoring capabilities and added support for different devices.`
      },
      {
        role: "Software Intern",
        when: "2012-2013",
        company: "Lockheed Martin",
        where: "National Reconaissance Office",
        moreInfo: `Worked with aerospace engineers to identify existing bugs, and software development deficiencies.`
      },
      {
        role: "Intern",
        when: "2011",
        company: "Metron",
        where: "Reston, VA",
        moreInfo: `Developed geographical mapping tool with Java and MATLAB`
      },
    ],
    skills: [
      {
        name: "Ruby",
        level: "75",
        experience: "Most Comfortable",
        moreInfo: "Working primarily with Ruby on Rails from high school until now"
      },
      {
        name: "Java",
        level: "65",
        experience: "Comfortable",
        moreInfo: "Most of my government contracting work was in Java"
      },
      {
        name: "Python",
        level: "55",
        experience: "Some",
        moreInfo: "Experience with Django, PyQt, and exposure to scikit-learn"
      },
      {
        name: "Javascript",
        level: "55",
        experience: "Some",
        moreInfo: "Mostly ES6 and jQuery, trying to learn React via Gatsby/NextJS"
      },
      {
        name: "Amazon Web Services",
        level: "25",
        experience: "Certified Associate Developer (2018)",
        moreInfo: "Most notably using S3 and DynamoDB"
      },
      {
        name: "Salesforce",
        level: "25",
        experience: "Some",
        moreInfo: "Hooked up Custom Ink's backend and Salesforce together with custom software"
      },
    ],
    interests: [
      {
        name: "Guitar",
        moreInfo: `
        <p>Notable Projects</p>
        <ul>
          <li><a href="https://dsouzaleproject.bandcamp.com/">D'Souza & Le Project</a> (Progressive Metal with <a href="https://preetam.io">Preetam D'Souza</a>)</li>
          <li><a href="https://peterle1.bandcamp.com/">The Third Eye</a> (Solo metal album)</li>
          <li>Session guitar for Team Red Productions' <a href="https://www.youtube.com/watch?v=P822hJj8ROA">"Mulan: An East Side Story"</a></li>
          <li>I'm in a Splatoon cover band</li>
        </ul>
        `
      },
      {
        name: "Combat Sports",
        moreInfo: `
        <ul>
          <li>Muay Thai, Mixed Martial Arts, and Brazilian Jiujitsu since 2011</li>
          <li>Ran Mixed Martial Arts classes at Fairfax Jiu Jitsu from late 2016 to early 2017</li>
          <li>Substitute Muay Thai coach at Fairfax Jiu Jitsu</li>
          <li>Participated in/conducted fight camps for teammates and fought twice meself</li>
          <li>Martial arts techniques and analysis on <a href="https://www.youtube.com/playlist?list=PLX0IxtXxz_ro_LPtwtsKxefpKOTmJV2XL">YouTube</a></li>
        </ul>

        `
      },

    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default"
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
    {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
          fonts: [
            {
               family: `IBM Plex Mono`,
            }
          ]
       }
    }
  ],
}
