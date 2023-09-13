let dataa = [];
let dataaa = [];
let p = [];
let dim = 0;
let id;
let clear = 0;
let closeClick = [];
fetch("./TEASHIRT.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    id = data.length * 2;
    console.log(id);
    console.log(data);
    dataa.push(...data);
    dataaa.push(...data);
    id = data.length + 2;
    console.log(dataa);
    console.log(dataaa);
    // dati();
  });

// ====================================================================
let colorNames = [
  "black",
  "SteelBlue",
  "gray",
  "Orange",
  "LightCoral",
  "IndianRed",
];
let modalNames = [
  "groomed",
  "longhair",
  "glasses",
  "headphone",
  "hat",
  "watch",
];
let BrandNames = [
  "roadster",
  "moda",
  "hrx",
  "london hills",
  "louis philipe",
  "puma",
];
// let price = ["200-400 rs", "400-700 rs", "7000-1900 rs"];

function MultifilterOrsingle(l) {
  let ding = document.getElementById(l);

  console.log(dataa);
  console.log(dataaa);
  p.push(ding.innerText);
  console.log(p);

  let k = ding.innerText;

  let lowr = k.toLowerCase();
  console.log(lowr);
  console.log(typeof lowr);
  console.log(clear);
  console.log(dataa);

  dataa.forEach((e, i) => {
    console.log(e.id);
    let list = document.getElementById(e.id);
    console.log(list);
    if (list !== null) {
      list.remove();
    }
  });
  // }

  let furtherFilter = dataa.filter((e, i) => {
    if (Object.values(e).includes(lowr) || e[lowr] == true) {
      console.log(e.id);

      //     let listPageDiv = document.createElement("div");
      //     let listPageAtribute = document.createAttribute("class");
      //     listPageAtribute.value = "col-3 col-sm-3 mainListDiv ";
      //     listPageDiv.setAttributeNode(listPageAtribute);
      //     let listPageAtributeid = document.createAttribute("id");
      //     listPageAtributeid.value = `${e.id}`;
      //     listPageDiv.setAttributeNode(listPageAtributeid);

      //     listPageDiv.innerHTML = `
      //           <a  style="text-decoration: none;"onclick="productDisplay(${
      //             e.id
      //           })" >
      //           <div class="card mt-4 mr-5 back" style="width: 13rem ;color:grey;">
      //             <img src="${
      //               e.img[i - i]
      //             }"  class="card-img-top listzoom" alt="...">
      //             <div class="card-body">
      //               <h5 class="card-title" >${e.brand}</h5>
      //               <h6 class="card-title" >${e.price} Rs</h6>
      //             </div>
      //           </div>
      //           </a>
      // `;
      listPage.appendChild(reuseProductDisplay(e, i));
      return true;
    }
  });
  return furtherFilter;
  // ====================
  // ========================
}
let clerk = 0;
let idisunshift = 0;

function filterObjects(l) {
  if (clerk == 0) {
    dataa = MultifilterOrsingle(l);
    console.log(dataa);
    let idis = dataa.map((d, i) => {
      return d.id;
    });
    idis.unshift(p[0]);

    closeClick.push(idis);
    clerk = 1;
  } else {
    console.log(dataa);
    let ding = document.getElementById(l);
    let k = ding.innerText;

    let lowr = k.toLowerCase();
    console.log(lowr);
    let c = [];
    dataaa.forEach((d, f) => {
      if (Object.values(d).includes(lowr) || d[lowr] == true) {
        if (!dataa.includes(d)) {
          dataa.push(d);
          if (!c.includes(d.id)) {
            c.push(d.id);
          }
          //===============
          dataa.forEach((e, i) => {
            let list = document.getElementById(e.id);
            console.log(list);
            if (list !== null) {
              list.remove();
            }
            listPage.appendChild(reuseProductDisplay(e, i));
          });
          if (!closeClick.includes(c)) {
            c.unshift(lowr);
            if (!c.length == 0) {
              closeClick.push(c);
            }
          }
          console.log(closeClick);
        } else {
          console.log("hi");
          closeClick.find((e, l) => {
            if (e.includes(lowr)) {
              console.log(e);
              e.slice(1).forEach((k) => {
                console.log(k);
                let list = document.getElementById(k);
                console.log(list);
                if (list !== null) {
                  list.remove();
                }
              });
            }
          });
          console.log(dataa);

          console.log(d);

          const elem = document.querySelector("#listPage");
          console.log(elem.childNodes.length);

          if (elem.childNodes.length == 1) {
            // location.reload();
            clerk = 0;
            closeClick = [];
          }
        }
      }
    });
  }
}
// ======================for mega nav bar======================
// let a = document.querySelector(".prodlist");

// for (let i = 1; i < 12; i++) {
//   hiMan(i);
// }

// function hiMan(i) {
//   console.log(i);

//   let c = document.createElement("div");
//   let p = document.createAttribute("class");
//   p.value = "col-2";
//   c.setAttributeNode(p);
//   c.innerHTML = `
//     <h6>${i}hi man</h6>
//     <p>${i}bi</p>
//      Lorem ipsum amet, consectetur
//      <hr>
//   `;
//   a.appendChild(c);
// }
//================= end of mega nav bar====================================
let listPage = document.querySelector(".listt");
let colorcoll = document.querySelector(".colorcol");
let modall = document.querySelector(".modalapearence");
let brandd = document.querySelector(".brand");
let priceee = document.querySelector(".priceee");
setTimeout(() => {
  // console.log(dataa);
  let colornames = dataa.forEach((e, i) => {
    //     let listPageDiv = document.createElement("div");
    //     let listPageAtribute = document.createAttribute("class");
    //     listPageAtribute.value = "col-3 col-sm-3 ";
    //     listPageDiv.setAttributeNode(listPageAtribute);
    //     let listPageAtributeid = document.createAttribute("id");
    //     listPageAtributeid.value = `${e.id}`;
    //     listPageDiv.setAttributeNode(listPageAtributeid);
    //     //href="TEASHIRT-LANDINGPAGE.HTML"
    //     id = e.id;
    //     listPageDiv.innerHTML = `
    //           <a   style="text-decoration: none;" onclick="productDisplay(${
    //             e.id
    //           })" >
    //           <div class="card mt-4 mr-5 back" style="width: 13rem ;color:grey;">
    //             <img src="${
    //               e.img[i - i]
    //             }"  class="card-img-top listzoom " alt="...">
    //             <div class="card-body">
    //               <h5 class="card-title" >${e.brand}</h5>
    //               <h6 class="card-title" >${e.price} Rs</h6>
    //             </div>
    //           </div>
    //           </a>
    // `;
    listPage.appendChild(reuseProductDisplay(e, i));
  });
  // mainId();
}, 800);
// setTimeout(() => {
// function mainId() {
// console.log(id);

colorNames.forEach((e, i) => {
  modalll(e, i);
});
// }
// }, 1500);

function modalll(e, i) {
  // =============================for displaying colors===========================
  // let colordiv = document.createElement("div");
  // let coloratribute = document.createAttribute("class");
  // coloratribute.value = "form-check";

  // colordiv.setAttributeNode(coloratribute);
  let col = colorNames[i]; //.toUpperCase();
  // colordiv.innerHTML = `
  //   <input class="form-check-input btn-outline-light checkk " style="background-color:${e};"type="checkbox" value="" id="defaultCheck1" onclick="filterObjects(${
  //   i + 100
  // })">
  // <label class="form-check-label dinga" id="${i + 100}"for="defaultCheck1" >
  //   ${col}
  // </label>
  // `;

  colorcoll.appendChild(reuseFilterDisplay(e, i, 100, col));
  // ======================================================================
  // ==================================for displaying modals=======================
  // let moddiv = document.createElement("div");
  // let modatribute = document.createAttribute("class");
  // modatribute.value = "form-check";
  // moddiv.setAttributeNode(modatribute);
  let mod = modalNames[i]; //.toUpperCase();
  // moddiv.innerHTML = `
  //    <input class="form-check-input btn-outline-light checkk" style="background-color:gray;"type="checkbox" value="" id="defaultCheck1" onclick="filterObjects(${
  //      i + 200
  //    })">
  // <label class="form-check-label" id="${i + 200}" for="defaultCheck1">
  //   ${mod}
  // </label>
  // `;
  // console.log(y);
  modall.appendChild(reuseFilterDisplay(e, i, 200, mod));

  // ========================================================================
  // ===================================for displaying brand=========================

  // let brandiv = document.createElement("div");
  // let brandatribute = document.createAttribute("class");
  // brandatribute.value = "form-check";
  // brandiv.setAttributeNode(brandatribute);
  let bran = BrandNames[i]; //.toUpperCase();
  // brandiv.innerHTML = `
  //    <input class="form-check-input btn-outline-light checkk" style="background-color:gray;"type="checkbox" value="" id="defaultCheck1"onclick="filterObjects(${
  //      i + 300
  //    })">
  // <label class="form-check-label" id="${i + 300}" for="defaultCheck1" >
  //   ${bran}
  // </label>
  // `;
  // console.log(y);
  brandd.appendChild(reuseFilterDisplay(e, i, 300, bran));
  // ========================================================

  //   if (i < price.length) {
  //     let pricediv = document.createElement("div");
  //     let priceatribute = document.createAttribute("class");
  //     brandatribute.value = "form-check";
  //     pricediv.setAttributeNode(priceatribute);
  //     let pricee = price[i].toUpperCase();
  //     pricediv.innerHTML = `
  //      <input class="form-check-input  btn-outline-light checkk" style="background-color:gray;"type="checkbox" value="" id="defaultCheck1"onclick="filterObjects(${
  //        i + 40
  //      })">
  //   <label class="form-check-label"id="${i + 40}" for="defaultCheck1">
  //     ${pricee}<span>-400 rs</span>
  //   </label>
  //   `;
  //     // console.log(pricediv);
  //     priceee.appendChild(pricediv);
  //   }
}
function productDisplay(l) {
  window.document.location = "TEASHIRT-LANDINGPAGE.HTML" + "?id=" + l;
}
// =======================================
function SearchFunction() {
  let c = setTimeout(() => {
    let ding = document.getElementById("input").value;
    let sing = document.getElementById("input");
    console.log(ding);
    // sing.addEventListener("keyup", function (event) {
    //   if (event.code === "Enter") {
    //     console.log(event.code);
    //     console.log(typeof event.code);
    //     // event.preventDefault();
    //     console.log(ding);
    //     dataa = SerchbarfilterOrsingle(ding);
    //     console.log(dataa);

    //     // document.getElementById("myBtn").click();
    //   }
    // });

    dataa = SerchbarfilterOrsingle(ding);
    if (dataa.length < 1) {
      dataa = dataaa;
      location.reload();
    }
  }, 2300);
}
function SerchbarfilterOrsingle(l) {
  console.log(l);
  console.log(dataa);
  console.log(dataaa);
  console.log(isNaN(l));

  let lowr = isNaN(l) == true ? l : +l; //this where i assign value based on string or number

  console.log(l);
  dataa.forEach((e, i) => {
    let list = document.getElementById(e.id);
    console.log(list);
    list.remove();
  });

  let furtherFilter = dataa.filter((e, i) => {
    if (Object.values(e).includes(lowr) || e[lowr] == true) {
      console.log(lowr);

      //     let listPageDiv = document.createElement("div");
      //     let listPageAtribute = document.createAttribute("class");
      //     listPageAtribute.value = "col-3 col-sm-3 mainListDiv ";
      //     listPageDiv.setAttributeNode(listPageAtribute);
      //     let listPageAtributeid = document.createAttribute("id");
      //     listPageAtributeid.value = `${e.id}`;
      //     listPageDiv.setAttributeNode(listPageAtributeid);

      //     listPageDiv.innerHTML = `
      //           <a  style="text-decoration: none;"onclick="productDisplay(${
      //             e.id
      //           })" >
      //           <div class="card mt-4 mr-5 back" style="width: 13rem ;color:grey;">
      //             <img src="${
      //               e.img[i - i]
      //             }"  class="card-img-top listzoom" alt="...">
      //             <div class="card-body">
      //               <h5 class="card-title" >${e.brand}</h5>
      //               <h6 class="card-title" >${e.price} Rs</h6>
      //             </div>
      //           </div>
      //           </a>
      // `;
      listPage.appendChild(reuseProductDisplay(e, i));
      return true;
    }
  });
  return furtherFilter;
}

// ============================================================================
//ruse for displaying list of products in the below function
function reuseProductDisplay(e, i) {
  // MY EXPERIMENT ON CODE REUSABILTY GAVE ME A PROPER RESULT QUITE HAPPY
  // ILL be calling this function where ever it is needed and will be appanding it

  let listPageDiv = document.createElement("div");
  let listPageAtribute = document.createAttribute("class");
  listPageAtribute.value = " col-12 col-sm-6 col-md-4  col-lg-3 mainListDiv ";
  listPageDiv.setAttributeNode(listPageAtribute);
  let listPageAtributeid = document.createAttribute("id");
  listPageAtributeid.value = `${e.id}`;
  listPageDiv.setAttributeNode(listPageAtributeid);

  listPageDiv.innerHTML = `
           <a  style="text-decoration: none;"onclick="productDisplay(${e.id})" >
             <div class="card mt-4 mr-5 back" ;color:grey;">
               <img src="${
                 e.img[i - i]
               }"  class="card-img-top listzoom" alt="...">
              <div class="card-body">
                <h5 class="card-title" >${e.brand}</h5>
                <h6 class="card-title" >${e.price} Rs</h6>
              </div>
            </div>
            </a>
   `;
  // console.log(hi);
  return listPageDiv;
}
// console.log(reuse());

// =============================================================================
//ruse for displaying list of filters in the below function

function reuseFilterDisplay(e, i, l, j) {
  let colordiv = document.createElement("div");
  let coloratribute = document.createAttribute("class");
  coloratribute.value = "col-12 form-check";

  colordiv.setAttributeNode(coloratribute);
  // let col = colorNames[i].toUpperCase();
  let color = j == colorNames[i] ? j : "grey";
  // let color = "grey";
  // console.log(color);

  colordiv.innerHTML = `
    <input class="form-check-input btn-outline-light checkk " style="background-color:${color};"type="checkbox" value="" id="defaultCheck1" onclick="filterObjects(${
    i + l
  })">
  <label class="form-check-label dinga" id="${i + l}"for="defaultCheck1" >
   <h6> ${j}</h6>
  </label>
  `;

  return colordiv;
}

// ==============================================================================
