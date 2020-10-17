// create map
const map = L.map('mapid').setView([-15.7776269, -47.9455405], 12);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //caminho está sendo chamado do html, dentro da pasta root
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({ id, name, lat, lng }) {

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    // create and add a popup
    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup);
}

const orphanageSpan = document.querySelectorAll('.orphanages span')

orphanageSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)


})