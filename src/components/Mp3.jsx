import CantoHerido from './music/Canto Herido.mp3'

function MP3(){
    return (
        <div className='m-auto'>
            <audio src={CantoHerido} autoplay='true' controls='true' loop='true'></audio>
        </div>
    );
}

export default MP3;