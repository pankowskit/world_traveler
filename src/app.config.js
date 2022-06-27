import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Home from "./views/home";
import Privacy from "./views/privacy";
import Review from "./views/review";
import Tours from "./views/tours";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"About",path:"/about",component:<About/>},
    {menuItem:true,menuName:"Tours",path:"/tours",component:<Tours/>},
    {menuItem:true,menuName:"Review",path:"/review",component:<Review/>},
    {menuItem:false,menuName:"",path:"/comingsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

const APP_LINKS = {
    messages: "",
    users: ""
};

export {
    APP_LINKS,
    ERRORS,
    PATHS
}