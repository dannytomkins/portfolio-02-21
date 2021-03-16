function Contact(props) {
    return (
        <div id="contact" class="mainitem-2">
            <h2>
                Contact
            </h2>
        <li>
        <a href="mailto:tomkinsdan@gmail.com">EMAIL</a>

        </li>
        <a href={props.aboutItems.githubLink} target="_blank"><img src={props.aboutItems.githubImg} class="thumbnail"/></a>
        <a href={props.aboutItems.linkedinLink} target="_blank"><img src={props.aboutItems.linkedinImg} class="thumbnail"/></a>
        </div>
    )
}

export default Contact;