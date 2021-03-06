import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
    };

    // this.state.current = () => { exampleVideoData[this.state.currentIndex].id.videoId; },
    // this.state.list = exampleVideoData.filter(eachVideo => eachVideo.id.videoId !== this.current);
    //click function that changes current to videoId of clicked thing

  }

  clickHandler (e) {
    this.setState({
      currentVideo: e
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList clickHandler = {this.clickHandler.bind(this)} videos = {exampleVideoData}/>
          </div>
        </div>
      </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;