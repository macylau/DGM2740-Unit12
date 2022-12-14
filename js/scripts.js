// what is the path to the JSON file?
const apiURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
    
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    
    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    let myDivTag = document.createElement("div");
    let mySpanTag = document.createElement("span");
    let mySpanTag2 = document.createElement("span");

    let myCarIcon = document.createElement("i");
    myCarIcon.className = "icon ion-md-car";

    let myAddressTag = document.createElement("p");
    myAddressTag.textContent = myList[i].address[0];

    let myAddressTag1 = document.createElement("p");
    myAddressTag1.textContent = myList[i].address[1];

    let myAddressTag2 = document.createElement("p");
    myAddressTag2.textContent = myList[i].address[2];

    let myPhoneTag = document.createElement("p");
    myPhoneTag.textContent = myList[i].phone;

    let myPhoneIcon = document.createElement("i");
    myPhoneIcon.className = "icon ion-md-call";

    mySpanTag.appendChild(myCarIcon);
    mySpanTag.appendChild(myAddressTag);
    mySpanTag.appendChild(myAddressTag1);
    mySpanTag.appendChild(myAddressTag2);

    mySpanTag2.appendChild(myPhoneIcon);
    mySpanTag2.appendChild(myPhoneTag);

    myDivTag.appendChild(mySpanTag);
    myDivTag.appendChild(mySpanTag2);


    let mySectionTag = document.createElement("section");
    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myDivTag);

    


    // let myAddressTag = document.createElement("p");
    // myAddressTag.textContent = myList[i].phone;

    // let myDivTag = document.createElement("div");
    // myDivTag.appendChild(mySpanTag);

    // let mySpanTag = document.createElement("span");
    // mySpanTag.appendChild(myAddressTag);








    document.getElementById('inventoryWrapper').appendChild(mySectionTag);
  }
    
}); //end of "then" fat arrow function