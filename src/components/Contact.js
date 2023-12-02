function Contact(props) {
    return (
        <div id="contact" class="mainitem-2">
        <div class="about-images">
        <a href={props.aboutItems.githubLink} target="_blank"><img src={props.aboutItems.githubImg} class="thumbnail"/></a>
        <a href={props.aboutItems.linkedinLink} target="_blank"><img src={props.aboutItems.linkedinImg} class="thumbnail"/></a>
        <a href={props.aboutItems.emailLink} target="_blank"><img src={props.aboutItems.emailImg} class="thumbnail"/></a>
        {/* <a href={props.aboutItems.resume} target="_blank" download><img src={props.aboutItems.resumeImg} alt="download resume" class="thumbnail"/></a> */}
        </div>
        </div>
    )
}

export default Contact;