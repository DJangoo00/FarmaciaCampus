



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

export function showMedicineByStock(){}

export function showMedicineByProvider(){}

export function showMedicineByExpiresBefore(){}

export function getMostExpensive(){}

export function showMedicineByPriceStock(){}

export function showMedicineByExpirationYear(){}

//*******************MedicineQuerys

