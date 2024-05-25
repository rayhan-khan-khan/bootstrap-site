var carObject = {
  veheicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww",
  farePerKilo: 3,
  capacity: 4,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo inventore odit unde est, vel eveniet at corporis deserunt dicta ex ipsam doloremque magni amet iusto repellat autem error cumque laboriosam.",
};
var bikeObject = {
  veheicle: "Bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D%22%20class=%22d-block%20w-100%20coursel-image",
  farePerKilo: 2,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo inventore odit unde est, vel eveniet at corporis deserunt dicta ex ipsam doloremque magni amet iusto repellat autem error cumque laboriosam.",
};
var busObject = {
  veheicle: "Bus",
  imageUrl:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww",
  farePerKilo: 2,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo inventore odit unde est, vel eveniet at corporis deserunt dicta ex ipsam doloremque magni amet iusto repellat autem error cumque laboriosam.",
};
var sikelObject = {
  veheicle: "Saikel",
  imageUrl:
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
  farePerKilo: 1,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo inventore odit unde est, vel eveniet at corporis deserunt dicta ex ipsam doloremque magni amet iusto repellat autem error cumque laboriosam.",
};

const services = [carObject, bikeObject, busObject, sikelObject];

function displayServices(service) {
    const mainContainer = document.getElementById("main-container");
    const stringifiedObj = JSON.stringify(service)
    const div = document.createElement("div");
  div.innerHTML = `
    
    <div class="card mt mx-auto" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Transprot Mood ${service.veheicle}</h5>
          <p class="card-text">${service.description}</p>
          <p class="card-text"><small class="text-muted">Fere per kilo ${service.farePerKilo}</small> <small class="text-muted">capacity ${service.capacity}</small></p>
        </div>
        <button type="button " class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='handleBooking(${stringifiedObj})'>
        Launch demo modal
        </button>
      </div>
    </div>
  </div>
    `;
  mainContainer.appendChild(div);
}

function displayAllArticle(arr) {
   for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    displayServices(element)
   }
}
displayAllArticle(services)

function handleBooking(obj){
 const modalBody = document.getElementById('modal-body');
 const calculate = JSON.stringify(obj)
 modalBody.innerHTML = `
 <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Veheicle Mood: ${obj.veheicle}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text"><small class="text-muted">Fere per kilo ${obj.farePerKilo}</small> <small class="text-muted">capacity ${obj.capacity}</small></p>

    <div class="d-flex flex-column" role="search">
    <p>Fare: <small class= "text-muted" id="fare"></small></p>
    <p>text: <small class= "text-muted" id="tex"></small></p>
    <p>Total-cost: <small class= "text-muted" id="total-cost"></small></p>
    
    <input class="form-control m-2" id = "distance-input" type="search" placeholder="Koto kilo java" aria-label="Search">
    <input class="form-control m-2" id = "quantity-input" type="search" placeholder="Koita gari lagve
    " aria-label="Search">

    <button onclick='calculateCost(${calculate})' class="btn btn-outline-success" type="submit">Submit</button>
  </div>
  </div>
</div>
 `
}


function calculateCost (obj){
  const quantity = document.getElementById('distance-input').value;
  const distance = document.getElementById('quantity-input').value;
  const faree = document.getElementById('fare')
  
  faree.innerHTML = quantity * distance * obj.farePerKilo;
}

document.getElementById('search-btn').addEventListener('click', function(){
  const value = document.getElementById('search-value').value;
  for (let i = 0; i < services.length; i++) {
    
    const element = services[i];
    if (value.toLowerCase() == element.veheicle.toLowerCase()) {
      document.getElementById("main-container").innerHTML = '';
      displayServices(element)
      return;
    }

  } 
  alert('Nothing not found input')

})

// 1 kilometer jete lage 4 doller

// vara korbo 30 kilor jonno

// tahole ekta garir vara koto = varaPerkIlo * kotokilojabo * koi gari lagbe