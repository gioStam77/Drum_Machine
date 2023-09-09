// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

const audiosClips = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];




const App = () => {
  const [volume, setVolume] = React.useState(0.5);
  const [text, setText] = React.useState("");
  const [active, setActive] = React.useState(false);

  return /*#__PURE__*/React.createElement("div", { id: "drum-machine", className: "container-fluid p-5 bg-primary text-white text-center" }, /*#__PURE__*/
  React.createElement("h1", null, "Drum Machine"), /*#__PURE__*/
  React.createElement("div", { id: "display", className: "container-fluid w-50 m-auto  row " },
  audiosClips.map(item => /*#__PURE__*/React.createElement(DrumPad, { key: item.id, item: item, volume: volume, setText: setText, active: active }))), /*#__PURE__*/


  React.createElement("h6", null, "volume"), /*#__PURE__*/
  React.createElement("input", { type: "range", step: "0.01", onChange: e => setVolume(e.target.value), value: volume, max: "1", min: "0" }), /*#__PURE__*/
  React.createElement("h2", null, text));
};

const DrumPad = ({ item, volume, setText }) => {
  //  const playSound = ()=>{
  //   const audioTag=document.getElementById(item.keyTrigger);
  //   audioTag.play();
  // }
  React.useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === item.keyCode) {
        playSound();
      }
    });
    return () => document.removeEventListener("keydown");
  }, []);

  const audioElement = React.useRef();

  const playSound = () => {
    audioElement.current.play();
    audioElement.current.volume = volume;
    setText(item.id);
  };

  return /*#__PURE__*/(
    React.createElement("div", { onClick: playSound, className: "drum-pad col-4 bg-dark text-info p-1 " }, /*#__PURE__*/
    React.createElement("h1", { className: "btn btn-danger btn-lg " }, item.keyTrigger), /*#__PURE__*/
    React.createElement("audio", { className: "clip", id: item.keyTrigger, src: item.url, ref: audioElement })));

};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));