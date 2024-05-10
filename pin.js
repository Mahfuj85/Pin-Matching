function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length ==4){
        return pin;
    } else{
        return getPin()
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
})

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        if(number == "C"){
            calcInput.value = '';
        }
    } else {
        const calcPriviousNumber = calcInput.value;
        const newNumbers = calcPriviousNumber + number;
        calcInput.value = newNumbers;
    }
})

document.getElementById('submit-button').addEventListener('click', function(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailed = document.getElementById('notify-failed');
    const successAudio = document.getElementById('success-audio');
    const failedAudio = document.getElementById('failed-audio');

    if(pin == typedNumbers) {
        notifySuccess.style.display = "block"
        notifyFailed.style.display = "none"
        document.getElementById('submit-button').style.backgroundColor = "green"
        successAudio.play()
    } else {
        notifyFailed.style.display = "block"
        notifySuccess.style.display = "none"
        document.getElementById('submit-button').style.backgroundColor = "red"
        failedAudio.play()

    }

    document.getElementById('typed-numbers').value = '';
})