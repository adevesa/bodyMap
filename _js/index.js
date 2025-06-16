$(document).ready(function () {
    var image = $('img');
    var selectedItems = []

    const areas = ["cavada-completo", "pierna-izquierda-frontal", "pierna-derecha-frontal", "pierna-izquierda-trasera", "pierna-derecha-trasera", "rostro", "torax", "espalda-completa", "abdomen", "genitales", "media-pierna-der-frontal", "media-pierna-izq-frontal", "media-pierna-der-trasera", "media-pierna-izq-trasera", "axila-izquierda", "axila-derecha", "axila-izquierda-back", "axila-derecha-back"]

    image.mapster(
        {
            fillOpacity: 0.4,
            fillColor: "d42e16",
            strokeColor: "3320FF",
            strokeOpacity: 0.8,
            strokeWidth: 4,
            stroke: true,
            isSelectable: true,
            singleSelect: false,
            mapKey: 'name',
            listKey: 'key',
            showToolTip: true,
            toolTipClose: ["tooltip-click", "area-click"],
            areas: areas.map(area => {
                return {
                    key: area,
                    strokeColor: "FFFFFF"
                }
            })
        });

    document.getElementsByName('body-part-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const checkboxId = e.target.value;
            const bodyPart = checkListBodyParts[checkboxId];
            bodyPart.body_parts.forEach(part => {
                document.getElementById('id_' + part).click()
            })
            if(e.target.checked) {
                selectedItems.push(checkboxId);
            }
            else{
                selectedItems.splice($.inArray(checkboxId, selectedItems),1);
            }

            const precio = selectedItems.reduce((total, item) => {
                return total + (checkListBodyParts[item] ? checkListBodyParts[item].price : 0);
            }, 0);

            document.getElementById('price').innerHTML = precio;
        });
    })

    const checkListBodyParts = {
        'cavado_completo': {
            'body_parts': ['cavado-completo'],
            'checkbox': 'cavado-completo',
            'price' : 10000
        },
        'pierna_entera': {
            'body_parts': ['pierna-izquierda-frontal', 'pierna-derecha-frontal', 'pierna-izquierda-trasera', 'pierna-derecha-trasera'],
            'checkbox': 'pierna-entera',
            'price' : 20000
        },
        'media_pierna': {
            'body_parts': ['media-pierna-der-frontal', 'media-pierna-izq-frontal', 'media-pierna-der-trasera', 'media-pierna-izq-trasera'],
            'checkbox': 'media-pierna',
            'price' : 15000
        },
        'rostro_completo': {
            'body_parts': ['rostro'],
            'checkbox': 'rostro-completo',
            'price' : 5000
        },
        'axilas': {
            'body_parts': ['axila-izquierda', 'axila-derecha', 'axila-izquierda-back', 'axila-derecha-back'],
            'checkbox': 'axilas',
            'price' : 2000
        },
        'torax': {
            'body_parts': ['torax'],
            'checkbox': 'torax',
            'price' : 8000
        },
        'espalda_completa': {
            'body_parts': ['espalda-completa'],
            'checkbox': 'espalda-completa',
            'price' : 8000
        },
        'abdomen' : {
            'body_parts': ['abdomen'],
            'checkbox': 'abdomen',
            'price' : 6000
        },
        'genitales' : {
            'body_parts': ['genitales'],
            'checkbox': 'genitales',
            'price' : 3000
        }
    }


});
