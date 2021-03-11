

import shuffle from "lodash.shuffle";
export default () => {
    let images = [
        {
            name:"elephant", 
            img: "src/imgs/elephant.png", 
            flipped: false, 
        },
        {
            name: "snake",
            img: "src/imgs/snake.png",
            flipped: false, 
        },
        {
            name: "turtle",
            img: "src/imgs/turtle.png",
            flipped: false,
        },
        {
            name: "parrot", 
            img: "src/imgs/parrot.png", 
            flipped: false,
        },
        {
            name: "panda",
            img: "src/imgs/panda.png",
            flipped: false, 
        },
        {
            name: "giraffe",
            img: "src/imgs/giraffe.png",
            flipped: false,
        },
        {
            name: "rhino", 
            img: "src/imgs/rhino.png", 
            flipped: false,
        },
        {
            name: "sloth",
            img: "src/imgs/sloth.png",
            flipped: false, 
        },
        {
            name: "rabbit",
            img: "src/imgs/rabbit.png",
            flipped: false,
        },
        {
            name: "fox", 
            img: "src/imgs/fox.png", 
            flipped: false,
        },
        {
            name: "frog",
            img: "src/imgs/frog.png",
            flipped: false, 
        },
        {
            name: "penguin",
            img:"src/imgs/penguin.png",
            flipped: false,
        },
        {
            name: "pig", 
            img: "src/imgs/pig.png", 
            flipped: false,
        },
        {
            name: "cat",
            img: "src/imgs/cat.png",
            flipped: false, 
        },
        {
            name: "flamingo",
            img: "src/imgs/flamingo.png",
            flipped: false,
        },
        {
            name: "lion",
            img: "src/imgs/lion.png",
            flipped: false,
        }
    ]
    let cards = [];

    for (let i=0; i<images.length; i++){
        const card = images[i];
        cards.push(card);
        cards.push({...card});
        
    }

    return(
        shuffle(cards)
    )
}
