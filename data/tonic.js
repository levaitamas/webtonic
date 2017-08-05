var dice = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
var cards = [
    {
	"instruction": "use",
	"body": "two notes. When you get bored,<br>keep one and pick a new one.<br>Repeat for as long as you can.",
	"dices": 2,
	"note_top": null,
	"note_bottom": null,
	"image": null
    },
    {
    	"instruction": "play",
    	"body": "a melody that you know well.<br>Now repeat it over and over, but alter it by changing some (or all)<br>of the pitches. Do not change the<br>rhythms.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "turn on",
    	"body": "the TV or radio. Improvise, while<br>you listen to whatever is on, but<br>don't think about the sounds<br>you're making. Just keep making<br>sounds.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "pick",
    	"body": "two notes and make up a simple<br>rhythmic pattern. One person<br>plays this while the other<br>improvises over it. If there are<br>more than two people, rotate.",
    	"dices": 2,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "watch",
    	"body": "TV or NetFlix on mute.<br>Make up a new soundtrack.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "describe",
    	"body": "what you did last weekend, using<br>whatever notes or sounds you<br>like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "three notes until you get bored.<br>Then pick three new ones. Repeat<br>for as long as you can.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "invent",
    	"body": "a short melody. Improvise using<br>the shape of the melody. Go for<br>as long as you can.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "just one interval. You are free to<br>move it around using as many<br>pitches as you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play",
    	"body": "“telephone.” One person<br>improvises a phrase and the next<br>person imitates it. It's OK if the<br>notes aren't right, just try to copy<br>the shape. Pass it on.",
	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "start",
    	"body": "playing without discussing key,<br>form, genre, or anything else. Try<br>to “find” each other, establish a<br>consistent rhythm together, and<br>end at the same time.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "create",
    	"body": "a rhythmic pulse or groove. You<br>can use a metronome, a<br>percussionist, your foot, or<br>another musician. Improvise using<br>whatever pitches you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "pick",
    	"body": "four notes. (If you have dice, roll<br>them 4x.) Improvise using only<br>these notes, but you can play<br>them in any octave on your<br>instrument.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "only one pitch for as long as you<br>can. Then pick a new one and<br>repeat.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "think",
    	"body": "of chocolate ice cream melting in<br>July. Translate this thought into<br>sound.",
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
    	"note_bottom": "The vertical axis is intensity. The horizontal is<br>time. It should take about 3 minutes to play.",
    	"image": "graph-1.png"
    },
    {
    	"instruction": "improvise",
    	"body": "a piece with an AABA form. Each<br>section can be as long or as short<br>as you like. Use 5 notes in any<br>octave. Play the form 3 times<br>through.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "repeat",
    	"body": "a single note in an repeating<br>rhythm to create a “groove” or<br>“ostinato.” The other person<br>should improvise using any<br>pitches. Then switch.",
    	"dices": 1,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "visualize",
    	"body": "the color of the eyes of someone<br>you love. “Play” this visual.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play",
    	"body": "your instrument unconventionally.<br>Experiment with non-musical sounds.<br>Try playing the strings of the piano,<br>half-valving, using guitar feedback,<br>etc.",
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
    	"note_bottom": "(2+ players). Interpret this however you like, but<br>read it as distinct 4 sections or “movements.”<br>Make sure the group stays together throughout.",
    	"image": "doodle-1.png"
    },
    {
    	"instruction": "play this graph",
    	"body": "",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": "The vertical axis is intensity. The horizontal is<br>time. It should take about 3 minutes to play.",
    	"image": "graph-2.png"
    },
    {
    	"instruction": "meditate",
    	"body": "on a slow series of notes played<br>in random sequence. Let them<br>float in the air, and practice<br>listening deeply to each one.<br>Take 3 minutes.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "three notes for as long as you<br>can, in any octave. When you<br>get bored, keep one and pick<br>two new ones. Repeat.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "use",
    	"body": "three notes for as long as you<br>can, in any octave. When you<br>get bored, keep two and pick<br>one new one. Repeat.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "think",
    	"body": "of a short sentence. “Say” it with<br>your instrument. Try to imitate the<br>sounds of the words, rather than<br>the emotion. Keep trying new<br>ways to “say”it.",
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
    	"note_bottom": "(2+ players). Interpret this however you like, but<br>read it as distinct 4 sections or “movements.”<br>Make sure the group stays together throughout.",
    	"image": "doodle-2.png"
    },
    {
    	"instruction": "limit",
    	"body": "yourself to three notes. You can<br>play them in any octave. Do this<br>for as long as you can.",
    	"dices": 3,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "\"read\"",
    	"body": "a piece of text from a book or<br>magazine using your instrument.<br>Try to express the rhythm and<br>sound of the words. Trade<br>sentences if you're in a group.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "play",
    	"body": "long tones together. Don't try to<br>sound “right.” Just enjoy the<br>sounds as they clash and fill the<br>room.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "dance",
    	"body": "or gesture using a part of your<br>body. Now translate the motion<br>through your instrument. (group?)",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "short",
    	"body": "notes only. Keep everything<br>choppy, using as many pitches as<br>you like. Do this for as long as<br>you can.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "try",
    	"body": "to play a series of short notes at<br>exactly the same time as your<br>partner, without looking at each<br>other. Accept that it will sound<br>messy.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
    	"instruction": "\"read\"",
    	"body": "a piece of text from a book or<br>magazine using your instrument.<br>Use only three notes, in any<br>octave. Trade sentences if you are<br>in a group.",
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
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It<br>should take about 2 minutes to play.",
    	"image": "graph-3.png"
    },
    {
    	"instruction": "clap",
    	"body": "or tap out any repeating rhythm.<br>Now play it with your instrument<br>using as many pitches as you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "five notes in only one octave.<br>If you have dice, roll them 4x to<br>pick your notes.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "four notes in any octave. (If you<br>have dice, roll them 4x.) When<br>you get bored, keep two and<br>pick two new ones. Repeat.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "four notes in only one octave.<br>If you have dice, roll them 4x to<br>pick your notes.",
    	"dices": 4,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "one",
	"body": "person plays a repeating pattern<br>or groove. The other person<br>improvises over it. Then switch.<br>Don't communicate verbally. Just<br>listen for your turn.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "pick",
	"body": "two groups of 4 notes. These are<br>your “chords.” Improvise with the<br>first group for 8 measures. Then<br>switch. Repeat for as long as you<br>can.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "tell",
	"body": "a story about anything. Your<br>partner should improvise a<br>soundtrack to go along.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "call",
	"body": "and response: One is the “caller”<br>and one is the “responder.” Play<br>this until you're bored, and then<br>switch.",
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
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It<br>should take about 3 minutes to play.",
    	"image": "graph-4.png"
    },
    {
	"instruction": "simon.",
	"body": "Play musical “simon.” Play two<br>random notes. Repeat over and<br>over, adding a new note to the<br>end of the sequence each time.<br>See how long you can go.",
    	"dices": 2,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "\"read\"",
	"body": "a piece of text from a book or<br>magazine using your instrument.<br>Use as many pitches as you like.<br>Trade sentences if you're in a<br>group.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "use",
	"body": "just two intervals. You are free to<br>move it around and use as many<br>pitches as you like.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "trade",
	"body": "turns. You can only play one<br>note, chord, or sound per turn.<br>Improvise a piece this way.",
    	"dices": 0,
    	"note_top": "(>2 players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "create",
	"body": "a conversation between two<br>“characters.” One should be high<br>and one should be low. If you're<br>playing a piano, use your right &<br>left hands.",
    	"dices": 0,
    	"note_top": "(solo)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "choose",
	"body": "three notes. Play them in any<br>octave until you get bored. Then<br>keep one and pick two new<br>ones. Repeat..",
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
	"body": "a scale or pick one you already<br>know. Improvise a piece using<br>only this scale. If you have a<br>partner, your partner should use a<br>different scale",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "select",
	"body": "a duration. Use as many notes (or<br>rests) as you like, but use only this<br>one duration.",
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
	"body": "the room with a chord or scale.<br>(Sus and Minor chords work<br>best.) Drone like this and lose<br>yourself in the sound. Meditate on<br>it for about 2 minutes.",
    	"dices": 0,
    	"note_top": "(2+ players)",
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "think",
	"body": "of an animal and improvise a<br>piece inspired by it. Ask your<br>partner to guess what it is.",
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
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It<br>should take about 3 minutes to play.",
    	"image": "graph-5.png"
    },
    {
	"instruction": "play",
	"body": "a slow series of chords (notes if<br>you don't have a chord<br>instrument). Do not try to make<br>“real” chords. Just play random<br>groups of notes. Listen.",
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
    	"note_bottom": "The vertical axis is pitch. The horizontal is time. It<br>should take about 3 minutes to play.",
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
	"body": "only notes in the harmonic series,<br>picking whichever note you want<br>as the starting note",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    },
    {
	"instruction": "play",
	"body": "a melody that you know well.<br>Now repeat it over and over, but<br>alter it by changing the rhythms<br>and note durations. Do not<br>change the pitches.",
    	"dices": 0,
    	"note_top": null,
    	"note_bottom": null,
    	"image": null
    }
];

function drawcard(){
    document.getElementById("card").hidden=false;
    var card = cards[Math.floor(Math.random()*cards.length)];
    document.getElementById("card-instruction").innerHTML = card["instruction"];
    if (card["note_top"]) {
	document.getElementById("card-note_top").innerHTML = card["note_top"];
	document.getElementById("card-note_top").hidden=false;
    } else {
	document.getElementById("card-note_top").hidden=true;
    }
    if (card["image"]) {
	var text = "<img src=\"data/" + card["image"] + "\">";
	document.getElementById("card-body").innerHTML = text;
    } else {
	document.getElementById("card-body").innerHTML = card["body"];
    }
    if (card["note_bottom"]) {
	document.getElementById("card-note_bottom").innerHTML = card["note_bottom"];
	document.getElementById("card-note_bottom").hidden=false;
    } else {
	document.getElementById("card-note_bottom").hidden=true;
    }
    if (card["dices"]) {
	var text = "dice rolls:  ";
	for (i = 0; i < card["dices"]; i++)
	    text += roll_dice() + " "
	document.getElementById("card-dices").innerHTML = text;
	document.getElementById("card-dices").hidden=false;
    } else {
	document.getElementById("card-dices").hidden=true;
    }
}

function roll_dice(){
    return dice[Math.floor(Math.random()*dice.length)];
}
