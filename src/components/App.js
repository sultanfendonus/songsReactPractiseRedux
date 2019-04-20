import React from 'react';
import SongsList from './SongsList';
import SelectedSongDetails from './SelectedSongDetails';

const App = () => {
     return(
         
         <div>
             <div className = "container">
                <div className = "row">
                    <div className = "col-8">
                        <SongsList />
                    </div>

                    <div className="col-4">
                        <SelectedSongDetails />
                    </div>

                </div>
                
             </div>

         </div>
     )
}


export default App;