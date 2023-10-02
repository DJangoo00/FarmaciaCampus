import { $infoData,} from "../JS/domVars.js"




//MedicineFunctions
export function resetDataDiv() {
    const dataDiv = document.querySelector(".data");
    const cleanDiv = `
    <div class="content-data">
					<div class="head">
						<h3></h3>
					</div>


					<!-- conteido -->
                    <div class="info-data">
                    </div>
                </div>
    `;
    dataDiv.innerHTML=cleanDiv;
}

export function resetDiv(div){
    div.innerHTML="";
}

// Function to hide the filters container
export function hideFiltersContainer() {
    const filtersContainer = document.getElementById("filters-container");
    if (filtersContainer) {
        filtersContainer.style.display = "none";
    }
}

// Function to show the filters container
export function showFiltersContainer() {
    const filtersContainer = document.getElementById("filters-container");
    if (filtersContainer) {
        filtersContainer.style.display = "block";
    }
}


//QUERYS & ENDPOINTS

//*******************MedicineQuerys
const apiUrl = 'http://localhost:5013/api/farmacia';
const mediUrl = `${apiUrl}/Medicamento`;

export function getAllMedicine(){
    fetch(`${mediUrl}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(e => {
            let $itemCard = document.createElement("div");


            $itemCard.innerHTML=`
            <div class="item card">
			<div class="medicine-title-row">
				<h4 class="medicine-title">${e.nombre}</h4>
			</div>
			<div class="info-row id-row">
				<span class="label">ID</span>
				<span class="value">${e.id}</span>
			</div>
			<div class="info-row stock-row">
				<span class="label">Stock</span>
				<span class="value">${e.stock}</span>
			</div>
			<div class="info-row provider-row">
				<span class="label">Proveedor</span>
				<span class="value">${e.persona.nombre}</span>
			</div>
			<div class="info-row price-row">
				<span class="label">Precio Unitario</span>
				<span class="value">${"$"+e.precio}</span>
			</div>
            <div class="info-row expiration-row">
            <span class="label">Fecha. Exp</span>
            <span class="value">${"$"+e.fechaExpiracion}</span>
        </div>
		</div>
            `;
            $infoData.appendChild($itemCard)
        });
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}

export function showMedicineByStock(){
    fetch(`${mediUrl}/Less50`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(e => {
            let $itemCard = document.createElement("div");


            $itemCard.innerHTML=`
            <div class="item card">
			<div class="medicine-title-row">
				<h4 class="medicine-title">${e.nombre}</h4>
			</div>
			<div class="info-row id-row">
				<span class="label">ID</span>
				<span class="value">${e.id}</span>
			</div>
			<div class="info-row stock-row">
				<span class="label">Stock</span>
				<span class="value">${e.stock}</span>
			</div>
			<div class="info-row provider-row">
				<span class="label">Proveedor</span>
				<span class="value">?</span>
			</div>
			<div class="info-row price-row">
				<span class="label">Precio Unitario</span>
				<span class="value">${"$"+e.precio}</span>
			</div>
		</div>
            `;
            $infoData.appendChild($itemCard)
        });
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}

export function showMedicineByProvider(){
    fetch(`http://localhost:5013/api/farmacia/Medicamento/ByProveedorName?proveedor=juan`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(e => {
            let $itemCard = document.createElement("div");

            $itemCard.innerHTML=`
            <div class="item card">
			<div class="medicine-title-row">
				<h4 class="medicine-title">${e.nombre}</h4>
			</div>
			<div class="info-row id-row">
				<span class="label">ID</span>
				<span class="value">${e.id}</span>
			</div>
			<div class="info-row stock-row">
				<span class="label">Stock</span>
				<span class="value">${e.stock}</span>
			</div>
			<div class="info-row provider-row">
				<span class="label">Proveedor</span>
				<span class="value">${e.persona.nombre}</span>
			</div>
			<div class="info-row price-row">
				<span class="label">Precio Unitario</span>
				<span class="value">${"$"+e.precio}</span>
			</div>
            <div class="info-row expiration-row">
            <span class="label">Fecha. Exp</span>
            <span class="value">${"$"+e.fechaExpiracion}</span>
        </div>
		</div>
            `;
            $infoData.appendChild($itemCard)
        });
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}

export function showMedicineByExpiresBefore(){

    fetch(`http://localhost:5013/api/farmacia/Medicamento/AfterDueDate?date=2024-10-10
    `)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(e => {
            let $itemCard = document.createElement("div");
    
            $itemCard.innerHTML=`
            <div class="item card">
            <div class="medicine-title-row">
                <h4 class="medicine-title">${e.nombre}</h4>
            </div>
            <div class="info-row id-row">
                <span class="label">ID</span>
                <span class="value">${e.id}</span>
            </div>
            <div class="info-row stock-row">
                <span class="label">Stock</span>
                <span class="value">${e.stock}</span>
            </div>
            <div class="info-row price-row">
            <span class="label">Precio Unitario</span>
            <span class="value">${"$"+e.precio}</span>
        </div>
            <div class="info-row provider-row">
                <span class="label">Proveedor</span>
                <span class="value">?</span>
            </div>
            <div class="info-row expiration-row">
            <span class="label">Fecha. Exp</span>
            <span class="value">${"$"+e.fechaExpiracion}</span>
        </div>
        </div>
            `;
            $infoData.appendChild($itemCard)
        });
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}


export function getMostExpensive(){

    fetch(`${mediUrl}/GetMostExpensive`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        let $itemCard = document.createElement("div");

        $itemCard.innerHTML=`
        <h2>Medicamento más caro</h2>
        <div class="item card">
        <div class="medicine-title-row">
            <h4 class="medicine-title">${data.nombre}</h4>
        </div>
        <div class="info-row id-row">
            <span class="label">ID</span>
            <span class="value">${data.id}</span>
        </div>
        <div class="info-row stock-row">
            <span class="label">Stock</span>
            <span class="value">${data.stock}</span>
        </div>
        <div class="info-row provider-row">
            <span class="label">Proveedor</span>
            <span class="value">?</span>
        </div>
        <div class="info-row price-row">
            <span class="label">Precio Unitario</span>
            <span class="value">${"$"+data.precio}</span>
        </div>
    </div>
        `;
        $infoData.appendChild($itemCard)
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}

export function showMedicineByPriceStock(){

fetch(`http://localhost:5013/api/farmacia/Medicamento/GetHighherPriceAndUnderStock?price=50&stock=100`)
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    data.forEach(e => {
        let $itemCard = document.createElement("div");

        $itemCard.innerHTML=`
        <div class="item card">
        <div class="medicine-title-row">
            <h4 class="medicine-title">${e.nombre}</h4>
        </div>
        <div class="info-row id-row">
            <span class="label">ID</span>
            <span class="value">${e.id}</span>
        </div>
        <div class="info-row stock-row">
            <span class="label">Stock</span>
            <span class="value">${e.stock}</span>
        </div>
        <div class="info-row price-row">
        <span class="label">Precio Unitario</span>
        <span class="value">${"$"+e.precio}</span>
    </div>
        <div class="info-row provider-row">
            <span class="label">Proveedor</span>
            <span class="value">?</span>
        </div>
        <div class="info-row expiration-row">
        <span class="label">Fecha. Exp</span>
        <span class="value">${"$"+e.fechaExpiracion}</span>
    </div>
    </div>
        `;
        $infoData.appendChild($itemCard)
    });
})
.catch((error) => {
    console.error('Fetch error:', error);
});
}

export function showMedicineByExpirationYear(){
    fetch(`http://localhost:5013/api/farmacia/Medicamento/GetExpireYear?year=2024`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(e => {
            let $itemCard = document.createElement("div");

            $itemCard.innerHTML=`
            <div class="item card">
			<div class="medicine-title-row">
				<h4 class="medicine-title">${e.nombre}</h4>
			</div>
			<div class="info-row id-row">
				<span class="label">ID</span>
				<span class="value">${e.id}</span>
			</div>
			<div class="info-row stock-row">
				<span class="label">Stock</span>
				<span class="value">${e.stock}</span>
			</div>
			<div class="info-row provider-row">
				<span class="label">Proveedor</span>
				<span class="value">?</span>
			</div>
            <div class="info-row expiration-row">
            <span class="label">Fecha. Exp</span>
            <span class="value">${"$"+e.fechaExpiracion}</span>
        </div>
		</div>
            `;
            $infoData.appendChild($itemCard)
        });
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}

//*******************MedicineQuerys

