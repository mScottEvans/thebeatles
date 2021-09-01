let userAnswer = prompt('Is The Beatles your favorite band?')
console.log(userAnswer)
if(userAnswer.toLowerCase() == 'yes'){
    let url = "https://cdn0.vox-cdn.com/thumbor/JTrP7wxDVveVMaPRxl6qcY_okvQ=/0x21:1240x719/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/48424833/beatles.0.0.jpg"
    document.write('<img src="' + url + '">')
}