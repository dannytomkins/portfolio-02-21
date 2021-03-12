

function About(props) {
  return (
    <div id="about" class="mainitem">
      <div class="about-images">
        <img src={props.aboutItems.img} id="portrait" />
        <a href={props.aboutItems.githubLink} target="_blank"><img src={props.aboutItems.githubImg} class="thumbnail"/></a>
        <a href={props.aboutItems.linkedinLink} target="_blank"><img src={props.aboutItems.linkedinImg} class="thumbnail"/></a>
      </div>
      <div class="about-text">
        <h2>
          {props.aboutItems.intro1}
          <br/>
          {props.aboutItems.intro2}
        </h2>
        <p>
          Hi! Welcome to my portfolio page. I'm a full stack web developer and a student at Northwestern University School of Professional Studies Coding Bootcamp.
    </p>
        <p>
          information about yourself, work, experience, approach, skills, and courses.
    </p>

      </div>
    </div>
  )
}

export default About;