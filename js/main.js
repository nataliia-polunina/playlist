;(function () {
	"use strict";
	var playList = [{
			author: "led zeppelin",
			song: "stairway to heaven",
			duration: "2:03"
		},
		{
			author: "queen",
			song: "bohemian rhapsody",
			duration: "2:30"
		},
		{
			author: "lynyrd skynyrd",
			song: "free bird",
			duration: "1:56"
		},
		{
			author: "deep purple",
			song: "smoke on the water",
			duration: "3:03"
		},
		{
			author: "jimi hendrix",
			song: "all along the watchtower",
			duration: "2:53"
		},
		{
			author: "AC/DC",
			song: "back in black",
			duration: "2:43"
		},
		{
			author: "queen",
			song: "we will rock you",
			duration: "2:13"			
		},
		{
			author: "metallica",
			song: "enter sandman",
			duration: "3:03"			
		}
	];

	var list = document.getElementById("playlist");

    for (var i = 0; i < playList.length; i++) {
        list.innerHTML +=  '<li class="ba-tune">' 
        + '<svg class="ba-tune__like" width="10" height="10"><use xlink:href="#icon-heart"></svg>' 
        + '<div class="ba-tune__top">' + '<span class="ba-tune__duration">' 
        + playList[i].duration + '</span> <span class="ba-tune__author">' 
        + playList[i].author + '</span></div>' + '<div class="ba-tune__song">' 
        + playList[i].song + '</div>' +'</li>';
    }
})();