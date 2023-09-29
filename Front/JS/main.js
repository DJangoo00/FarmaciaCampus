import {allDropdown,
	sidebar,
	toggleSidebar,
	allSideDivider,
	profile,
	imgProfile,
	dropdownProfile,
	allMenu,
	allProgress,
	$sellsBtn,
	$pageTitle,
	$rootValue,
	$rootSection,
	serviceButtons,
	$dataContainer,
	$dataTitle,
	$infoData,
	$filtersButton,

} from "../JS/domVars.js"

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
	button.addEventListener("click", function (e) {
	  // Check the id or other attributes to determine which button was clicked
	  const buttonId = button.id;
  
	  // Reset the info-data when any button is clicked
	  $infoData.innerHTML = "";
  
	  if (buttonId === "search-button") {
		// Code for the "Buscar Medicamento" button
		console.log("Buscar Medicamento button clicked");
		$dataTitle.textContent = "Buscar Medicamento";
	  } else if (buttonId === "show-button") {
		// Code for the "Mostrar Medicamentos" button
		console.log("Mostrar Medicamentos button clicked");
		$dataTitle.textContent = "Mostrar Medicamentos";
  
		// Insert the data structure for "Show" button
		const dataStructure = `
		  <div class="item card">
			<div class="medicine-title-row">
			  <h4 class="medicine-title">Penicilina</h4>
			</div>
			<div class="info-row id-row">
			  <span class="label">ID</span>
			  <span class="value">123</span>
			</div>
			<div class="info-row stock-row">
			  <span class="label">Stock</span>
			  <span class="value">50</span>
			</div>
			<div class="info-row provider-row">
			  <span class="label">Proveedor</span>
			  <span class="value">Juan Roa</span>
			</div>
			<div class="info-row price-row">
			  <span class="label">Precio Unitario</span>
			  <span class="value">$50.000</span>
			</div>
		  </div>
		`;
  
		// Insert the data structure into info-data
		$infoData.insertAdjacentHTML("beforeend", dataStructure);
	  } else if (buttonId === "add-button") {
		// Code for the "Añadir Medicamento" button
		console.log("Añadir Medicamento button clicked");
		$dataTitle.textContent = "Añadir Medicamento";
	  }
  
	  // Prevent event propagation
	e.stopPropagation();
	});
  });

//FILTER MENU 
$filtersButton.addEventListener("click", function(e){
	console.log("mamaguebo")
})