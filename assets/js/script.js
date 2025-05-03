'use strict';

const cars = [
  {
    image: "./assets/images/AUDI A3 S LINGE/AUDI A3 S LINGE.jpg", // الصورة الرئيسية
    images: [
      "./assets/images/AUDI A3 S LINGE/AUDI A3 S LINGE.jpg",
      "./assets/images/AUDI A3 S LINGE/AUDI A3 S LINGE-1.jpg",
      "./assets/images/AUDI A3 S LINGE/AUDI A3 S LINGE-2.jpg",
      "./assets/images/AUDI A3 S LINGE/AUDI A3 S LINGE-3.jpg"
    ],
    title: "AUDI A3 S LINGE",
    year: 2025,
    passengers: "4 People",
    fuel: "diésel",
    mileage: "6.1km / 1-litre",
    transmission: "Automatique",
    price: "440 DH",
  },
  {
    image: "./assets/images/Accent/Accent 3.jpg",
    images: [
      "./assets/images/Accent/Accent.jpg",
      "./assets/images/Accent/Accent 1.jpg",
      "./assets/images/Accent/Accent 3.jpg",
      "./assets/images/Accent/Accent 2.jpg",
    ],
    title: "Accent",
    year: 2023,
    passengers: "4 People",
    fuel: "isans",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/Volkswagen golf 8/Volkswagen golf 8  -2.jpg",
    images: [
      "./assets/images/Volkswagen golf 8/Volkswagen golf 8  -2.jpg",
      "./assets/images/Volkswagen golf 8/Volkswagen golf 8.jpg",
      "./assets/images/Volkswagen golf 8/Volkswagen golf 1.jpg",
      "./assets/images/Volkswagen golf 8/Volkswagen golf 8 -3.jpg"
    ],
    title: "Volkswagen golf 8",
    year: "none",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/RENAULT CLIO 5/RENAULT CLIO 5.jfif",
    images: [
      "./assets/images/RENAULT CLIO 5/RENAULT CLIO 5.jfif",
      "./assets/images/RENAULT CLIO 5/RENAULT CLIO 5-1.jfif",
      "./assets/images/RENAULT CLIO 5/RENAULT CLIO 5-2.jfif",
      "./assets/images/RENAULT CLIO 5/RENAULT CLIO 5-3.jfif"
    ],
    title: "Reunalte clio 5",
    year: "2025",
    passengers: "4 People",
    fuel: "isans",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/cupra/Cupra -1.jfif",
    images: [
      "./assets/images/cupra/Cupra -1.jfif",
      "./assets/images/cupra/Cupra.jpg",
      "./assets/images/cupra/Cupra -2.jfif",
      "./assets/images/cupra/Cupra -3.jfif"
    ],
    title: "Cupra",
    year: "2025",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/porsche macan s/porsche macan s.jfif",
    images: [
      "./assets/images/porsche macan s/porsche macan s.jfif",
      "./assets/images/porsche macan s/porsche macan s -1.jfif",
      "./assets/images/porsche macan s/porsche macan s -2.jfif",
      "./assets/images/porsche macan s/porsche macan s-3.jpg"
    ],
    title: "porsche macan s",
    year: "none",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/Volkswagen touareg/Volkswagen touareg -1.jpg",
    images: [
      "./assets/images/Volkswagen touareg/Volkswagen touareg.jpg",
      "./assets/images/Volkswagen touareg/Volkswagen touareg -2.jpg",
      "./assets/images/Volkswagen touareg/Volkswagen touareg -3.jfif",
      "./assets/images/Volkswagen touareg/Volkswagen touareg -1.jpg"
    ],
    title: "Volkswagen touareg",
    year: "none",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/Volkswagen t-roc/Volkswagen t-roc.jfif",
    images: [
      "./assets/images/Volkswagen t-roc/Volkswagen t-roc.jfif",
      "./assets/images/Volkswagen t-roc/Volkswagen t-roc-1.jpg",
      "./assets/images/Volkswagen t-roc/Volkswagen t-roc-2.jpg",
      "./assets/images/Volkswagen t-roc/Volkswagen t-roc-3.jpg"
    ],
    title: "Volkswagen t-roc",
    year: "2024",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/pegeout 208/pegeout 208.jpg",
    images: [
      "./assets/images/pegeout 208/pegeout 208.jpg",
      "./assets/images/pegeout 208/pegeout 208-1.jpg",
      "./assets/images/pegeout 208/pegeout 208.jfif",
      "./assets/images/pegeout 208/pegeout 208-3.jfif"
    ],
    title: "pegeout 208",
    year: "2025",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Manuel",
    price: "350 DH",
  },
  {
    image: "./assets/images/FIAT 500/FIAT 500.jfif",
    images: [
      "./assets/images/FIAT 500/FIAT 500.jfif",
      "./assets/images/FIAT 500/FIAT 500 -1.jpg",
      "./assets/images/FIAT 500/FIAT 500 -2.jfif",
      "./assets/images/FIAT 500/FIAT 500 -3.jfif"
    ],
    title: "FIAT 500",
    year: "2025",
    passengers: "4 People",
    fuel: "isans",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/DACIA LOGANE/DACIA LOGANE.jpeg",
    images: [
      "./assets/images/DACIA LOGANE/DACIA LOGANE.jpeg",
      "./assets/images/DACIA LOGANE/DACIA LOGANE-1.jfif",
      "./assets/images/DACIA LOGANE/DACIA LOGANE-2.jfif",
      "./assets/images/DACIA LOGANE/DACIA LOGANE-2.jpg"
    ],
    title: "DACIA LOGANE",
    year: "2024",
    passengers: "4 People",
    fuel: "isans",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/RENAULT MEGANE 4/RENAULT MEGANE 4.jpg",
    images: [
      "./assets/images/RENAULT MEGANE 4/RENAULT MEGANE 4.jpg",
      "./assets/images/RENAULT MEGANE 4/RENAULT MEGANE 4 -3.jfif",
      "./assets/images/RENAULT MEGANE 4/RENAULT MEGANE 4 -2.jfif",
      "./assets/images/RENAULT MEGANE 4/RENAULT MEGANE 4 -1.jpg"
    ],
    title: "RENAULT MEGANE 4",
    year: "2024",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Automatique",
    price: "350 DH",
  },
  {
    image: "./assets/images/OPEL CORSA/OPEL CORSA.jpg",
    images: [
      "./assets/images/OPEL CORSA/OPEL CORSA.jpg",
      "./assets/images/OPEL CORSA/OPEL CORSA-1.jfif",
      "./assets/images/OPEL CORSA/OPEL CORSA-2.jfif",
      "./assets/images/OPEL CORSA/OPEL CORSA-3.jfif"
    ],
    title: "OPEL CORSA",
    year: "2024",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Manuel",
    price: "350 DH",
  },
  {
    image: "./assets/images/DACIA STEPWAY/DACIA STEPWAY.jpg",
    images: [
      "./assets/images/DACIA STEPWAY/DACIA STEPWAY.jpg",
      "./assets/images/DACIA STEPWAY/DACIA STEPWAY-1.jfif",
      "./assets/images/DACIA STEPWAY/DACIA STEPWAY-2.jfif",
      "./assets/images/DACIA STEPWAY/DACIA STEPWAY-3.jfif"
    ],
    title: "DACIA STEPWAY",
    year: "2024",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Manuel",
    price: "350 DH",
  },
  {
    image: "./assets/images/CITROEN C3/CITROEN C3.jfif",
    images: [
      "./assets/images/CITROEN C3/CITROEN C3.jfif",
      "./assets/images/CITROEN C3/CITROEN C3-1.jpg",
      "./assets/images/CITROEN C3/CITROEN C3-2.jpg",
      "./assets/images/CITROEN C3/CITROEN C3-3.jfif"
    ],
    title: "CITROEN C3",
    year: "2024",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Manuel",
    price: "350 DH",
  },
  {
    image: "./assets/images/Reunalte clio 5/Reunalte clio 5 -2.jpg",
    images: [
      "./assets/images/Reunalte clio 5/Reunalte clio 5 -2.jpg",
      "./assets/images/Reunalte clio 5/Reunalte clio 5 -3.jfif",
      "./assets/images/Reunalte clio 5/Reunalte clio 5.jfif",
      "./assets/images/Reunalte clio 5/Reunalte clio 5 -1.jfif"
    ],
    title: "RENAULT CLIO 5",
    year: "2025",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Manuel",
    price: "350 DH",
  },
  {
    image: "./assets/images/RENAULT KARDIAN/RENAULT KARDIAN.jfif",
    images: [
      "./assets/images/RENAULT KARDIAN/RENAULT KARDIAN.jfif",
      "./assets/images/RENAULT KARDIAN/RENAULT KARDIAN -2.jfif",
      "./assets/images/RENAULT KARDIAN/RENAULT KARDIAN -1.jfif",
      "./assets/images/RENAULT KARDIAN/RENAULT KARDIAN -3.jfif"
    ],
    title: "RENAULT KARDIAN",
    year: "2025",
    passengers: "4 People",
    fuel: "diésel",
    mileage: "8.2km / 1-litre",
    transmission: "Manuel",
    price: "350 DH",
  },
];

document.addEventListener('DOMContentLoaded', function() {
 

  // الوصول إلى عنصر select
  const carSelect = document.getElementById('car-select');
  const carDetails = document.getElementById('car-details');

  // مسح محتوى القائمة مسبقًا
  carSelect.innerHTML = '';

  // إضافة الخيار الافتراضي
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select a car';
  carSelect.appendChild(defaultOption);


  // عرض تفاصيل السيارة عند اختيار سيارة
  carSelect.addEventListener('change', function(event) {
    const selectedCarTitle = event.target.value;

    if (selectedCarTitle) {
      const selectedCar = cars.find(car => car.title === selectedCarTitle);

      if (selectedCar) {
        carDetails.innerHTML = `
          <img src="${selectedCar.image}" alt="${selectedCar.title}" class="car-image" />
          <h3>${selectedCar.title} (${selectedCar.year})</h3>
          <p><strong>Passengers:</strong> ${selectedCar.passengers}</p>
          <p><strong>Fuel:</strong> ${selectedCar.fuel}</p>
          <p><strong>Mileage:</strong> ${selectedCar.mileage}</p>
          <p><strong>Transmission:</strong> ${selectedCar.transmission}</p>
          <p><strong>Price:</strong> ${selectedCar.price}</p>
        `;
      }
    } else {
      carDetails.innerHTML = ''; // إذا لم يتم اختيار أي سيارة، نظف التفاصيل
    }
  });
});





document.addEventListener('DOMContentLoaded', function () {
  const carSelect = document.getElementById('car-select');
  const searchBtn = document.getElementById('search-btn');
  
  // تحقق من وجود العناصر
  if (!carSelect || !searchBtn) {
    console.error("Required elements not found in the DOM.");
    return;
  }



  // إضافة الخيارات إلى القائمة المنسدلة
  cars.forEach((car) => {
    const option = document.createElement('option');
    option.value = car.title; // تعيين العنوان كقيمة
    option.textContent = car.title;
    carSelect.appendChild(option);
  });

  // إضافة مستمع على زر البحث
  searchBtn.addEventListener('click', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const selectedCarTitle = carSelect.value;
    const destination = document.getElementById('destination').value;
    const pickupDate = document.getElementById('pickup-date').value;

    if (!selectedCarTitle || !destination || !pickupDate) {
      alert("Please fill in all fields.");
      return;
    }

    // البحث عن السيارة المحددة في قائمة السيارات
    const selectedCar = cars.find(car => car.title === selectedCarTitle);

    if (!selectedCar) {
      alert("Selected car not found.");
      return;
    }

    // تخزين البيانات في Local Storage
    localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
    localStorage.setItem('destination', destination);
    localStorage.setItem('pickupDate', pickupDate);

    // الانتقال إلى صفحة التفاصيل
    window.location.href = 'cars-detils.html';
  });
});




const featuredCarList = document.querySelector(".featured-car-list");

// إضافة السيارات إلى الصفحة
cars.forEach((car) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <div class="featured-car-card featured-hover" data-aos="fade-up">
      <figure class="card-banner">
        <img src="${car.image}" alt="${car.title} ${car.year}" loading="lazy" width="440" height="300" class="w-100">
      </figure>
      <div class="card-content">
        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">${car.title}</a>
          </h3>
          <data class="year" value="${car.year}">${car.year}</data>
        </div>
        <ul class="card-list">
          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>
            <span class="card-item-text">${car.passengers}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>
            <span class="card-item-text">${car.fuel}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>
            <span class="card-item-text">${car.mileage}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>
            <span class="card-item-text">${car.transmission}</span>
          </li>
        </ul>
        <div class="card-price-wrapper">
          <p class="card-price">
            <strong>${car.price.split(" ")[0]}</strong> ${car.price.split(" ")[1]}
          </p>
          <button class="btn rental-btn" data-car='${JSON.stringify(car)}'>Louer maintenant</button>
        </div>
      </div>
    </div>
  `;
  featuredCarList.appendChild(listItem);
});

// إضافة حدث عند الضغط على زر "Rent now"
document.querySelectorAll('.rental-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    const carData = JSON.parse(event.target.getAttribute('data-car'));
    
    // تخزين بيانات السيارة في localStorage
    localStorage.setItem('selectedCar', JSON.stringify(carData));

    // الانتقال إلى صفحة عرض السيارة مع المدخلات
    window.location.href = 'cars-detils.html';  // تأكد من تغيير هذا إلى الرابط الصحيح
  });
});





const carListContainerAlt = document.querySelector(".blog-list");

cars.forEach((vehicle) => {
  const carItemAlt = document.createElement("li");
  carItemAlt.innerHTML = `
    <div class="featured-car-card">
      <figure class="card-banner">
        <img src="${vehicle.image}" alt="${vehicle.title} ${vehicle.year}" loading="lazy" width="440" height="300" class="w-100">
      </figure>
      <div class="card-content">
        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">${vehicle.title}</a>
          </h3>
          <data class="year" value="${vehicle.year}">${vehicle.year}</data>
        </div>
        <ul class="card-list">
          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>
            <span class="card-item-text">${vehicle.passengers}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>
            <span class="card-item-text">${vehicle.fuel}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>
            <span class="card-item-text">${vehicle.mileage}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>
            <span class="card-item-text">${vehicle.transmission}</span>
          </li>
        </ul>
        <div class="card-price-wrapper">
          <p class="card-price">
            <strong>${vehicle.price.split(" ")[0]}</strong> ${vehicle.price.split(" ")[1]}
          </p>
          <button class="btn rental-btn" data-car='${JSON.stringify(vehicle)}'>Louer maintenant</button>
        </div>
      </div>
    </div>
  `;
  carListContainerAlt.appendChild(carItemAlt);
});


document.querySelectorAll('.rental-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    const selectedCar = JSON.parse(event.target.getAttribute('data-car'));

    // تخزين البيانات في localStorage
    localStorage.setItem('selectedCar', JSON.stringify(selectedCar));

    // الانتقال إلى صفحة التفاصيل
    window.location.href = 'cars-detils.html'; // عدل الاسم حسب صفحتك الحقيقية
  });
});
