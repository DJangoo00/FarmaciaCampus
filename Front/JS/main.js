import {allDropdown, sidebar, toggleSidebar, allSideDivider, profile, imgProfile, dropdownProfile, allMenu, allProgress, $sellsBtn, $pageTitle, $rootValue, $rootSection, serviceButtons, $dataContainer, $dataTitle, $infoData, $filtersButton, $titleDiv,} from "../JS/domVars.js"

import {getAllMedicine, getMostExpensive, hideFiltersContainer, resetDataDiv, resetDiv, showFiltersContainer, showMedicineByExpirationYear, showMedicineByExpiresBefore, showMedicineByPriceStock, showMedicineByProvider, showMedicineByStock} from "../JS/functions.js"



// SIDEBAR DROPDOWN

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
// SIDEBAR COLLAPSE


if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})


// PROFILE DROPDOWN

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// MENU

allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR

allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})

// Sell medicine
$sellsBtn.addEventListener("click", function(e){
	const pageValue  = e.target.childNodes[2].textContent; // Get the text content of the clicked element

	$pageTitle.textContent = pageValue; // Change the text content of $pageTitle
	$rootSection.textContent = pageValue; // Change the text content of $rootSection
})

//Buttons

serviceButtons.forEach((button) => {
	button.addEventListener("click", async function (e) {
	  // Check the id or other attributes to determine which button was clicked
	const buttonId = button.id;
	  // Reset the info-data when any button is clicked
	$infoData.innerHTML = "";

	if (buttonId === "search-button") {
		// Code for the "Buscar Medicamento" button
		hideFiltersContainer();
		$dataTitle.textContent = "Buscar Medicamento";

		} else if (buttonId === "show-button") {
		// Code for the "Mostrar Medicamentos" button
		
		showFiltersContainer();
		$dataTitle.textContent = "Mostrar Medicamentos";
		resetDiv($infoData);

		const existingFiltersContainer = document.getElementById("filters-container");
		if (existingFiltersContainer) {
			// If it exists, remove it from the DOM
			existingFiltersContainer.remove();
		}
		
		const newFiltersContainer = document.createElement("div");
		newFiltersContainer.id = "filters-container";
		// Insert the data structure for "Show" button
		const filtersStructure = `

	<div id="filter-button" class="filter-button">
		<div class="icon">
			<i class='bx bx-filter'></i>
		</div>
		<div class="text">Filtros</div>
	</div>
	
	<div class="filters-box option-btn">                 
		<div class="card option-btn filter-option" queryAction="getMedicineByStock">
			<div class="icon">
				<i class='bx bx-filter'></i>
			</div>
			<div class="text">Por stock<br><b><i>(menor 50)</i></b></div>
		</div>                 
		<div class="card option-btn filter-option" queryAction="getMedicineByProvider">
			<div class="icon">
				<i class='bx bx-filter'></i>
			</div>
			<div class="text">Por proveedor</div>
		</div>                 
		<div class="card option-btn filter-option" queryAction="getMedicineByExpiresBefore">
			<div class="icon">
				<i class='bx bx-filter'></i>
			</div>
			<div class="text">Caducan antes de<br><b><i>(2024-10-10)</i></b></div>
		</div>                 
		<div class="card option-btn filter-option" queryAction="getMedicineByMostExpensive">
			<div class="icon">
				<i class='bx bx-filter'></i>
			</div>
			<div class="text">Medicamento más caro</div>
		</div>                 
		<div class="card option-btn filter-option" queryAction="getMedicineByPriceStock">
			<div class="icon">
				<i class='bx bx-filter'></i>
			</div>
			<div class="text">Precio mayor <b><i>50</i></b> &<br>stock menor que <b><i>100</i></b></div>
		</div>                 
		<div class="card option-btn filter-option" queryAction="getMedicineByExpirationYear">
			<div class="icon">
				<i class='bx bx-filter'></i>
			</div>
			<div class="text">Caducan en el año<br><b><i>2024</i></b></div>
		</div>

	</div>
		`;
		newFiltersContainer.innerHTML = filtersStructure;

		$titleDiv.insertAdjacentElement("afterend",newFiltersContainer);
		getAllMedicine();
	} else if (buttonId === "add-button") {
		// Code for the "Añadir Medicamento" button
		hideFiltersContainer()
		$dataTitle.textContent = "Añadir Medicamento";
	}

	  // Prevent event propagation
	e.stopPropagation();
	});
});

//FILTER MENU 
document.addEventListener("click", function (e) {
    if (e.target.id === "filter-button") {
        // Toggle the visibility of the .filters-box element
        const filtersBox = document.querySelector(".filters-box");
        if (filtersBox) {
            filtersBox.classList.toggle("hidden");
        }
    }
});

document.addEventListener('click', function (e) {
	e.stopPropagation();
    const target = e.target;

    if (target.classList.contains('filter-option')) {
        // Check if the clicked element has the 'filter-option' class
        const queryAction = target.getAttribute('queryAction');

        // Handle the filter action based on the queryAction attribute
        switch (queryAction) {
            case 'getMedicineByStock':
				resetDiv($infoData)
				showMedicineByStock();
                break;

            case 'getMedicineByProvider':
				resetDiv($infoData)
				showMedicineByProvider();
                break;

            case 'getMedicineByExpiresBefore':
				resetDiv($infoData);
				showMedicineByExpiresBefore();
                break;
            case 'getMedicineByMostExpensive':
				resetDiv($infoData);
				getMostExpensive();
                break;
            case 'getMedicineByPriceStock':
				resetDiv($infoData)
				showMedicineByPriceStock();
                break;
            case 'getMedicineByExpirationYear':
				resetDiv($infoData)
				showMedicineByExpirationYear();
                break;

            default:
                console.log('Unknown filter clicked');
                // Handle unknown filter actions or provide a default behavior
                break;
        }
    }
});