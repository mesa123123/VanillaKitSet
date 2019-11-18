//Import all from the component files
//DONE: Create a Mounter
import mountComponent from './componentMounter.js'
import firstComponent from './components/FirstComponent.js'
//CONCEPT: VanillaTemplateDay5 - Using a Curried Function you can abstract out the calls to the main thread as opposed to having all the components ount by name in the actual component mounter file
//QUESTION: Day5; in mfrachets tutorial, he is somehow importing index.js files without actually declaring their name, and simpy importing the folder itself, how does this work??
const firstComponentElement = new firstComponent('Jim', 'Smith')
mountComponent('#main', firstComponentElement)
// TODO: create a module bundler
// TODO: create a templating engine
  //CONCEPT: Tagged Template Literals - Vanilla Template Day 2
  /* Apparently you can chuck whatever arguments you want in the func for want after the func`blah ${blah}` */
  //CONCEPT: Vanilla Template, Day 2 Strings.reduce function -- Vanilla Tample Day2 - How does it work?
  //CONCEPT: Vanilla Template, Day 3 Curried Functions - this is where ()() comes in as well, it calls a curried function -- also see partial application -- and look more into this, in the frontend framework tutorial he uses it as a cool way to abstract things
//First I will work through the template engine part of the front end framework builder course from mfrachet
//TODO: create a router

//TODO: create state management... somehow??
console.log("end of file")
//TODO: create a WYSIWYG editor and/or page builder
//TODO: create a static site generator - and/or CMS?