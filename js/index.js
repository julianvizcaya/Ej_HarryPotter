const container = document.getElementById('gridContainer')
const apiUrl = 'https://hp-api.onrender.com/api/characters'

fetch(apiUrl)
.then(response => response.json())

.then(data => {
    data.forEach(character => {
        let newCharacter = document.createElement('div')
        newCharacter.classList.add('characterCard', character.house)

        let ageText = 'Edad desconocida'
        if (character.yearOfBirth) {
            let currentYear = 2025
            const age = currentYear - character.yearOfBirth
            ageText = `${age} años`
        }

        newCharacter.innerHTML = `
        <div class="imageBlock characterInfo">
            <img src="${character.image}" alt="${character.name}">

            <div>
                <h2>${character.name}</h2>
                <p>${ageText}</p>
            </div>
        </div>
        `;

        container.appendChild(newCharacter)
    })
})

.catch(error => console.error(error));
