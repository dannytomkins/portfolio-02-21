

function About(props) {
  return (
    <div id="about" class="mainitem">
      <div class="about-images">
        <img src={props.aboutItems.img} id="portrait" />
        <a href={props.aboutItems.githubLink} target="_blank"><img src={props.aboutItems.githubImg} class="thumbnail"/></a>
        <a href={props.aboutItems.linkedinLink} target="_blank"><img src={props.aboutItems.linkedinImg} class="thumbnail"/></a>
      </div>
      <div class="about-text">
        <h1>
          {props.aboutItems.intro1}
          <br/>
          {props.aboutItems.intro2}
        </h1>
        <h3>
          information about yourself, work, experience, approach, skills, and courses.
    </h3>

      </div>
    </div>
  )
}

export default About;