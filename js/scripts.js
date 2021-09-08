/*!
 * Start Bootstrap - SB Admin v7.0.2 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//ejercicio 1
let eje1 = document.getElementById('eje1');
eje1.addEventListener('click', ejer);

function ejer() {
    var contents = prompt("What to put in Pandora's box?", "all evils");
    console.log("putting " + contents + " into Pandora's box");
    $('#pandora').html(contents);
}
// ejercicio 2
let eje2 = document.getElementById('eje2');
eje2.addEventListener('click', ejerdos);

function ejerdos() {
    var items = prompt("Horcruxes", "<li>the diary</li><li>the locket</li>");
    $('#horcruxes').html(items);
}
//ejercicio 3
let eje3 = document.getElementById('eje3');
eje3.addEventListener('click', ejertres);

function ejertres() {
    $("#fig1").css("border", "2px solid red");
    $("#fig1").css("text-align", "center");
    $("#fig1").css("padding", "10px");
    $("#fig1 figcaption").css("background-color", "gold");
}
//ejercicio 4
let eje4 = document.getElementById('eje4');
eje4.addEventListener('click', ejercuatro);

function ejercuatro() {
    $("#fig2 img").attr("src", "assets/img/ron.jpg");
    $("#fig2 img").attr("alt", "Ron Weasley");
    $("#fig2 figcaption").html("Ron Weasley lo interpreta Rupert Grint");
}
//ejercicio 5
let eje5 = document.getElementById('eje5');
eje5.addEventListener('click', ejercinco);

function ejercinco() {
    $("#fig3").hide();
}

let eje51 = document.getElementById('eje51');
eje51.addEventListener('click', ejercincou);

function ejercincou() {
    $("#fig3").show();
}
//ejercicio 6
let eje6 = document.getElementById('eje6');
eje6.addEventListener('click', ejerseis);

function ejerseis() {
    $("#characters1 li").css("font-size", "18px"); // matches 10 elts
    $("#characters1 .gryffindor").css("color", "red"); // matches 5 elts
    $("#characters1 .slytherin").hide(); // matches 3 elts
}
//ejercicio 7
let eje7 = document.getElementById('eje7');
eje7.addEventListener('click', ejersiete);

function ejersiete() {
    $("#fig4")
        .css("border", "2px solid red")
        .css("text-align", "center")
        .css("padding", "10px");
}
//ejercicio 8
let eje8 = document.getElementById('eje8');
eje8.addEventListener('click', ejerocho);

function ejerocho() {
    $("<li>")
        .html("Percy")
        .addClass("gryffindor")
        .css("text-decoration", "line-through")
        .appendTo("#characters2");
}
//ejercicio 9
let eje9 = document.getElementById('eje9');
eje9.addEventListener('click', ejernueve);

function ejernueve() {
    $("#nav-goes-here").load("home.html nav");
}
//ejercicio 10
let eje10 = document.getElementById('eje10');
eje10.addEventListener('click', ejerdiez);

function ejerdiez() {
    $("#fig2a").removeClass("gryffindor");
    $("#fig2a").addClass("slytherin");
}