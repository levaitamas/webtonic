var dice = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var cards = [
    {
	"instruction": "use",
	"body": "two notes. When you get bored, keep one and pick a new one. Repeat for as long as you can.",
	"dices": 2,
	"note_top": null,
	"note_bottom": null,
	"image": null
    },
    {
    	"instruction": "play",
    	"body": "a melody that you know well. Now repeat it over and over, but alter it by changing some (or all) of the pitches. Do not change the rhythms.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "turn on",
    	"body": "the TV or radio. Improvise, while you listen to whatever is on, but don't think about the sounds you're making. Just keep making sounds.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "pick",
    	"body": "two notes and make up a simple rhythmic pattern. One person plays this while the other improvises over it. If there are more than two people, rotate.",
    	"dices": 2,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "watch",
    	"body": "TV or NetFlix on mute. Make up a new soundtrack.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "describe",
    	"body": "what you did last weekend, using whatever notes or sounds you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "three notes until you get bored. Then pick three new ones. Repeat for as long as you can.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "invent",
    	"body": "a short melody. Improvise using the shape of the melody. Go for as long as you can.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "just one interval. You are free to move it around using as many pitches as you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play",
    	"body": "“telephone.” One person improvises a phrase and the next person imitates it. It's OK if the notes aren't right, just try to copy the shape. Pass it on.",
	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "start",
    	"body": "playing without discussing key, form, genre, or anything else. Try to “find” each other, establish a consistent rhythm together, and end at the same time.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "create",
    	"body": "a rhythmic pulse or groove. You can use a metronome, a percussionist, your foot, or another musician. Improvise using whatever pitches you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "pick",
    	"body": "four notes. (If you have dice, roll them 4x.) Improvise using only these notes, but you can play them in any octave on your instrument.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "only one pitch for as long as you can. Then pick a new one and repeat.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "think",
    	"body": "of chocolate ice cream melting in July. Translate this thought into sound.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play this graph",
    	"body": null,
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is intensity. The horizontal is time. It should take about 3 minutes to play.",
    	"image": "graph-1.png"
    },
    {
    	"instruction": "improvise",
    	"body": "a piece with an AABA form. Each section can be as long or as short as you like. Use 5 notes in any octave. Play the form 3 times through.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "repeat",
    	"body": "a single note in an repeating rhythm to create a “groove” or “ostinato.” The other person should improvise using any pitches. Then switch.",
    	"dices": 1,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "visualize",
    	"body": "the color of the eyes of someone you love. “Play” this visual.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play",
    	"body": "your instrument unconventionally. Experiment with non-musical sounds. Try playing the strings of the piano, half-valving, using guitar feedback, etc.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play this doodle.",
    	"body": null,
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "(2+ players). Interpret this however you like, but read it as distinct 4 sections or “movements.”<br>Make sure the group stays together throughout.",
    	"image": "doodle-1.png"
    },
    {
    	"instruction": "play this graph",
    	"body": "",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is intensity. The horizontal is time. It should take about 3 minutes to play.",
    	"image": "graph-2.png"
    },
    {
    	"instruction": "meditate",
    	"body": "on a slow series of notes played in random sequence. Let them float in the air, and practice listening deeply to each one. Take 3 minutes.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "three notes for as long as you can, in any octave. When you get bored, keep one and pick two new ones. Repeat.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "three notes for as long as you can, in any octave. When you get bored, keep two and pick one new one. Repeat.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "think",
    	"body": "of a short sentence. “Say” it with your instrument. Try to imitate the sounds of the words, rather than the emotion. Keep trying new ways to “say” it.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play this doodle",
    	"body": null,
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "(2+ players). Interpret this however you like, but read it as distinct 4 sections or “movements.”<br>Make sure the group stays together throughout.",
    	"image": "doodle-2.png"
    },
    {
    	"instruction": "limit",
    	"body": "yourself to three notes. You can play them in any octave. Do this for as long as you can.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "\"read\"",
    	"body": "a piece of text from a book or magazine using your instrument. Try to express the rhythm and sound of the words. Trade sentences if you're in a group.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play",
    	"body": "long tones together. Don't try to sound “right.” Just enjoy the sounds as they clash and fill the room.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "dance",
    	"body": "or gesture using a part of your body. Now translate the motion through your instrument. (group?)",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "short",
    	"body": "notes only. Keep everything choppy, using as many pitches as you like. Do this for as long as you can.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "try",
    	"body": "to play a series of short notes at exactly the same time as your partner, without looking at each other. Accept that it will sound messy.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "\"read\"",
    	"body": "a piece of text from a book or magazine using your instrument. Use only three notes, in any octave. Trade sentences if you are in a group.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play this graph",
    	"body": "",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It should take about 2 minutes to play.",
    	"image": "graph-3.png"
    },
    {
    	"instruction": "clap",
    	"body": "or tap out any repeating rhythm. Now play it with your instrument using as many pitches as you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "five notes in only one octave. If you have dice, roll them 4x to pick your notes.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "four notes in any octave. (If you have dice, roll them 4x.) When you get bored, keep two and pick two new ones. Repeat.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "four notes in only one octave. If you have dice, roll them 4x to pick your notes.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "one",
	"body": "person plays a repeating pattern or groove. The other person improvises over it. Then switch. Don't communicate verbally. Just listen for your turn.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "pick",
	"body": "two groups of 4 notes. These are your “chords.” Improvise with the first group for 8 measures. Then switch. Repeat for as long as you can.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "tell",
	"body": "a story about anything. Your partner should improvise a soundtrack to go along.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "call",
	"body": "and response: One is the “caller” and one is the “responder.” Play this until you're bored, and then switch.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "play this graph",
	"body": "",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It should take about 3 minutes to play.",
    	"image": "graph-4.png"
    },
    {
	"instruction": "simon.",
	"body": "Play musical “simon.” Play two random notes. Repeat over and over, adding a new note to the end of the sequence each time. See how long you can go.",
    	"dices": 2,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "\"read\"",
	"body": "a piece of text from a book or magazine using your instrument. Use as many pitches as you like. Trade sentences if you're in a group.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "just two intervals. You are free to move it around and use as many pitches as you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "trade",
	"body": "turns. You can only play one note, chord, or sound per turn. Improvise a piece this way.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "create",
	"body": "a conversation between two “characters.” One should be high and one should be low. If you're playing a piano, use your right & left hands.",
    	"dices": 0,
    	"note_top": "(solo)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "choose",
	"body": "three notes. Play them in any octave until you get bored. Then keep one and pick two new ones. Repeat.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "pick",
	"body": "two notes. You can use any octave.",
    	"dices": 2,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "build",
	"body": "a scale or pick one you already know. Improvise a piece using only this scale. If you have a partner, your partner should use a different scale.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "select",
	"body": "a duration. Use as many notes (or rests) as you like, but use only this one duration.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "three notes in any octave.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "three notes in any octave.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "fill",
	"body": "the room with a chord or scale. (Sus and Minor chords work best.) Drone like this and lose yourself in the sound. Meditate on it for about 2 minutes.",
    	"dices": 0,
    	"note_top": "(2+ players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "think",
	"body": "of an animal and improvise a piece inspired by it. Ask your partner to guess what it is.",
    	"dices": 0,
    	"note_top": "(2+ players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "play this graph",
	"body": "",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It should take about 3 minutes to play.",
    	"image": "graph-5.png"
    },
    {
	"instruction": "play",
	"body": "a slow series of chords (notes if you don't have a chord instrument). Do not try to make “real” chords. Just play random groups of notes. Listen.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "play this graph",
	"body": "",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It should take about 3 minutes to play.",
    	"image": "graph-6.png"
    },
    {
	"instruction": "use",
	"body": "one note. Play in any octave.",
    	"dices": 1,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "play",
	"body": "only notes in the harmonic series, picking whichever note you want as the starting note.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "play",
	"body": "a melody that you know well. Now repeat it over and over, but alter it by changing the rhythms and note durations. Do not change the pitches.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    }
];

function drawcard(){
    document.getElementById("card").hidden=false;
    var card = cards[Math.floor(Math.random()*cards.length)];
    document.getElementById("card-instruction").innerHTML = card.instruction;
    var text;
    if(card.note_top) {
	document.getElementById("card-note_top").innerHTML = card.note_top;
    } else {
	document.getElementById("card-note_top").innerHTML = "";
    }
    if(card.image) {
	text = "<img src=\"data/" + card.image + "\">";
	document.getElementById("card-body").innerHTML = text;
	document.getElementById("card-body").style.textAlign = "center";
    } else {
	document.getElementById("card-body").innerHTML = card.body;
	document.getElementById("card-body").style.textAlign = "justify";
    }
    if(card.note_bottom) {
	document.getElementById("card-note_bottom").innerHTML = card.note_bottom;
    } else {
	document.getElementById("card-note_bottom").innerHTML = "";
    }
    if(card.dices) {
	text = "notes: ";
	for(var i = 0; i < card.dices; i++) {
	    text += "<div id=\"dice\">" + roll_dice() + "</div> ";
	}
	document.getElementById("card-dices").innerHTML = text;
    } else {
	document.getElementById("card-dices").innerHTML = "";
    }
}

function roll_dice(){
    return dice[Math.floor(Math.random()*dice.length)];
}
