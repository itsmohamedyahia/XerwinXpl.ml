console.log("d.js --> loaded");

d_div_bottom = document.createElement("div");
d_div_abl = document.createElement("div");
d_div_abr = document.createElement("div");
d_div_bottom.id = "bottom";
d_div_abl.id = "ab-l";
d_div_abr.id = "ab-r";
d_div_abl.className = "ab";
d_div_abr.className = "ab"; 

d_div_bottom.innerHTML = `
	<div id="tags">
		<div class="mtag" id="e"><p>electronica</p></div>
		<div class="mtag" id="a"><p>ambient</p></div>
		<div class="mtag" id="i"><p>hip hop</p></div>
		<div class="mtag" id="g"><p>glitch</p></div>
		<div class="mtag" id="h"><p>house</p></div>
	</div>
	<div id="releases">
		<div class="release-icon" id="ri0"><a href="https://xerwinxpl.bandcamp.com/track/i-think/"><img src="https://f4.bcbits.com/img/a3340981925_2.jpg"></a></div>
		<div class="release-icon" id="ri1"><a href="https://xerwinxpl.bandcamp.com/album/2-weeks"><img src="https://f4.bcbits.com/img/a1300888331_2.jpg"></a></div>
		<div class="release-icon" id="ri2"><a href="https://xerwinxpl.bandcamp.com/track/not-acid"><img src="https://f4.bcbits.com/img/a0933733175_2.jpg"></a></div>
		<div class="release-icon" id="ri3"><a href="https://xerwinxpl.bandcamp.com/track/things-i-will-never-have"><img src="https://f4.bcbits.com/img/a3412206100_2.jpg"></a></div>
		<div class="release-icon" id="ri4"><a href="https://xerwinxpl.bandcamp.com/album/album03"><img src="https://f4.bcbits.com/img/a3216786508_2.jpg"></a></div>
	</div>
`



d_div_abl.innerHTML = `
	<p>other articles</p>
	<a href="https://www.xerwinxpl.ml/art/2023/sanctuary.html"><p>Sanctuary collab</p></a>
	<a href="https://www.xerwinxpl.ml/art/2023/2weeks.html"><p>2 Weeks (album)</p></a>
`

d_div_abr.innerHTML = `
	<p>socials</p>
	<a href="https://twitter.com/XerwinXpl"><i class="fa-brands fa-twitter center"></i></a>
	<a href="https://mastodon.social/@XerwinXpl" rel="me"><i class="fa-brands fa-mastodon center"></i></a>
	<a href="https://xerwinxpl.bandcamp.com"><i class="fa-brands fa-bandcamp"></i></a>
	<a href="https://www.youtube.com/@xerwinxpl"><i class="fa-brands fa-youtube"></i></a>
	<a href="https://github.com/e15dev"><i class="fa-brands fa-github"></i></a>
	<a href="https://www.discord.com/invite/rWNxcGuK9R"><i class="fa-brands fa-discord"></i></a>
	<a href="https://open.spotify.com/artist/6NPnDmYFF55JxRTFot2GIn"><i class="fa-brands fa-spotify"></i></a>
`

document.body.appendChild(d_div_bottom);
document.body.appendChild(d_div_abl);
document.body.appendChild(d_div_abr);
