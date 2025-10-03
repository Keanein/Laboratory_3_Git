var vehicles = [
    { Car_model: "Mitsubishi Montero 2018", Car_type: "SUV", Car_mileage: 70000, Car_fuelEfficiency: 7.5 },
    { Car_model: "Ford Everest 2018", Car_type: "SUV", Car_mileage: 70000, Car_fuelEfficiency: 12 },
    { Car_model: "Toyota Hilux", Car_type: "Truck", Car_mileage: 60000, Car_fuelEfficiency: 12 },
    { Car_model: "Honda Civic", Car_type: "Car", Car_mileage: 60000, Car_fuelEfficiency: 14 },
    { Car_model: "Suzuki S-Presso", Car_type: "Car", Car_mileage: 20000, Car_fuelEfficiency: 22 }
];

//Total mileage
function calculateTotalMileage(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total = total + list[i].Car_mileage;
    }
    return total;
}

//Filters vehicles by type
function filterVehiclesByType(list, type) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].Car_type == type) {
            result.push(list[i]);
        }
    }
    return result;
}

//Fuel-efficient vehicle
function findMostFuelEfficient(list) {
    var max = list[0].Car_fuelEfficiency;
    var index = 0;
    for (var i = 1; i < list.length; i++) {
        if (list[i].Car_fuelEfficiency > max) {
            max = list[i].Car_fuelEfficiency;
            index = i;
        }
    }
    return list[index];
}

//Mileage ranges
function groupVehiclesByMileage(list) {
    var low = [];
    var medium = [];
    var high = [];
    for (var i = 0; i < list.length; i++) {
        var m = list[i].Car_mileage;
        if (m < 30000) {
            low.push(list[i]);
        } else if (m <= 60000) {
            medium.push(list[i]);
        } else {
            high.push(list[i]);
        }
    }
    return {
        "Low (<30k)": low,
        "Medium (30k-60k)": medium,
        "High (>60k)": high
    };
}

//New vehicles asynchronously
function fetchNewVehicles() {
    document.getElementById('output').textContent = "Fetching new vehicles...";
    setTimeout(function() {
        var newVehicles = [
            { Car_model: "Hyundai Tucson 2016", Car_type: "SUV", Car_mileage: 60000, Car_fuelEfficiency: 10.5 },
            { Car_model: "Jeep Wrangler 2019", Car_type: "SUV", Car_mileage: 40000, Car_fuelEfficiency: 8.5 }
        ];
        for (var i = 0; i < newVehicles.length; i++) {
            vehicles.push(newVehicles[i]);
        }
        document.getElementById('output').textContent = "New vehicles added:\n" + JSON.stringify(newVehicles, null, 2);
    }, 1500);
}

function showTotalMileage() {
    var total = calculateTotalMileage(vehicles);
    document.getElementById('output').textContent = "Total Mileage: " + total;
}

function showFilteredVehicles() {
    var selectedType = document.getElementById('typeFilter').value;
    var filtered = filterVehiclesByType(vehicles, selectedType);
    document.getElementById('output').textContent = selectedType + "s:\n" + JSON.stringify(filtered, null, 2);
}

function showMostEfficient() {
    var best = findMostFuelEfficient(vehicles);
    document.getElementById('output').textContent = "Most Fuel Efficient Vehicle:\n" + JSON.stringify(best, null, 2);
}

function showGroupedVehicles() {
    var groups = groupVehiclesByMileage(vehicles);
    document.getElementById('output').textContent = "Vehicles Grouped by Mileage:\n" + JSON.stringify(groups, null, 2);
}

window.onload = function() {
    loadVehicles();
};