function getNumberOfDogImages(){
    $('#js-dog-form').submit(function (e){
        $('#js-dog-container').html('');
        e.preventDefault();
        let checkNum = parseInt($('#js-dog-num').val());
        if(typeof(checkNum) === 'number'){
            fetch(`https://dog.ceo/api/breeds/image/random/${checkNum}`)
                .then(response => response.json())
                .then(responseJson =>
                    showDogs(responseJson))
                .catch(error => alert('There Was an Error Processing your Request, Please Try Again!'))
            $('#js-dog-num').val('');
        }else{
            alert('Please Enter a Number')
            $('#js-dog-num').val('');
        }
        
    })
}

function getBreedOfDog(){
    $('#js-dog-form-breed').submit(function(e){
        e.preventDefault()
        $('#js-dog-container').html('');
        let breedName = $('#js-dog-breed').val().toLowerCase()
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(response => response.json())
            .then(responseJson =>
                showDogBreedImage(responseJson))
            .catch(error => alert('There Was an Error Processing your Request, Please Try Again!'))
    })
}

function showDogBreedImage(responseJson){
    $('#js-dog-container').append(`<img src="${responseJson.message}" class="dog-image">`)
}

function showDogs(responseJson){
    let numberOfDogs = responseJson.message.length;
    console.log(responseJson)
    for(let i = 0; i < numberOfDogs; i++){
        $('#js-dog-container').append(`<img src="${responseJson.message[i]}" class="dog-image">`)
    }
}

$(getBreedOfDog);
$(getNumberOfDogImages);