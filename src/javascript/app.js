//Import all from the component files
//DONE: Create a Mounter
import componentMounter from './componentMounter.js'
const mainDiv = document.querySelector("#main")
window.addEventListener('load', () => {
    componentMounter(mainDiv)
})
// TODO: create a module bundler
// TODO: create a templating engine
  //CONCEPT: Tagged Template Literals - Vanilla Template Day 2
  /* Apparently you can chuck whatever arguements you want in the func for want after the func`blah ${blah}` */
  //CONCEPT: Vanilla Template, Day 2 Strings.reduce function -- Vanilla Tample Day2 - How does it work?
  //CONCEPT: Vanilla Template, Day 3 Curried Functions - this is where ()() comes in as well, it calls a curried function -- also see partial application -- and look more into this, in the frontend framework tutorial he uses it as a cool way to abstract things
//First I will work through the template engine part of the front end framework builder course from mfrachet
//TODO: create a router

//TODO: create state management... somehow??
console.log("end of file")
//TODO: create a WYSIWYG editor and/or page builder
//TODO: create a static site generator - and/or CMS?