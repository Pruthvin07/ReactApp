const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Calm and Peaceful",
      artist: "LesFM",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Calm-and-Peaceful.mp3?alt=media&token=1111b21e-4d1b-400f-bacd-9b1f40733ca6",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fcalm%20and%20peaceful.jpg?alt=media&token=43fb5282-8da7-4e1b-9549-1218078ea06c",
    },
    {
      id: 2,
      favourite: false,
      songName: "Child Dreams",
      artist: "Keys of Moon",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Child-Dreams.mp3?alt=media&token=ad6d01ea-0241-4a33-b0d4-5365440375be",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fchild%20dream'.jpg?alt=media&token=e861ac93-fb64-45f9-86c7-581f03f662cc",
    },
    {
      id: 3,
      favourite: false,
      songName: "ForestWalk",
      artist: "Copyright free music",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/ForestWalk-320bit.mp3?alt=media&token=38407a1f-ab82-4e0a-99d4-c227ff31077a",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fforestwalk.jpg?alt=media&token=7ab722d7-874f-4499-bb9a-91b535bb91c6",
    },
    {
      id: 4,
      favourite: false,
      songName: "Heart Of The Ocean",
      artist: "Copyright free music",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Heart-Of-The-Ocean.mp3?alt=media&token=61c53dc1-d529-402e-9715-3be4989cb74c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fheart%20of%20the%20ocean.jpg?alt=media&token=5c67f944-a26d-448f-8b67-b5a7ac5c430e",
    },
    {
      id: 5,
      favourite: false,
      songName: "Morning Routine Lofi Study-Music",
      artist: "Copyright free music",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Morning-Routine-Lofi-Study-Music.mp3?alt=media&token=7a45d1eb-336e-43cb-856f-696748545801",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fmorning%20routine.jpg?alt=media&token=b700b5b8-a95d-4a68-8ead-04b4109852a0",
    },
    {
      id: 6,
      songName: "RELAX LOFI",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/RELAX-LOFI-.mp3?alt=media&token=b8feba7b-11d1-4524-8c3d-bca84d5a50c5",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2FRELAX-LOFI.jpg?alt=media&token=948201bb-be85-491b-a150-f5945ad0928f",
    },
    {
      id: 7,
      favourite: false,
      songName: "Dancing Dandelions",
      artist: "MODY",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Dancing%20Dandelions.mp3?alt=media&token=4b3acb87-31de-4bf6-9588-d4067aea81bd",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2FDancing%20dan.jpg?alt=media&token=6b90f856-6854-4227-b372-337e480b8026",
    },
    {
      id: 8,
      favourite: false,
      songName: "Walking to the Park at 3 A.M",
      artist: "MODY",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Walking%20to%20the%20Park%20at%203%20A.M.mp3?alt=media&token=279934aa-7fdf-4d94-b59b-df5b88cb1ee0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2FDancing%20den.jpg?alt=media&token=38bf4c97-9aef-4fa6-ad4e-b37eb93b271b",
    },
    {
      id: 9,
      favourite: false,
      songName: "Days End",
      artist: "MODY",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Days%20End.mp3?alt=media&token=37795d52-840b-49bc-ae14-060698a3d669",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fday%20end.jpg?alt=media&token=4c401b44-019d-4f4f-be43-f2d5064a7bdc",
    },
    {
      id: 10,
      favourite: false,
      songName: "Om 🕉",
      artist: "🕉",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Om%20chanting.mp3?alt=media&token=782643ba-dbf4-4e5c-ade3-4acfd6b12793",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2FOm.png?alt=media&token=fe3ce142-ea2a-4b6d-8aff-122b169201c5",
    },
    {
      id: 11,
      favourite: false,
      songName: "Krishna",
      artist: "peace of mind",
      song: "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/jai%20sri%20Krishna.mp3?alt=media&token=dc1cd945-7d43-431f-90da-abfab2b66817",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/house-of-healing-3f267.appspot.com/o/Images%2Fkrishna.jpg?alt=media&token=302a8bee-ce2e-4728-9837-0a4f383cd297",
    }
  ];
  
  export { Songs };