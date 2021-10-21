let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = SpeechRecognition? new SpeechRecognition() : false

export default recognition
