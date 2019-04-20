import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongsList extends React.Component {

    render(){
        
        let songsHtmlList = this.props.songs.map((songs)=>{
            return(
                <a href="#" onClick={()=>this.props.selectSong(songs)} key={songs.title} className="list-group-item list-group-item-action">{songs.title}</a>
            ) 
            
        });

        return(
            <div>
                <div className="list-group">
                {songsHtmlList}
                
            </div>
            </div>
        )
    }
}

const mapStatToProp = (state) =>{
    return {songs  : state.songs};
}

export default connect(mapStatToProp,{ selectSong })(SongsList);