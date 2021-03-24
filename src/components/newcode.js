var fullRange = ["A0", "A#0", "B0", "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7", "C8"]

function noteToPitch(n){
  let result = null
    if(n.includes('b')){ // we check to see if the note has a "b" flat symbol, then deal with that situation
        let shiftedNote = n.replace('b', '') // we remove the flat, and then search up the remaining term
        console.log(shiftedNote)
        result = fullRange.indexOf(shiftedNote) //notes start counting from 1, arrays from 0, BUT this time, we want the item right before
    }else{
		result = fullRange.indexOf(n) + 1 // notes start counting from 1, arrays from 0, need to shift up by 1
    }  
  return result
}

function pitchToNote(p){
    return fullRange[p - 1] //We just look at the order of the array, the order matches the pitch order
}

let scales = [1,2,3,4,5,6,7]
let NOTES = ['C','C#', 'D','D#', 'E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B',]

let fullRange = []
for(var y = 0; y < scales.length; y++){
    for(var x = 0; x < NOTES.length; x++){
        let note = NOTES[x] + scales[y]
        fullRange.push(note)
    }
}