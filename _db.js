let games=[
    {id:'1',title:'FIFA',platform:['PS4','XBOX']},
    {id:'2',title:'GTA V',platform:['PS4','XBOX','PC']},
    {id:'3',title:'Call of Duty',platform:['PC']},
    {id:'4',title:'PUBG',platform:['Mobile']},
    {id:'5',title:'Call of War',platform:['PS4','XBOX','PC']},
]

let authors=[
    {id:'1',name:'Aniket',verified:true},
    {id:'2',name:'Mario',verified:true},
    {id:'3',name:'Messi',verified:true},
]
  
let reviews=[
    {id:'1',rating:5,Content:'Awesome Game',author_id:'1',game_id:'2'},
    {id:'2',rating:4,Content:'Good Game',author_id:'2',game_id:'1'},
    {id:'3',rating:1,Content:'Bad Game',author_id:'3',game_id:'3'},
    {id:'4',rating:7,Content:'Bad Game',author_id:'2',game_id:'4'},
    {id:'5',rating:8,Content:'Bad Game',author_id:'2',game_id:'5'},
    {id:'6',rating:9,Content:'Bad Game',author_id:'1',game_id:'2'},
    {id:'7',rating:6,Content:'Bad Game',author_id:'3',game_id:'1'},
]

export default {games,authors,reviews}