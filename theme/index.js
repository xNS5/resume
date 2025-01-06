exports.render = ({ basics }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="resume.css">
    <title>${basics.name}</title>
  </head>
  <body>
  <section id="heading">
    <h1>${basics.name}</h1>
    <h2>${basics.label}</h2>
     <ul>
      <li><a href="mailto:${basics.email}">${basics.email}</a></li>
      <li><a href="tel:${basics.phone}">${basics.phone}</a></li>
      <li><a href="${basics.url}">${basics.url}</a></li>
      ${basics.profiles
        .map(profile => `<li>${profile.username} (${profile.network})</li>`)
        .join('')}
    </ul>
    <section/>
    <p>${basics.summary}</p>
  </body>
</html>`