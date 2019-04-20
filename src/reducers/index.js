import { combineReducers } from 'redux'

const songListReducer = ()=>{

    return [
        {title : "Chand Mama Aj boddo Aka", duration : "4:05"},
        {title : "Bheegi Bheegi", duration : "3:45"},
        {title : "One Republic-Counting Star", duration : "4:45"},
        {title : "Ek Paye Nupur Amar", duration : "3:30"}
    ];
}

const selectedSongReducer = (selectedSong = null, actions)=>{
    if(actions.type === 'SELECT_SONG'){
        return actions.payload;
    }

    return selectedSong;

}

export default combineReducers({
    songs : songListReducer,
    selectedSong : selectedSongReducer
});


