// create map
const map = L.map('mapid').setView([-15.7776269, -47.9455405], 12);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //caminho está sendo chamado do html, dentro da pasta root
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // add content to hidden input
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) // && - existir. Caso exista o marker, remova do mapa

    // add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

// add a field photo
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if (input.value != "") {
        //limpar campo antes de duplicar o campo
        input.value = ""

        // adiconar o clone ao container de imagens
        container.appendChild(newFieldContainer)
    }
}

function deleteField(event) {
    const span = event.currentTarget

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    // remover o campo
    span.parentNode.remove()

}

// selecionar sim ou não para o fim de semana
function toggleSelect(event) {

    //retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
        .forEach((button) => { button.classList.remove('active') })

    // pegar o botão cliclado
    const button = event.currentTarget

    //colocar a classe .active no botão cliclado
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar qual botão foi clicado
    input.value = button.dataset.value
}

function validade(event) {
    //validar se lat e lng estão preenchidos
    const lat = document.querySelector('.map-container input[name="lat"]')
    if (lat.value == "") {
        event.preventDefault()
        alert('Selecione a localidade do orfanato no mapa.')
    }

}