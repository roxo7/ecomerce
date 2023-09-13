let dataa = [];
let dataaa = [];
let p = [];
let dim = 0;
let id;
let clear = 0;
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
function filterObjects(l) {
  if (clerk == 0) {
    dataa = MultifilterOrsingle(l);

    clerk = 1;
    console.log(dataa);
  } else {
    let ding = document.getElementById(l);
    let k = ding.innerText;
    let lowr = k.toLowerCase();
    dataaa.forEach((d, f) => {
      if (Object.values(d).includes(lowr) || d[lowr] == true) {
        if (!dataa.includes(d)) {
          dataa.push(d);
          console.log(dataa);
          dataa.forEach((e, i) => {
            console.log(e.id);

            let list = document.getElementById(e.id);
            console.log(list);
            if (list !== null) {
              list.remove();
            }
            listPage.appendChild(reuseProductDisplay(e, i));
          });
        } else {
          if (dataa.length == dataaa.length) {
            location.reload();
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
  let col = colorNames[i].toUpperCase();

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
  let mod = modalNames[i].toUpperCase();
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
  let bran = BrandNames[i].toUpperCase();
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
    console.log(ding);
    dataa = SerchbarfilterOrsingle(ding);
    if (dataa.length < 1) {
      dataa = dataaa;
      location.reload();
    }
  }, 2300);
}
function SerchbarfilterOrsingle(l) {
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
  listPageAtribute.value = "col-3 col-sm-3 mainListDiv ";
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
  coloratribute.value = "form-check";

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
    ${j}
  </label>
  `;

  return colordiv;
}

// ==============================================================================

let dataa = [];
let dataaa = [];
let p = [];
let dim = 0;
let id;
let clear = 0;
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

  let furtherFilter = 0;
  dataa.forEach((e, i) => {
    if (Object.values(e).includes(lowr) || e[lowr] == true) {
      console.log(e.id);
      furtherFilter = e;
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
      // return true;
    }
  });
  // if (furtherFilter.length == 0) {
  //   dataaa.forEach((e, i) => {
  //     if (Object.values(e).includes(lowr) || e[lowr] == true) {
  //       console.log(e.id);
  //       furtherFilter = e;
  //     }
  //   });
  // }
  return furtherFilter;
  // ====================
  // ========================
}
let clerk = 0;
function filterObjects(l) {
  if (clerk == 0) {
    dataa = MultifilterOrsingle(l);

    clerk = 1;
    console.log(dataa);
  } else {
    // let ding = document.getElementById(l);
    // let k = ding.innerText;
    // let lowr = k.toLowerCase();
    let sim = MultifilterOrsingle(l);
    console.log(sim);
    if (!dataa.includes(sim)) {
      dataa.push(sim);
      dataa.forEach((e, i) => {
        listPage.appendChild(reuseProductDisplay(e, i));
      });
    }

    console.log(dataa);
    // dataaa.forEach((d, f) => {
    //   if (Object.values(d).includes(lowr) || d[lowr] == true) {
    //     if (!dataa.includes(d)) {
    //       dataa.push(d);
    //       console.log(dataa);
    //       dataa.forEach((e, i) => {
    //         console.log(e.id);

    //         let list = document.getElementById(e.id);
    //         console.log(list);
    //         if (list !== null) {
    //           list.remove();
    //         }
    //         listPage.appendChild(reuseProductDisplay(e, i));
    //       });
    //     } else {
    //       if (dataa.length == dataaa.length) {
    //         location.reload();
    //       }
    //     }
    //   }
    // });
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
  let col = colorNames[i].toUpperCase();

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
  let mod = modalNames[i].toUpperCase();
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
  let bran = BrandNames[i].toUpperCase();
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
    console.log(ding);
    dataa = SerchbarfilterOrsingle(ding);
    if (dataa.length < 1) {
      dataa = dataaa;
      location.reload();
    }
  }, 2300);
}
function SerchbarfilterOrsingle(l) {
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
  listPageAtribute.value = "col-3 col-sm-3 mainListDiv ";
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
  coloratribute.value = "form-check";

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
    ${j}
  </label>
  `;

  return colordiv;
}

// ================================================================================
// ==================landing page code=======================================
let productId;
let dataa = [];
let wishlistId;
let wishlisttt = [];
fetch("./TEASHIRT.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataa.push(...data);
    // dataaa.push(...data);

    // landing(data);
    let paramId = new URL(document.location).searchParams;
    productId = paramId.get("id");
    product();
  });
let landPage = document.querySelector(".landd");
let branddetail = document.querySelector(".branddetails");
let pricedeatil = document.querySelector(".prisedetails");
let sizedeatil = document.querySelector(".size");
let modall = document.querySelector(".modall");
let reviews = document.querySelector(".reviews");
let p = Date();
console.log(p);
function product() {
  console.log(productId);
  console.log(typeof productId);
  console.log(dataa);
  let colornames = dataa.forEach((e, i) => {
    if (e.id == productId) {
      console.log(e.brand, e.price);
      branddetail.innerHTML = e.brand;
      pricedeatil.innerHTML = e.price;
      wishlistId = e.id;
      // modall.innerHTML = e.brand;
      e.coments.forEach((k, n) => {
        let rewievDiv = document.createElement("div");
        let reviewAtribute = document.createAttribute("class");
        reviewAtribute.value = "col ";
        rewievDiv.innerHTML = `
        
        <div class="col"> 
        <div class="row row-cols-2">
    <div class="col" style="color:gray"><h4>reviwer Name :</h4>${k.reviewdBy} </div>
    <div class="col" style="color:gray"><h5>message :</h5> ${k.review}</div>
         </div>
        </div>
        <hr>
`;
        reviews.appendChild(rewievDiv);
      });
      e.img.forEach((l, i) => {
        let landPageDiv = document.createElement("div");
        let landPageAtribute = document.createAttribute("class");
        landPageAtribute.value = "col-12 col-sm-6 col-lg-4 col-md-6 p-0 ";
        landPageDiv.setAttributeNode(landPageAtribute);
        let modelDiv = document.createElement("div");
        // let modelAtribute = document.createAttribute("class");
        // modelAtribute.value = "col-12 col-sm-5 ";
        // modelDiv.setAttributeNode(modelAtribute);
        //

        landPageDiv.innerHTML = `
        <div class="card mt-0 landimg">
            <img src="${l}" class="card-img-top" alt="..." >

          </div>
`;
        landPage.appendChild(landPageDiv);

        if (i == 0) {
          landPage.appendChild(landPageDiv);
          modelDiv.innerHTML = `
            <div class="card " style="">
          <div class="row g-0 border-bottom border-3 border-danger">
            <div class="col-md-4">
              <img src="${l}" style="height:260px;width:165px;"alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
              <h1> BRAND</h1>
                <h2 class="card-title">${e.brand}</h2>
                 <h5>${e.price}  Rs</h5>
                 <h6>${p}</h6>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
           `;
          modall.appendChild(modelDiv);
        }
        size(e, i);
      });
    }
  });
}
let sid = 500;
function size(e, i) {
  console.log(e.size[i]);

  if (i < e.size.length) {
    let sizeDiv = document.createElement("div");
    let sizeAtribute = document.createAttribute("class");
    sizeAtribute.value = "d-flex flex-wrap";
    sizeDiv.setAttributeNode(sizeAtribute);
    let k = sid++;
    console.log(k);
    sizeDiv.innerHTML = `
          <div class=" d-flex flex-wrap fw-normal fs-4 pt-2 rounded-circle " style="height:45px;width:45px;text-align: center; color:grey;border:2px solid grey;margin-left:20px " id=${k} onclick="sizeFunction(${k})"><h6 style="text-align:center ;padding-left:13px;">${e.size[i]}</h6></div>
           </div>
 `;
    sizedeatil.appendChild(sizeDiv);
  }
}

//  if (localStorage.getItem("wishlists") == null) {
//    let wishlist = [];
//    let size = wishlist.length;
//    wishlist[size] = l;
//    localStorage.setItem("wishlists", JSON.stringify(wishlist));
//    console.log(wishlist);
//  } else {
//    let lists = localStorage.getItem("wishlists");
//    console.log(JSON.parse(lists));
//    let wishlistss = JSON.parse(lists);
//    localStorage.setItem("wishlists", JSON.stringify(wishlistss));
//    let listss = localStorage.getItem("wishlists");
//    console.log(listss);
//  }
let sizeid;

function sizeFunction(y) {
  let siz = document.getElementById(y);
  let dizz = document.getElementById("disabledd");
  console.log(dizz);
  dizz.removeAttribute("disabled");
  let l = siz.innerText;
  siz.style.backgroundColor = "#ff3e6c";
  siz.style.color = "white";
  sizeid = l;
  console.log(l);
}
console.log(sizeid);
function wishListDisplay() {
  // console.log(l);
  if (localStorage.getItem("wishlists") == null) {
    let wishlist = [];
    console.log([+productId, sizeid]);
    let size = wishlist.length;
    wishlist[size] = [+productId, sizeid];
    // wishlist[size] = +productId;
    localStorage.setItem("wishlists", JSON.stringify(wishlist));
    console.log(wishlist);
  } else {
    let lists = localStorage.getItem("wishlists");
    console.log(JSON.parse(lists));
    let wishlistss = JSON.parse(lists);
    wishlisttt = JSON.parse(lists);
    let size = wishlistss.length;
    // wishlistss[size] = +productId;
    wishlistss[size] = [+productId, sizeid];

    // below code in if condition im trying to find out the duplicates
    if (
      // console.log(
      wishlisttt.every((e, i) => {
        if (e[0] == +productId && e[1] == sizeid) {
          console.log(e[0], e[1]);
          // console.log([+productId, sizeid], "lastadded");
          return false;
        } else {
          return true;
        }
      })
      // )
    ) {
      console.log(wishlisttt);
      localStorage.setItem("wishlists", JSON.stringify(wishlistss));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Item and SIZE already in the wishlist!",
        footer: "<h6>try other SHIRTS<h6>",
      });
      setTimeout(() => {
        window.document.location =
          "TEASHIRT-WISHLIST.HTML" + "?id=" + wishlistId;
      }, 2700);
    }
    // let listss = localStorage.getItem("wishlists");
    // console.log(listss);
  }
  setTimeout(() => {
    window.document.location = "TEASHIRT-WISHLIST.HTML" + "?id=" + wishlistId;
  }, 1000);
}
// =========================================================================
// =============================landing page html======================
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">
//   <link rel="icon" href="../MYNTRA-TEASHRT-PROJECT/images/myntratitlelogo.png" type="image/icon type">
//   <!-- <link rel="stylesheet" type="text/css" href="TEASHIRT.CSS" /> -->
//   <link rel="stylesheet" type="text/css" href="teashirtforsas.css" />
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
//   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
//     integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
//     integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
//   <script src="https://code.jquery.com/jquery-3.6.0.min.js"
//     integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
// </head>
// <body>
//   <nav class="navbar navbar-expand-lg fixed-top navbar-light " id="dinga">

//   </nav>
//   <hr class="landTop">
//   <div class="container landTop ">
//     <div class="row row-cols-2   landdd ">
//       <div class="col-6  col-md-12 col-sm-12 col-xs-12">
//         <div class="container">
//       <div class="row row-cols-2  col-sm-12 landdd landd">

//       </div>
//       </div>
//       </div>
//       <div class="col-6
//         col-md-12  col-sm-12 col-xs-12">
//         <div class="container ">
//         <div class="row landd col-sm-12">
//           <h5 class="mt-5 col-12">
//             BRAND
//           </h5>
//           <h5 class=" pt-2  branddetails"></h5>

//           <hr class="mt-5">
//           <h5 class="color-secondary">PRICE</h5>
//           <h5 class=" pt-2 prisedetails"></h5>
//           <hr class="mt-5">
//           <h6 class="color-secondary">SIZE</h6>
//           <div>
//             <div class=" d-flex size">

//             </div>
//         <!-- ===================================== -->

//         <!-- ===================================== -->
//           <hr class="mt-3">
//         <!-- type="button"data-bs-toggle="modal"data-bs-target="#exampleModal" -->
//           <button class="btn  btn-outline-light btn-primary btn-inline btn-lg mt-5 border-0 cartbuton" style="background-color:#ff3e6c;" id="disabledd" onclick= "wishListDisplay()"  disabled>add to cart <i class="bi bi-handbag"></i>
// </button>

// <!-- <a href="TEASHIRT-WISHLIST.HTML"> -->
//           <button type="button"data-bs-toggle="modal"data-bs-target="#exampleModal"    class="btn btn btn-primary btn-outline-light btn-lg mt-5 " style="background-color:#ff3e6c;" onclick="addTocart()">add to wish list <i class="bi bi-heart"></i>

// </button>

// <!-- </a> -->
// <hr>
// <h4>reviwes and coments</h4>
// <div class="container">
//   <div class="col row-cols-auto reviews">

//   </div>
// </div>

// <!-- <a href="TEASHIRT-WISHLIST.HTML"> hi macha</a> -->
// </div>>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   <hr class="landTop">
//   <!-- ======================================================================== -->
//   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLabel">I WISH TO MAINTAIN YOUR DATA SO DO GET REGISTERED <i
//               class="bi bi-handbag"></i></h5>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class=" card mb-3 modal-body modall" style="max-width: 540px;">
//         </div>
//         <div class="modal-footer">
//           <a href="TEASHIRT-LISTINGPAGE.HTML">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           </a>

//           <button type="button" class="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>
// <!-- =========================================================================== -->
// <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
//   <script>
//     $(function () {
//       $("#dinga").load("REUSABLE-NAVBAR.HTML");
//     });
//   </script>
// <script src="LANDINGPAGE.JS"></script>

// </body>

// </html>
