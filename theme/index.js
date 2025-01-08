exports.render = ({ basics, work }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="resume.css"/>
    <title>${basics.name}</title>
  </head>
  <body>
  <section class="heading">
    <h1>${basics.name}</h1>
    <ol id="contact">
       <li>${basics.phone}</li>
      <li><a href="mailto:${basics.email}">${basics.email}</a></li>
      ${basics.profiles.map((profile) => `<li><a href="${profile.url}">${profile.display_name}</a></li>`).join("")}
    </ol>
  <section/>
  <section/>

  <section class="main-section">
     <h2>SUMMARY</h2>
      <p>${basics.summary}</p>
    </section>
    <section class="main-section">
     <h2>EXPERIENCE</h2>
     <ol class="experience-list">
      ${work.map(
        (exp) => 
        `<li class="experience-item">
          <div class="experience-header">
          <div class="experience-header-1">
            <h3>${exp.name}</h3>
             <h5>${exp.position}</h5>
          </div>
          <div class='experience-header-2'>
            <span>${exp.startDate}-${exp?.endDate ?? "Present"}</span>
            <h5>${exp.location}</h5>
          </div>
          </div>
          <ol class="highlights">
                ${ exp.highlights.map(hi =>`<li>${hi}</li>`).join("") }
          </ol>
      </li>`
      ).join("")}
     </ol
    </section>
  </body>
</html>`;

// const style = `
// h1 {
//     font-size: 2.125rem;
// }

// h2 {
//     font-size: 1.875rem;
// }

// #heading {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     h1, h2 {
//         text-align: center;
//         padding: 10px;
//         margin: 0;
//     }

//     #contact {
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         list-style: none;
//         padding: 0;
//         margin: 0;
//     }

//     #contact li {
//         padding: 2px;
//         margin: 2px;
//     }
// }

// #main-section{
//     h1 {
//         text-align: start;
//     }
// }

// a {
//     text-decoration: none;
// }

// li:not(:last-child):after {
//     content: " | "
// }
// `

