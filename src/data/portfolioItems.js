import peopledirectory300img from "../img/peopledirectory300.jpg"
import pantry300 from "../img/pantry300.jpg"
import dinnerandashow300img from "../img/dinnerandashow300.jpg"
import fitnesstracker300img from "../img/fitnesstracker300.jpg"
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
    deployedlink: "https://pantry-group5.herokuapp.com/",
    codelinkImg: github120img,
    codelink: "https://github.com/NW-Group-5/5-Dollar-Idea"
},
{
    id: 2,
    name: "Book Club",
    language: ["JS", "HTML", "CSS"],
    tech: ["Node.js", "Express", "React", "Redux", "Mongoose", "JSON Web Token", "bcrypt", "request", "Bootstrap", "Gravitar"], 
    description: "Currently in development. Take a look at the progress! Book Club, the app that helps you create or organize a book club. Sign up, create a profile, browse books, join a club, or make you own!",
    img: bookclub300, 
    deployedlink: "https://book-club-mern.herokuapp.com/",
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
    deployedlink: "https://brew-hopper-5.herokuapp.com/",
    codelinkImg: github120img,
    codelink: "https://github.com/Final-App/trail-blazer"
},
// {
//     id: 4,
//     name: "Dinner and a Show",
//     language: ["JS", "HTML", "CSS"],
//     tech: ["jQuery", "Bulma", "Materialize", "TVMaze API", "Zomato API"],
//     description: "Stuck inside? Bored? Quarantine got you down? Dinner and a Show is an app designed for our current lifestyle of seeking food and immediate entertainment. Enter your city and it will display the top restaurants in your area and the perfect tv show related to that cuisine!",
//     img: dinnerandashow300img,
//     deployedlink: "https://group-6-project-1.github.io/Dinner-and-a-show/",
//     codelinkImg: github120img,
//     codelink: "https://github.com/group-6-project-1/Dinner-and-a-show"
// },
{
    id: 5,
    name: "MERN Google Books Search",
    language: ["JS", "HTML", "CSS"],
    tech: ["React", "Bootsrap", "Axios", "Google Books API"],
    description: "Search for books and select your favorites on this MERN Stack application!",
    img: merngooglebooks300img,
    deployedlink: "https://boiling-mesa-68358.herokuapp.com/",
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
    deployedlinkImg: github120img,
    deployedlink: "https://dannytomkins.github.io/19-React-Homework-Employee-Directory/",
    codelinkImg: github120img,
    codelink: "https://github.com/dannytomkins/19-React-Homework-Employee-Directory"
},
// {
//     id: 7,
//     name: "Fitness Tracker",
//     language: ["JS", "HTML", "CSS"],
//     tech: ["Mongo", "MongoDB Atlas", "Heroku"],
//     description: "Fitness Tracker",
//     img: fitnesstracker300img,
//     deployedlink: "https://pure-garden-02648.herokuapp.com/?id=60245bce72ca820015b6c5f2",
//     codelinkImg: github120img,
//     codelink: "https://github.com/niceynice/17-NoSQL-Workout-Tracker"
// },
]