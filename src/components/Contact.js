function Contact(props) {
    return (
        <div id="contact" class="mainitem-2">
        <div class="about-images">
        <a href={props.aboutItems.githubLink} target="_blank"><img src={props.aboutItems.githubImg} class="thumbnail"/></a>
        <a href={props.aboutItems.linkedinLink} target="_blank"><img src={props.aboutItems.linkedinImg} class="thumbnail"/></a>
        </div>
        </div>
    )
}

export default Contact;