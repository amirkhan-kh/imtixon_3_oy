
let customer = JSON.parse(localStorage.getItem("users")) || [
    {
        id:1,
        fname:"Muhammadyusuf",
        lname:"Gulomov",
        phone:"99 439 33 47",
        region:"Andijon",
        budget:-1500
    },
    {
        id:2,
        fname:"Og'abek",
        lname:"Qamridinov",
        phone:"99 456 67 489",
        region:"Samarqand",
        budget:200000
    },
    {
        id:3,
        fname:"Sobir",
        lname:"Ro'ziyev",
        phone:"33 345 23 23",
        region:"Farg'ona",
        budget:100400
    },
    {
        id:4,
        fname:"Shavkat",
        lname:"Hursanaliyev",
        phone:"93 576 56 89",
        region:"Andijon",
        budget:16070000
    },
    {
        id:5,
        fname:"Quvonch",
        lname:"Asqaraliyev",
        phone:"99 439 33 47",
        region:"Andijon",
        budget:-1500
    },
    {
        id:6,
        fname:"Laylo",
        lname:"Dilbaralieva",
        phone:"77 567 67 67",
        region:"Toshkent",
        budget:100
    },
    {
        id:7,
        fname:"Alisa",
        lname:"Ana",
        phone:"88 657 54 35",
        region:"Toshkent",
        budget:5000
    },
    {
        id:8,
        fname:"Odilbek",
        lname:"Bo'stonov",
        phone:"33 433 33 33",
        region:"Andijon",
        budget:900000
    }
];

const form = document.querySelector("#addNameCar");
const tbody = document.querySelector("#addNameModel");
const inputFristname = document.querySelector("#addNameModel");
const inputLastName = document.querySelector("#addNameModel");
const inputPhoneNumber = document.querySelector("#idNumber");
const inputRegion = document.querySelector("#idNumber");
// const inputBudget = document.querySelector(".registration__budget-input");
// const tableFristName = document.querySelector("#registration__name")
// const tableLastname = document.querySelector("#registration__last")
// const tableRegion = document.querySelector("#registration__region")
// const tableBudget = document.querySelector("#registration__budget")


function mapCustomerTable(mapCustomerInfos) {
    let tr = "";
    mapCustomerInfos.forEach((customerInfo,index) => {
        tr += `
            <tr>
                <td class="registration__tbody__td">${index + 1}</td>
                <td class="registration__tbody__td">${
                    customerInfo.fname.slice(0, 1).toUpperCase()+
                    customerInfo.fname.slice(1).toLowerCase()
                }</td>
                <td class="registration__tbody__td">${
                    customerInfo.lname.slice(0, 1).toUpperCase()+
                    customerInfo.lname.slice(1).toLowerCase()
                }</td>
                <td class="registration__tbody__td">${
                    customerInfo.phone.slice(0, 1).toUpperCase()+
                    customerInfo.phone.slice(1).toLowerCase()
                }</td>
                <td class="registration__tbody__td">${
                    customerInfo.region.slice(0, 1).toUpperCase()+
                    customerInfo.region.slice(1).toLowerCase()
                }</td>
                <td class="registration__tbody__td">${customerInfo.budget}</td>
            </tr>
        `
    });

    tbody.innerHTML = tr
}
mapCustomerTable(customer)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inputFristname.value.trim()) return alert("Iltimos Frist Nameni to'liq kriting");
    if (!inputLastName.value.trim()) return alert("Iltimos Last Nameni to'liq kriting");
    if (!inputPhoneNumber.value.trim()) return alert("Iltimos Phone number to'liq kriting");
    if (!inputRegion.value.trim()) return alert("Iltimos Region to'liq kriting");
    if (!inputBudget.value.trim()) return alert("Iltimos Budget to'liq kriting");

    let newObject = {
        fname: inputFristname.value,
        lname: inputLastName.value,
        phone: inputPhoneNumber.value,
        region: inputRegion.value,
        budget: inputBudget.value
    };

    customer.push(newObject);
    mapCustomerTable(customer);