exports.render = ({ basics, work, education, skills, projects }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="theme/stylesheet.css"/>
    <title>${basics.name}</title>
  </head>
  <body>
  <article>
  <div id="heading">
    <h1>${basics.name}</h1>
    <ol id="contact">
      <li>${basics.phone}</li>
      <li><a href="mailto:${basics.email}">${basics.email}</a></li>
      ${basics.profiles.map((profile) => `<li><a href="${profile.url}">${profile.display_name}</a></li>`).join("")}
    </ol>
  </div>
  ${basics?.summary && `
    <section id="summary-section" class="main-section">
      <h2>SUMMARY</h2>
      <p>${basics.summary}</p>
  </section>
    `}
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
                    <p><i>${exp.position}</i></p>
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