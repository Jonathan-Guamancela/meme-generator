document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const div = document.createElement('div');
    div.classList.add('image-container');

    const topTextValue = document.querySelector('#top-Text').value;
    const bottomTextValue = document.querySelector('#bottom-Text').value;
    const imageUrl = document.querySelector('#imageURL').value;

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = "Meme image";
    div.appendChild(image);

    const topText = document.createElement('div');
    topText.classList.add('text', 'top-text');
    topText.textContent = topTextValue;
    div.appendChild(topText);

    const bottomText = document.createElement('div');
    bottomText.classList.add('text', 'bottom-text');
    bottomText.textContent = bottomTextValue;
    div.appendChild(bottomText);

    document.querySelector('#meme-container').appendChild(div);

    //remove an element
    document.getElementById('removeID').addEventListener('click', function(event){
        event.preventDefault();
        div.remove();
    });

});
