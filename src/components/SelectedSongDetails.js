import React from 'react';
import { connect } from 'react-redux';

const SelectedSongDetails = ({selectedSong})=>{

    if(!selectedSong){
        return(<div>Please Select a Song</div>)
    }else{
        return(
            <div>
                <h3>Title : {selectedSong.title}</h3>
                <br /> 
                <p>Duration : {selectedSong.duration}</p>
            </div>
        );
    
    }

    
}

const mapStateToProps = (state)=>{
    return { selectedSong : state.selectedSong}
}

export default connect(mapStateToProps)(SelectedSongDetails); 