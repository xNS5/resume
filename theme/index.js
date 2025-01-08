const style =
`
@media screen {
    .header, .footer {
        display: none;
    }
}
body {
    width: 8.5in;
    height: 11in;
    font-family: Arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
    padding: 1em;
    margin: 0 auto;
  }

h1 {
    font-size: 2em; 
}

h2 {
    font-size: 1.5em; 
}

h3 {
     font-size: 1.2em; 
}

h5 { 
    font-size: .83em; 

}

h6 { 
    font-size: .75em; 
}
h1, h2, h3, h4,
h5, h6 { 
    font-weight: bolder 
}

a {
    text-decoration: none;
}

#heading {
    display: flex;
    flex-direction: column;
    
    h1, h2 {
        text-align: center;
        padding: 0.5rem;
        margin: 0;
    }

    #contact {
        font-size: 0.8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #contact li {
        padding: 2px;
        margin: 2px;
    }
    
    #contact li:not(:last-child):after {
        content: " | "
    }

}

.main-section{
    page-break-inside: avoid;
    clear:both;
    h2 {
        font-size: 1.17em;
        text-align: start;
        width: 100%;
        display: block;
        padding: 0;
        margin: 0;
        border-bottom: 2px solid black;
        width: 100%;
    }
}

ol {
    list-style: none;
    padding-left: 0;
    
    ol {
        list-style: disc;
    }

    p {
        margin: 0;
        padding: 0;
    } 
}

.section-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 0.5rem 0 0.5rem 0;

    h3, h5 {
        margin: 0;
        padding: 0;
    }
    h5 {
        font-weight: normal
    }

    .header-1 {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    
    .header-2 {
        display: flex;
        flex-direction: column;
        text-align: end;
    }
}


.highlights {
    list-style: disc;
    padding-left: 2rem;
}

.technical-skills {
    padding-left: 0;
    list-style: none;
}
`

exports.render = ({ basics, work, education, skills, projects }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${basics.name}</title>
  </head>
  <body>
  <style>
  ${style}
  </style>
  <article>
  <div id="heading">
    <h1>${basics.name}</h1>
    <ol id="contact">
      <li>${basics.phone}</li>
      <li><a href="mailto:${basics.email}">${basics.email}</a></li>
      ${basics.profiles.map((profile) => `<li><a href="${profile.url}">${profile.display_name}</a></li>`).join("")}
    </ol>
  </div>
  <section id="summary-section" class="main-section">
    <h2>SUMMARY</h2>
    <p>${basics.summary}</p>
  </section>
  ${work && `
    <section id="experience-section" class="main-section">
    <h2>EXPERIENCE</h2>
    <ol>
      ${work
        .map(
          (exp) =>
            `<li class="experience-item">
                <div class="section-header">
                  <div class="header-1">
                    <h3>${exp.name}</h3>
                    <p>${exp.position}</p>
                  </div>
                  <div class='header-2'>
                    <span>${exp.startDate} - ${exp?.endDate ?? "Present"}</span>
                    <p>${exp.location}</p>
                  </div>
                </div>
                <ol class="highlights">
                      ${exp.highlights.map((hi) => `<li>${hi}</li>`).join("")}
                </ol>
      </li>`
        )
        .join("")}
    </ol>
    </section>
    `}
    ${skills && `    
      <section id="technical-skills-section" class="main-section">
        <h2>TECHNICAL SKILLS</h2>
          <ol id="technical-skills">
          ${skills.map(skill => `<li><b>${skill.name}</b>: ${skill.highlights.join(", ")}</li>`).join("")}
          </ol>
    </section>`}
    ${projects && `
      <section id="projects-section" class="main-section">
        <h2>PROJECTS</h2>
          <ol>
            ${projects
              .map(
                (project) =>
                  `<li>
                <div class="section-header">
                <div class="header-1">
                <h3>${project.name}</h3>
                ${project?.description ? `<p>${project.description}</p>` : ''}
                ${project.technologies && `<p><i>${project.technologies.map(tech => `${tech}`).join(', ')}</i></p>`}
              </div>
              <div class='header-2'>
                <span>${project.startDate} - ${project?.endDate ?? "Present"}</span>
              </div>
              </div>
              <ol class="highlights">
                    ${project.highlights.map((hi) => `<li>${hi}</li>`).join("")}
              </ol>
            </li>`
              )
              .join("")}
          </ol>
    </section>`}
   ${education && ` 
    <section id="education-section" class="main-section">
    <h2>EDUCATION</h2>
    <ol>
    ${education.map(edu => `<li>
      <div class="section-header">
        <div class="header-1">
          <h3>${edu.institution}</h3>
          <span>${edu.studyType} in ${edu.area} ${edu.minor && `, Minor in ${edu.minor}`}</span>
        </div>
        <div class="header-2">
          <span>${edu.startDate} - ${edu?.endDate ?? "Present"}</span>
          <p>${edu.location}</p>
        <div>
      </div>
      </li>`).join("")}
    </ol>
    </section>`}
    </article>
  </body>
</html>`;