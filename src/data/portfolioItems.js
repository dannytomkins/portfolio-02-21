import peopledirectory300img from "../img/peopledirectory300.jpg"
import pantry300 from "../img/pantry300.jpg"
import emily300img from "../img/emily300.png"
import brewhopper300img from "../img/brewhopper300.jpg"
import merngooglebooks300img from "../img/merngooglebooks300.jpg"
import bookclub300 from "../img/bookclub300.jpg"
import github120img from "../img/github120.png"


export const portfolioItems = [
{
    id: 1,
    name: "Pantry",
    language: ["JS", "HTML", "CSS", "SQL"],
    tech: ["jQuery", "Node.js", "Express", "Sequelize", "Passport.js", "Bulma", "Materialize", "Spoonacular API"], 
    description: "Ever stuck with a bunch of ingredients but not sure what you can cook? Pantry brings recipes from your personal pantry to your fingertips.",
    img: pantry300, 
    deployedlink: null,
    codelinkImg: github120img,
    codelink: "https://github.com/NW-Group-5/5-Dollar-Idea"
},
{
    id: 4,
    name: "Emily Breidenbach - Portfolio",
    language: ["JS", "HTML", "CSS"],
    tech: ["React"],
    description: "Emily Breidenbach's art and teaching portfolio page. Responsive design. Built with React.",
    img: emily300img,
    deployedlink: "https://dannytomkins.github.io/emily-breidenbach-portfolio/",
    codelinkImg: github120img,
    codelink: "https://github.com/dannytomkins/emily-breidenbach-portfolio"
},
{
    id: 7,
    name: "Sketches-2023",
    language: ["JS", "HTML", "CSS"],
    tech: ["React", "p5.js", "p5 sound library", "react-router"],
    description: "sketches-2023 presents a collection of p5.js sketches created in 2023, each 1080 x 1080 pixels accessible through a React-based web application with certain sketches responding to various user imput. p5.js is a JavaScript library that simplifies creative coding, enabling artists to seamlessly blend interactivity and visuals to be accessed on a web browser. For optimal viewing, desktop screens are recommended due to the sketch size, ensuring the best appreciation of details and overall experience.",
    img: peopledirectory300img,
    deployedlinkImg: github120img,
    deployedlink: "https://res.cloudinary.com/dinqd8kuj/image/upload/v1700862358/dannytomkinscom/sketches-2023-1_feq9cc.jpg",
    codelinkImg: github120img,
    codelink: "https://github.com/dannytomkins/sketches_1672552800-1704088799"
},
{
    id: 2,
    name: "Book Club",
    language: ["JS", "HTML", "CSS"],
    tech: ["Node.js", "Express", "React", "Redux", "Mongoose", "JSON Web Token", "bcrypt", "request", "Bootstrap", "Gravitar"], 
    description: "Currently in development. Take a look at the progress! Book Club, the app that helps you create or organize a book club. Sign up, create a profile, browse books, join a club, or make you own!",
    img: bookclub300, 
    deployedlink: null,
    codelinkImg: github120img,
    codelink: "https://github.com/dnnytomkins/book-club"
},
{
    id: 3,
    name: "Brew Hopper",
    language: ["JS", "HTML", "CSS"],
    tech: ["React", "Node.js", "Express", "Sequelize", "Passport.js", "Axios", "Material-UI", "Open Brewery DB"],
    description: "Welcome to Brew Hopper, The app that lets you plan a brewery crawl by searching your city or a city you want to visit. Just sign up, Login, search a city and let Brew Hopper do the rest! Brew Hopper utilizes the Open Brewery DB API to find a brewery near you!",
    img: brewhopper300img,
    deployedlink: null,
    codelinkImg: github120img,
    codelink: "https://github.com/Final-App/trail-blazer"
},
{
    id: 5,
    name: "MERN Google Books Search",
    language: ["JS", "HTML", "CSS"],
    tech: ["React", "Bootsrap", "Axios", "Google Books API"],
    description: "Search for books and select your favorites on this MERN Stack application!",
    img: merngooglebooks300img,
    deployedlink: null,
    codelinkImg: github120img,
    codelink: "https://github.com/dannytomkins/mern-google-books-search"
},
{
    id: 6,
    name: "People Directory",
    language: ["JS", "HTML", "CSS"],
    tech: ["React", "Bootstrap", "Random User Generator API"],
    description: "A people directory with sorting and searching functionality.",
    img: peopledirectory300img,
    deployedlink: "https://dannytomkins.github.io/19-React-Homework-Employee-Directory/",
    codelinkImg: github120img,
    codelink: "https://github.com/dannytomkins/19-React-Homework-Employee-Directory"
}
]