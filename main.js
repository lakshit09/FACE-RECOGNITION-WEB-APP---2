Webcam.attach('#camera');
camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classfier = ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/lHvNN18wR/model.json', modelLoaded);