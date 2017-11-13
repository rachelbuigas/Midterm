filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

$( ".cross" ).hide();
$( ".mobile" ).hide();
$( ".hamburger" ).click(function() {
$( ".mobile" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".mobile" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


// filterDivs.style.transition="all 2s"


// $grid.isotope({ filter: '.all' });

// $grid.isotope({ filter: '.publicaion' });

// $grid.isotope({ filter: '.marketing' });

// $grid.isotope({ filter: '.branding' });

// $grid.isotope({ filter: '.4fun' });

// $grid.isotope({ filter: '.web' });

// var $containter = $('containter').all({
//   // options
// });
// // filter items on button click
// $('.filter-button').on( 'click', function() {
//   var filterValue = $(this).attr('data-filter');
//   $containter.isotope({ filter: filterValue });
// });