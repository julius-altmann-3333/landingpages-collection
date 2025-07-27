function toggleExpandConsulting() {
    const mapContainerConsulting = document.getElementById('ContainerConsulting');
    mapContainerConsulting.classList.toggle('expanded-consulting');
}

function toggleExpandMedical() {
    const mapContainerMedical = document.getElementById('ContainerMedical');
    mapContainerMedical.classList.toggle('expanded-medical');
}

function toggleExpandRealEstate() {
    const mapContainerRealEstate = document.getElementById('ContainerRealEstate');
    mapContainerRealEstate.classList.toggle('expanded-real-estate');
}

function toggleExpandCars() {
    const mapContainerCars = document.getElementById('ContainerCars');
    mapContainerCars.classList.toggle('expanded-cars');
}

function toggleExpandAgency() {
    const mapContainerAgency = document.getElementById('ContainerAgency');
    mapContainerAgency.classList.toggle('expanded-agency');
}

function toggleExpandInsurance() {
    const mapContainerInsurance = document.getElementById('ContainerInsurance');
    mapContainerInsurance.classList.toggle('expanded-insurance');
}

// Close all modals when clicking outside
document.addEventListener('click', function(event) {
    const modals = [
        { id: 'ContainerConsulting', class: 'expanded-consulting' },
        { id: 'ContainerMedical', class: 'expanded-medical' },
        { id: 'ContainerRealEstate', class: 'expanded-real-estate' },
        { id: 'ContainerCars', class: 'expanded-cars' },
        { id: 'ContainerAgency', class: 'expanded-agency' },
        { id: 'ContainerInsurance', class: 'expanded-insurance' }
    ];

    modals.forEach(modal => {
        const container = document.getElementById(modal.id);
        // Check if the click is outside the modal and the modal is open
        if (container && container.classList.contains(modal.class) && !container.contains(event.target)) {
            container.classList.remove(modal.class);
        }
    });
});