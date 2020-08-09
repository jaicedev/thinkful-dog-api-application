function getNumberOfDogImages(){
    $('#js-dog-form').submit(function (e){
        $('#js-dog-container').html('');
        e.preventDefault();
        let checkNum = parseInt($('#js-dog-num').val());
        if(checkNum >= 1 && checkNum <= 50){
            checkNum = checkNum;
        }
        else{
            checkNum = 3;
            console.log('Invalid Input Given - Fetching Default')
        }
        fetch(`https://dog.ceo/api/breeds/image/random/${checkNum}`)
            .then(response => response.json())
            .then(responseJson =>
                showDogs(responseJson))
        .catch(error => alert('There Was an Error Processing your Request, Please Try Again!'))
        $('#js-dog-num').val('');
        
    })
}

function getBreedOfDog(){
    $('#js-dog-form-breed').submit(function(e){
        e.preventDefault()
        $('#js-dog-container').html('');
        let breedName = $('#js-dog-breed').val().toLowerCase()
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson.status === 'error'){
                    alert('Invalid Input - Try Again Please')
                    console.log('Invalid Input - Try Again Please')
                    $('#js-dog-breed').val('')
                }else{
                    showDogBreedImage(responseJson)
                }
            })
            .catch(error => alert('Error: ' + error))
    })
}

function showDogBreedImage(responseJson){
    $('#js-dog-container').show();
    console.log(responseJson)
    $('#js-dog-container').append(`<img src="${responseJson.message}" class="dog-image">`)
    $('#js-dog-breed').val('')
}

function showDogs(responseJson){
    $('#js-dog-container').show();
    let numberOfDogs = responseJson.message.length;
    console.log(responseJson)
    for(let i = 0; i < numberOfDogs; i++){
        $('#js-dog-container').append(`<img src="${responseJson.message[i]}" class="dog-image">`)
    }
}

$(function(){
    $('#js-dog-container').hide();
})

$(getBreedOfDog);
$(getNumberOfDogImages);
