interface Details {
    author: string;
    year: number;
}


interface AudioPlayer {

    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration } = audioPlayer;

const { details: details } = audioPlayer;

const { author: author } = details;


const [,,trunks = 'Not found'] : string[] = ['Goku','Vegeta'];

//const trunks = dbz[3] || 'No hay personaje en esa posicion.';

console.log('Personaje 3: ', trunks);



// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);




export {};