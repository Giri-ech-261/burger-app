import React from 'react';
import {hp, Images, wp} from '../../theme';
import VideoPlayer from 'react-native-video-player'

const VideoMediaPlayer = () => {
    return (
        <VideoPlayer
            video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
            videoWidth={1600}
            videoHeight={900}
            thumbnail={require('../../assets/images/productDetail/videoThumb.png') }
            style={{borderRadius: 15,backgroundColor: 'transparent'}}
        />
    )
}

export default VideoMediaPlayer
