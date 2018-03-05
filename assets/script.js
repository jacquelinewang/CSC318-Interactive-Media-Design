$(document).ready(function() {
    $("#go_back").click(function(event) {
        event.preventDefault();
        window.history.back()
    });

    $("#lake_ontario").on({
        "mouseover": function() {
            $("#map").attr("src", 'assets/pictures/map-ontario.png');
            console.log("in");
        },
        "mouseout": function() {
            $("#map").attr("src", 'assets/pictures/map.png');
            console.log("out")
        }
    });

    $("#lake_erie").on({
        "mouseover": function() {
            $("#map").attr("src", 'assets/pictures/map-erie.png');
        },
        "mouseout": function() {
            $("#map").attr("src", 'assets/pictures/map.png');
        }
    });

    $("#lake_simcoe").on({
        "mouseover": function() {
            $("#map").attr("src", 'assets/pictures/map-simcoe.png');
            console.log("in");
        },
        "mouseout": function() {
            $("#map").attr("src", 'assets/pictures/map.png');
            console.log("out")
        }
    });

    $("#georgian_bay").on({
        "mouseover": function() {
            $("#map").attr("src", 'assets/pictures/map-georgian-bay.png');
            console.log("in");
        },
        "mouseout": function() {
            $("#map").attr("src", 'assets/pictures/map.png');
            console.log("out")
        }
    });

    var all_info_displayed = false;

    $("#info1").fadeIn(1000, function() {
        $("#info1").delay(1000).fadeOut(1000, function () {
            $("#info2").fadeIn(1000, function () {
                $("#info2").delay(1000).fadeOut(1000, function () {
                    $("#info3").fadeIn(1000, function () {
                        $("#info3").delay(1000).fadeOut(1000, function() {
                            all_info_displayed = true;
                        })
                    })
                })
            })
        })
    });

    $("#camera_info").click( function() {
        if (all_info_displayed) {
            $("#info1").toggle();
            $("#info2").toggle();
            $("#info3").toggle();
        }
    });

    $("#dropdown_button").click( function() {
        $("#dropdown_list").toggle();
        $("div#dropdown_list a#dropdown_button").toggle();
    });

    $("#take_picture").click( function() {
        window.location = "cod.html";
    })

});