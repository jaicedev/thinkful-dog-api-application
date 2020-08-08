function getNumberOfDogImages(){
    $('#js-dog-form').submit(function (e){
        $('#js-dog-container').html('');
        e.preventDefault();
        let checkNum = $('#js-dog-num').val();
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
                    console.log('Caught')
                }else{
                    showDogBreedImage(responseJson)
                }
            })
            .catch(error => alert(error))
    })
}

function showDogBreedImage(responseJson){
        console.log(responseJson.message)
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