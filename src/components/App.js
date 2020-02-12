import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';

class App extends Component {
    state = {
        videos: []
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        })
        this.setState(
            {
                videos: response.data.items
            }
        )
    };
    onVideoSelect=(video)=>{
        console.log('selected',video)
    }
    //with promise .then() !!JUST FOR FUN
    // onTermSubmit = (term) => {
    //     const promise = youtube.get('/search',{
    //         q:term
    //     })
    //     promise.then(response => {
    //         console.log(response)
    //     })
    // }

    render() {
        return (
            <div className="ui container">
                <SearchBar 
                    onTermSubmit = {this.onTermSubmit}
                />
                <VideoList
                    onVideoSelect = {this.onVideoSelect}
                    videos = {this.state.videos}
                />
            </div>
        );
    }
}
export default App;