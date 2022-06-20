const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5781aea0acmsh64e07717e6a5dbep1cc588jsnd26e755f576e',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

async function getData(){
    const response = await fetch('https://genius.p.rapidapi.com/artists/16775/songs', options)

    const json = await response.json();
    const results = json.response;
    const songs = results.songs;
    let dataNamaArtis ='';
    let dataNamaArtisSia = '';
    let arrayNamaArtisSia = [];
    let dataNamaArtisAlexis = '';
    let arrayNamaArtisAlexis = [];
    let dataNamaArtisKate = '';
    let arrayNamaArtisKate = [];
    let dataNamaArtisHustle = '';
    let arrayNamaArtisHustle = [];
    let dataNamaArtisLil = '';
    let arrayNamaArtisLil = [];
    let dataNamaArtisFelix = '';
    let arrayNamaArtisFelix = [];
    let dataNamaArtisJanix = '';
    let arrayNamaArtisJanix = [];
    let dataNamaArtisDaughtry = '';
    let arrayNamaArtisDaughtry = [];
    let dataNamaArtisRaffey = '';
    let arrayNamaArtisRaffey = [];
    let dataNamaArtisTom = '';
    let arrayNamaArtisTom = [];
    let dataNamaArtisSimba = '';
    let arrayNamaArtisSimba = [];
    let dataNamaArtisChristina = '';
    let arrayNamaArtisChristina =[];
    for(i=0;i<songs.length;i++){
        dataNamaArtis += `<p>${songs[i].artist_names}</p>`;
        if(songs[i].artist_names.substring(0, 3) === "Sia"){
            dataNamaArtisSia = `<p>${songs[i].artist_names.substring(0, 3)}</p>`;
            arrayNamaArtisSia.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 13) === "Alexis Jordan"){
            dataNamaArtisAlexis = `<p>${songs[i].artist_names.substring(0, 13)}</p>`;
            arrayNamaArtisAlexis.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 4) === "Kate"){
            dataNamaArtisKate = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisKate.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 6) === "Hustle"){
            dataNamaArtisHustle = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisHustle.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 3) === "Lil"){
            dataNamaArtisLil = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisLil.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 5) === "Félix"){
            dataNamaArtisFelix = `<p>${songs[i].artist_names.substring(0, 11)}</p>`;
            arrayNamaArtisFelix.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 5) === "Janix"){
            dataNamaArtisJanix = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisJanix.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 5) === "Daugh"){
            dataNamaArtisDaughtry = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisDaughtry.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 5) === "Raffe"){
            dataNamaArtisRaffey = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisRaffey.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 3) === "Tom"){
            dataNamaArtisTom = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisTom.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 5) === "Simba"){
            dataNamaArtisSimba = `<p>${songs[i].artist_names.substring(0, 12)}</p>`;
            arrayNamaArtisSimba.push(songs[i]);
        }
        if(songs[i].artist_names.substring(0, 5) === "Chris"){
            dataNamaArtisChristina = `<p>${songs[i].artist_names}</p>`;
            arrayNamaArtisChristina.push(songs[i]);
        }
    }
    // for(i=0;i<arrayNamaArtisSia.length;i++){
    //     document.getElementById(`${imgSia[i]}`).setAttribute("src", `${arrayNamaArtisSia[i].song_art_image_url}`);
    // }
    
    
    console.log(dataNamaArtis)
    // console.log(dataNamaArtisSia)
    // console.log(arrayNamaArtisSia)
    console.log(dataNamaArtisAlexis)
    console.log(arrayNamaArtisAlexis)
    // document.getElementById("dataNamaArtis").innerHTML=dataNamaArtis;

    document.getElementById("dataNamaArtisSia").innerHTML=dataNamaArtisSia;
    document.getElementById("imgSia0").setAttribute("src", `${arrayNamaArtisSia[0].song_art_image_url}`);
    document.getElementById("artistNamesSia0").innerHTML=arrayNamaArtisSia[0].artist_names;
    document.getElementById("titleSia0").innerHTML=arrayNamaArtisSia[0].title;
    document.getElementById("imgSia1").setAttribute("src", `${arrayNamaArtisSia[1].song_art_image_url}`);
    document.getElementById("artistNamesSia1").innerHTML=arrayNamaArtisSia[1].artist_names;
    document.getElementById("titleSia1").innerHTML=arrayNamaArtisSia[1].title;
    document.getElementById("imgSia2").setAttribute("src", `${arrayNamaArtisSia[2].song_art_image_url}`);
    document.getElementById("artistNamesSia2").innerHTML=arrayNamaArtisSia[2].artist_names;
    document.getElementById("titleSia2").innerHTML=arrayNamaArtisSia[2].title;
    document.getElementById("imgSia3").setAttribute("src", `${arrayNamaArtisSia[3].song_art_image_url}`);
    document.getElementById("artistNamesSia3").innerHTML=arrayNamaArtisSia[3].artist_names;
    document.getElementById("titleSia3").innerHTML=arrayNamaArtisSia[3].title;
    // document.getElementById("imgSia4").setAttribute("src", `${arrayNamaArtisSia[4].song_art_image_url}`);
    // document.getElementById("artistNamesSia4").innerHTML=arrayNamaArtisSia[4].artist_names;
    // document.getElementById("titleSia4").innerHTML=arrayNamaArtisSia[4].title;
    // document.getElementById("imgSia5").setAttribute("src", `${arrayNamaArtisSia[5].song_art_image_url}`);
    // document.getElementById("artistNamesSia5").innerHTML=arrayNamaArtisSia[5].artist_names;
    // document.getElementById("titleSia5").innerHTML=arrayNamaArtisSia[5].title;

    document.getElementById("dataNamaArtisAlexis").innerHTML=dataNamaArtisAlexis;
    document.getElementById("imgAlexis0").setAttribute("src", `${arrayNamaArtisAlexis[0].song_art_image_url}`);
    document.getElementById("artistNamesAlexis0").innerHTML=arrayNamaArtisAlexis[0].artist_names;
    document.getElementById("titleAlexis0").innerHTML=arrayNamaArtisAlexis[0].title;
    // document.getElementById("imgAlexis1").setAttribute("src", `${arrayNamaArtisAlexis[1].song_art_image_url}`);
    // document.getElementById("artistNamesAlexis1").innerHTML=arrayNamaArtisAlexis[1].artist_names;
    // document.getElementById("titleAlexis1").innerHTML=arrayNamaArtisAlexis[1].title;
    // document.getElementById("imgAlexis2").setAttribute("src", `${arrayNamaArtisAlexis[2].song_art_image_url}`);
    // document.getElementById("artistNamesAlexis2").innerHTML=arrayNamaArtisAlexis[2].artist_names;
    // document.getElementById("titleAlexis2").innerHTML=arrayNamaArtisAlexis[2].title;

    document.getElementById("dataNamaArtisKate").innerHTML=dataNamaArtisKate;
    document.getElementById("imgKate0").setAttribute("src", `${arrayNamaArtisKate[0].song_art_image_url}`);
    document.getElementById("artistNamesKate0").innerHTML=arrayNamaArtisKate[0].artist_names;
    document.getElementById("titleKate0").innerHTML=arrayNamaArtisKate[0].title;

    document.getElementById("dataNamaArtisHustle0").innerHTML=dataNamaArtisHustle;
    document.getElementById("imgHustle0").setAttribute("src", `${arrayNamaArtisHustle[0].song_art_image_url}`);
    document.getElementById("artistNamesHustle0").innerHTML=arrayNamaArtisHustle[0].artist_names;
    document.getElementById("titleHustle0").innerHTML=arrayNamaArtisHustle[0].title;

    document.getElementById("dataNamaArtisLil0").innerHTML=dataNamaArtisLil;
    document.getElementById("imgLil0").setAttribute("src", `${arrayNamaArtisLil[0].song_art_image_url}`);
    document.getElementById("artistNamesLil0").innerHTML=arrayNamaArtisLil[0].artist_names;
    document.getElementById("titleLil0").innerHTML=arrayNamaArtisLil[0].title;

    document.getElementById("dataNamaArtisFelix0").innerHTML=dataNamaArtisFelix;
    document.getElementById("imgFelix0").setAttribute("src", `${arrayNamaArtisFelix[0].song_art_image_url}`);
    document.getElementById("artistNamesFelix0").innerHTML=arrayNamaArtisFelix[0].artist_names;
    document.getElementById("titleFelix0").innerHTML=arrayNamaArtisFelix[0].title;

    document.getElementById("dataNamaArtisJanix0").innerHTML=dataNamaArtisJanix;
    document.getElementById("imgJanix0").setAttribute("src", `${arrayNamaArtisJanix[0].song_art_image_url}`);
    document.getElementById("artistNamesJanix0").innerHTML=arrayNamaArtisJanix[0].artist_names;
    document.getElementById("titleJanix0").innerHTML=arrayNamaArtisJanix[0].title;

    document.getElementById("dataNamaArtisDaughtry0").innerHTML=dataNamaArtisDaughtry;
    document.getElementById("imgDaughtry0").setAttribute("src", `${arrayNamaArtisDaughtry[0].song_art_image_url}`);
    document.getElementById("artistNamesDaughtry0").innerHTML=arrayNamaArtisDaughtry[0].artist_names;
    document.getElementById("titleDaughtry0").innerHTML=arrayNamaArtisDaughtry[0].title;

    document.getElementById("dataNamaArtisRaffey0").innerHTML=dataNamaArtisRaffey;
    document.getElementById("imgRaffey0").setAttribute("src", `${arrayNamaArtisRaffey[0].song_art_image_url}`);
    document.getElementById("artistNamesRaffey0").innerHTML=arrayNamaArtisRaffey[0].artist_names;
    document.getElementById("titleRaffey0").innerHTML=arrayNamaArtisRaffey[0].title;

    document.getElementById("dataNamaArtisTom0").innerHTML=dataNamaArtisTom;
    document.getElementById("imgTom0").setAttribute("src", `${arrayNamaArtisTom[0].song_art_image_url}`);
    document.getElementById("artistNamesTom0").innerHTML=arrayNamaArtisTom[0].artist_names;
    document.getElementById("titleTom0").innerHTML=arrayNamaArtisTom[0].title;

    document.getElementById("dataNamaArtisSimba0").innerHTML=dataNamaArtisSimba;
    document.getElementById("imgSimba0").setAttribute("src", `${arrayNamaArtisSimba[0].song_art_image_url}`);
    document.getElementById("artistNamesSimba0").innerHTML=arrayNamaArtisSimba[0].artist_names;
    document.getElementById("titleSimba0").innerHTML=arrayNamaArtisSimba[0].title;

    document.getElementById("dataNamaArtisChristina0").innerHTML=dataNamaArtisChristina;
    document.getElementById("imgChristina0").setAttribute("src", `${arrayNamaArtisChristina[0].song_art_image_url}`);
    document.getElementById("artistNamesChristina0").innerHTML=arrayNamaArtisChristina[0].artist_names;
    document.getElementById("titleChristina0").innerHTML=arrayNamaArtisChristina[0].title;

}