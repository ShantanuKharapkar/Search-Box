const search = () => { // function activate when onkeyup activated 
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    // after user will given input then we match that input

    // product list is unside the search-items
    const storeitems = document.getElementById("product-list")
    // product is inside in the product-list
    const product = document.querySelectorAll(".product")
    // h2 is under product
    const pname = storeitems.getElementsByTagName("h2")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let  textvalue = match.textContent || match.innerHTML
            // textContent is actually h2

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display ="none";
            }

        }
    }

}