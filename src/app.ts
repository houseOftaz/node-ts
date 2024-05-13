import express from "express";
import { App } from "./services/app/app.service";





// const Cat = mongoose.model('Cat', { name: String, race: String })

// const kitty = new Cat({ name: 'Korben', race: 'Bingal' });
// kitty.save().then(() => console.log('meow'));



// permet de lancer l'application
App.initApp(express());
