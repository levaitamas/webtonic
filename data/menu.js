function show_menu(option){
    var content = {"title": "", "body": ""};
    var text = "";
    switch(option) {
    case "help":
	content.title = "how to use these cards";
	content.body = "Improvisation is the most direct link between the music in your head and the music in your instrument. The purpose of Tonic is to strengthen that " +
	    "link. It does this by encouraging you to think unconventionally and playful about improvisation and about music, so that you can shed the anxiety and " +
	    "the stress that commonly keep people from learning to improvise. My hope is that this allows you to relax more and trust your gut, and will help you " +
	    "make better music.<hr style=\"height:0.2em; visibility:hidden;\">Tonic is a \"game\" only in the loosest sense of the word. There is no score, and " +
	    "there is no object. The point is to have fun, relax, and make music. Your success should be measured by how free and fearless you feel when working " +
	    "through these exercises. Print these cards on the heaviest weight paper you can find, and cut along the lines. Then just shuffle and go!";
	text = content.body;
	break;
    case "glossary":
	content = {
	    "title": "glossary of musical terms used in this game",
	    "body": {
		"Pitch": "refers to one specific frequency. In other words, one key on a piano.",
		"Note": "refers to all the pitches with a given name. For example, if your note is “B”, you can play all “B”s that your instrument can play, in any octave. ",
		"Interval": "the distance between two pitches. Some players may prefer to be very strict in a technical sense, " +
		    "but most players will be served best by treating the interval as the size of the “leap” between two notes.",
		"Phrase": "any short passage that forms a complete thought. Can be any number of notes, but usually less than 10. Think of it as a musical sentence.",
		"Shape": "(as in “improvise using the shape of a melody”). A non-technical term that refers to the structure of phrase. " +
		    "Does it start high and end low? Does it go down quickly and then back up again?",
		"Groove/ostinato": "any repeating rhythm using any number of notes, used as an accompaniment for another musician or melody. " +
		    "Think of it like the drumbeat or backing bank in a pop/rock song.",
		"Intensity": "open ended. Could be expressed through volume, note density, dissonance, abrasiveness, or tempo.",
		"Chord": "any set of three or more notes played simultaneously",
		"Scale": "any set of three or more notes played in any order or combination (repetition is allowed)",
		"Octave": "refers to a note played at different locations on the instrument. i.e. “High C” and “Low C” are the same note, but in different octaves"
	    }
	};
	for(var elem in content.body) {
	    text += "<b>" + elem + "</b> - " + content.body[elem] + "<hr style=\"height:0.2em; visibility:hidden;\">";
	}
	break;
    case "rules":
	content = {
	    "title": "rules",
	    "body": {
		0: "Listen.",
		1: "Keep an open mind. Accept everything you hear without judgment.",
		2: "Relax.",
		3: "There are no wrong notes. If you want to play within standard Western harmony you can, but you never have to.",
		4: "Don't try to play a particular idiom or genre: “jazz” or “Baroque” or “blues” or anything.",
		5: "Unless the card says otherwise, use whatever notes, scales, chords, and percussive sounds you like.",
		6: "When in doubt, be bold.",
		7: "Most cards have no set end time. Play as long as you can until you get bored, and then move on.",
		8: "The game is designed for all instruments, however there are a few cards that are specific to certain instruments.",
		9: "Every exercise can be played either solo or with a group, unless marked otherwise.",
		10:"Keep it simple. Let the notes breathe. If you don't understand the instructions, use your imagination to fill in the gaps."
	    }
	};
	for(var elem in content.body) {
	    text += "<b>(" + elem + ")</b> " + content.body[elem] + "<hr style=\"height:0.2em; visibility:hidden;\">";
	}
	break;
    case "faq":
	content.title = "other questions";
	content.body = "<b>Q: How do I improvise a piece with just one note?</b>" +
	    "<hr style=\"height:0.2em; visibility:hidden;\">" +
	    "A: Try varying the tone and dynamics. Maybe pretend you're playing a percussive instrument. Or maybe you're creating a conversation " +
	    "between two percussive instruments. If you have a string or wind instrument, try bending the note." +
	    "<hr style=\"height:0.2em; visibility:hidden;\">" +
	    "<b>Q: What if I don't understand something?</b>" +
	    "<hr style=\"height:0.2em; visibility:hidden;\">" +
	    "A: Skip it and move on. Or take a guess and do whatever feels right. Don't forget, it's just a game! There is no " +
	    "pressure to play Tonic the “right way”. But if you DO want to learn more about a specific concept, " +
	    "<a href=\"https://www.wikipedia.org\" target=\"_blank\">Wikipedia</a> and " +
	    "<a href=\"https://www.reddit.com/r/musictheory/\" target=\"_blank\">reddit.com/r/musictheory</a> " +
	    "are two amazingly helpful places to learn.";
	text = content.body;
	break;
    }
    document.getElementById("card").hidden=false;
    document.getElementById("card-note_top").innerHTML = "";
    document.getElementById("card-instruction").innerHTML = content.title + "<hr style=\"height:0.05em; visibility:hidden;\">";
    document.getElementById("card-body").style.textAlign = "justify";
    document.getElementById("card-note_bottom").innerHTML = "";
    document.getElementById("card-dices").innerHTML = "";
    document.getElementById("card-body").innerHTML = text;
}
