var playing = false;
var mousedown = false;


var pos_selected = false;
var neg_selected = false;

var pic_Array = ["Nh4plus.jpg", "Naplus.jpg", "Kplus.jpg", "Mg2plus.jpg", "Zn2plus.jpg", "Cu2plus.jpg", "Fe2plus.jpg", "Fe3plus.jpg", "Ca2plus.jpg", "Ba2plus.jpg", "Pb2plus.jpg", "Agplus.jpg"];

var negative_ioner = ["NO<sub>3</sub><sup>-</sup>", "Cl<sup>-</sup>", "Br<sup>-</sup>", "I<sup>-</sup>", "SO<sub>4</sub><sup>2-</sup>", "CO<sub>3</sub><sup>2-</sup>", "OH<sup>-</sup>", "S<sup>2-</sup>", "PO<sub>4</sub><sup>3-</sup>"];
var positive_ioner = ["NH<sub>4</sub><sup>+</sup>", "Na<sup>+</sup>", "K<sup>+</sup>", "Mg<sup>2+</sup>", "Zn<sup>2+</sup>", "Cu<sup>2+</sup>", "Fe<sup>2+</sup>", "Fe<sup>3+</sup>", "Ca<sup>2+</sup>", "Ba<sup>2+</sup>", "Pb<sup>2+</sup>", "Ag<sup>+</sup>"];

//var myLoader = html5Preloader();

var c_width = $(".container-fluid").width();
var scrubber = $(".scrubber");

var dragging = false;

var percent = 0;
var runde = 0;

var videoloaded = false;

var divPos = {};
var offset = $("#video").offset();

var opgavetype;
var underopgave;

var opg_pos;
var opg_neg;

var max_score = 0;
var score = 0;
var fejl = 0;

var matrix_Array = [
    [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 6, 7],
    [1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 8, 9],
    [5, 5, 5, 5, 5, 10, 11, 12, 5, 5, 13, 14],
    [1, 1, 1, 1, 1, 2, 3, 4, 24, 24, 24, 7],
    [1, 1, 1, 24, 24, 21, 22, 23, 24, 24, 8, 26],
    [1, 1, 1, 27, 27, 29, 30, 31, 32, 1, 8, 34],
    [1, 1, 1, 35, 36, 37, 38, 39, 24, 41, 42, 43],
    [1, 1, 1, 24, 24, 46, 47, 48, 24, 24, 51, 52]
];

var c_spmArray = [];

// PRELOAD VIDEOS USING html5Preloader.js
// Load videoerne en af gangen og gør billederne aktive som de loades ind...! 
//Noget med et loop ud fra et array af film: 
function manipulate_Arrays() {
    // alert("run me once!" + reaktions_Array.length);
    for (var i = 0; i < reaktions_Array.length; i++) {
        console.log("kører:" + i);
        console.log(reaktions_Array[i].length);
        //c_spmArray.push([]);
        for (var u = 0; u < reaktions_Array[i].length; u++) {
            console.log("kører:" + u);
            console.log(reaktions_Array[i][u][2]);
            if (reaktions_Array[i][u][2] != "intet bundfald" && reaktions_Array[i][u][2] != "no_show") {
                c_spmArray.push([
                    [i],
                    [u]
                ]);
                max_score++;
            }
        }
    }
    console.log(c_spmArray + "max_score: " + max_score);
};

function change_img(selected) {
    if (opgavetype == 1) {
        $(".btn_pos").off("click");
    }
    percent = 0;
    $(".formel_container").fadeOut(0);
    $(".btn_pos").removeClass("btn-primary").addClass("btn-info");
    $(".vid_container").fadeOut(0);
    selected.addClass("btn-primary").removeClass("btn-info");
    //video.currentTime = 0;
    video.pause();
    console.log("pos: " + pos_selected);
    $(".img_container").fadeOut(0, function() {
        $(".img_container").attr("src", "media/img/" + pic_Array[pos_selected]);
        $(".img_container").fadeIn(0);
    });
    $(".pos_stof").html(positive_ioner[pos_selected]);
    $(".formel_container").css("opacity", 0);

}

function change_video() {
    if (opgavetype == 1) {
        $(".btn_neg").off("click");
    }
    var film;
    $(".vid_container").html("<video preload='auto' id='video' class='videoplayer'><source src='media/vid/" + matrix_Array[neg_selected][pos_selected] + ".mp4' autoplay ='true' type='video/mp4'></video>");
    $(".img_container").hide();
    $(".vid_container").show();

    videoloaded = false;
    $(".loader").show();
    video.addEventListener("canplaythrough", loadSuccess);
    $(".formel_container").css("opacity", 0);
}


$(document).ready(function() {

    manipulate_Arrays();
    populate_btns();
    //load_videos(0);
    $(".vid_container").hide();
    $(".scrub_container").hide();
    $(".loader").hide();
    $(".formel_container").fadeOut(0);
    $(".img_tabel_bundfald").slideToggle(0);


    scrubber.draggable({
        drag: function(event, ui) {
            dragging = true;
            video.pause();
        },
        stop: function(event, ui) {
            dragging = false;
            video.play();
        },
        axis: "x",
        containment: "parent"

    });

    //EVENT listeners: 


    // Tabel - vis / skjul (fælles for begge typer objekter)
    $(".tabel_toggle").click(function() {
        $(".img_tabel_bundfald").fadeIn(100);
    });

    $(".img_tabel_bundfald").click(function() {
        $(this).fadeOut(100);
    });

    // knap listeners:

    poseQuestion();

});

function loadSuccess() {
    if (videoloaded == false) {
        videoloaded = true;
        $(".loader").hide();
        $("#video").show();
        console.log(video);
        video.currentTime = 0;
        video.play();
        $(".scrub_container").show();
    }
};

function poseQuestion() {

    $(".scrub_container").fadeOut(0);
    $(".bundfald_score").html("Din score er: <b>" + score + "/" + max_score + "</b> Fejl: <b>" + fejl + "</b>");

    $(".btn_pos, .btn_neg").removeClass("btn-primary").addClass("btn-info");

    $(".vid_container").fadeOut(0);
    $(".img_container").fadeIn(300);

    $(".img_container").attr("src", "media/img/BF_BG.jpg");

    //console.log("CSPMARRAY: " + c_spmArray);

    var rand_spm = Math.floor(Math.random() * c_spmArray.length);
    c_spmArray.splice(rand_spm, 1);

    opg_pos = c_spmArray[rand_spm][0];
    opg_neg = c_spmArray[rand_spm][1];

    //Opdatér spørgsmålet i toppen, der! 

    $("h4").fadeOut(50, function() {

        // Lav opgave formuleringen om
        if (underopgave == "c_1") {
            $("h4").html("Dan Ionforbindelsen der indeholder <b>" + positive_ioner[opg_pos] + "</b> og <b>" + negative_ioner[opg_neg] + "</b>. Afstem reaktionen og vælg det rigtige produkt.");
        } else if (underopgave == "c_2") {
            $("h4").html("Dan Ionforbindelsen der indeholder <b>" + p_ioner_navne[opg_pos] + "</b> og <b>" + n_ioner_navne[opg_neg] + "</b>. Afstem reaktionen og vælg det rigtige produkt.");

        } else if (underopgave == "d") {
            $("h4").html("Dan Ionforbindelsen <b>" + reaktions_Array[opg_pos][opg_neg][2] + "</b>. Afstem reaktionen og vælg det rigtige produkt.");
        }
        $("h4").fadeIn(2000)
    });

    $(".btn_pos").click(function() {
        //UserMsgBox(".container-fluid", "Hurra - korrekt svar!");

        pos_selected = parseInt($(this).attr("pos_id"));

        //Hvis det er en øve opgave: 
        if (opgavetype == 1) {
            if (pos_selected != opg_pos) {
                UserMsgBox(".inner_container", "Du har ikke valgt den rigtige positive ion");
                pos_selected = false;
                $(".btn_pos").removeClass("btn-primary").addClass("btn-info");
                fejl++;

                $(".bundfald_score").html("Din score er: <b>" + score + "/" + max_score + "</b> Fejl: <b>" + fejl + "</b>");
            } else {
                change_img($(this));

            }
        } else if (opgavetype == 0) {
            change_img($(this));
        }

    });

    $(".btn_neg").click(function() {
        percent = 0;
        $(".btn_neg").removeClass("btn-primary").addClass("btn-info");

        if (pos_selected === false) {
            UserMsgBox(".inner_container", "Vælg først en positiv ion.")
        } else {
            $(this).addClass("btn-primary").removeClass("btn-info");
            neg_selected = parseInt($(this).attr("neg_id"));
            $(".neg_stof").html(negative_ioner[neg_selected]);

            // Hvis opgavetypen er '0' -> kør opgaven uden interaktion / visning / eksplorativt objekt: 

            if (opgavetype == 0) {
                // Tjek det første led af reaktionen: 
                $(".reaktions_container").html(reaktions_Array[pos_selected][neg_selected][0]);
                $(".resultat_container").html(reaktions_Array[pos_selected][neg_selected][1]);
                $(".formel_container").fadeIn(300);
                // Hvis opgavetypen er '1' -> kør opgaven med interaktion / øvelse c eller d : 
                
            if (reaktions_Array[pos_selected][neg_selected][2] == "no_show") {
                UserMsgBox(".inner_container", "Denne kombination giver en reaktion, men ikke den forventede fældningsreaktion.");
            }else{
                 change_video();
            }
               

            } else if (opgavetype == 1) {
                console.log("NB!!!: " + neg_selected + "," + opg_neg);
                var korrekt = 0;
                var korrekt_Array = [false, false, false];

                if (neg_selected != opg_neg) {
                    UserMsgBox(".inner_container", "Du har ikke valgt den rigtige negative ion");
                    neg_selected = false;
                    $(".btn_neg").removeClass("btn-primary").addClass("btn-info");
                    fejl++;
                    $(".bundfald_score").html("Din score er: <b>" + score + "/" + max_score + "</b> Fejl: <b>" + fejl + "</b>");


                } else {

                    change_video();
                    //UserMsgBox(".inner_container", "Du har valgt de rigtige ioner. <br/>Afstem reaktionen herunder");
                    //$(".MsgBox_bgr").css("background-color", "rgba(0,0,0,0.01)")
                    var correctkoeff_1 = "1";
                    var correctkoeff_2 = "1";
                    var reak_string = reaktions_Array[pos_selected][neg_selected][0];

                    if (reak_string[0] == "2") {
                        correctkoeff_1 = "2";
                        console.log("removed 2");
                        reak_string = reak_string.substring(1);
                    } else if (reak_string[0] == "3") {
                        correctkoeff_1 = "3";
                        console.log("removed 3");
                        reak_string = reak_string.substring(1);
                    }

                    reak_string = "<span class=select_wrapper_1><select class='koeff_1 bund_select'><option value='?'>?</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option></select></span>" + reak_string;

                    // Tjek det ANDET led af reaktionen:

                    console.log(svar_Array);
                    var koeff2 = reak_string.indexOf("(aq)") + 7;
                    console.log("koeff2: " + reak_string[koeff2])

                    if (reak_string[koeff2] == "2") {
                        correctkoeff_2 = "2";
                        reak_string = reak_string.slice(0, koeff2) + reak_string.slice(koeff2 + 1);
                        console.log("removed 2");
                        //reak_string = reak_string.substring(1);
                    } else if (reak_string[koeff2] == "3") {
                        correctkoeff_2 = "3";
                        reak_string = reak_string.slice(0, koeff2) + reak_string.slice(koeff2 + 1);
                        console.log("removed 3");
                        console.log(reak_string);
                    }

                    reak_string = reak_string.slice(0, koeff2) + "<span class=select_wrapper_2><select class='koeff_2 bund_select'><option value='?'>?</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option></select></span>" + reak_string.slice(koeff2);



                    $(".reaktions_container").html(reak_string);

                    /// Generer svar_muligheder i reaktionsscontaineren: 

                    var resultat_interaktion = "<div class='select_wrapper_reaktion'><form id='reak_form' class='bund_select bund_select_radio'>" +
                        "<div class='radio_cont'><input class='radio_btn' type='radio' name='reaktion' value='1'><div class='radio_text'>" + reaktions_Array[opg_pos][opg_neg][1] + "</div></div><br/>" +
                        "<div class='radio_cont'><input type='radio' class='radio_btn' name='reaktion' value='0'><div class='radio_text 0_rdio'>" + svar_Array[opg_pos][opg_neg][0] + "</div></div><br/>" +
                        "<div class='radio_cont'><input type='radio' class='radio_btn' name='reaktion' value='0'><div class='radio_text 0_rdio'>" + svar_Array[opg_pos][opg_neg][1] + "</div></div><br/>" +
                        "<div class='radio_cont'><input type='radio' class='radio_btn' name='reaktion' value='0'><div class='radio_text 0_rdio'>" + svar_Array[opg_pos][opg_neg][2] + "</div></div><br/><div class='btn btn-primary btn_tjeksvar'>Tjek svar</div>";



                    $(".resultat_container").html(resultat_interaktion); //reaktions_Array[pos_selected][neg_selected][1]);

                    $('.radio_cont').shuffle_div_position();

                    //// 

                    $(".formel_container").fadeIn(300);

                    $(".btn_tjeksvar").click(function() {

                        $(".bundfald_score").html("Din score er: <b>" + score + "/" + max_score + "</b> Fejl: <b>" + fejl + "</b>");


                        var svar_1 = $(".koeff_1").val();
                        var svar_2 = $(".koeff_2").val();
                        var svar_3 = $('input[name=reaktion]:checked', '#reak_form').val()

                        if (svar_1 == correctkoeff_1) {
                            korrekt_Array.splice(0, 1, true);
                            $(".select_wrapper_1").html(correctkoeff_1);
                            if (correctkoeff_1 == "1") {
                                $(".select_wrapper_1").fadeOut(2000);
                            }
                        }
                        console.log("korrekt: " + korrekt);
                        if (svar_2 == correctkoeff_2) {
                            korrekt_Array.splice(1, 1, true);
                            $(".select_wrapper_2").html(correctkoeff_2);

                            if (correctkoeff_2 == "1") {
                                $(".select_wrapper_2").fadeOut(2000);

                            }
                        }
                        console.log("korrekt: " + korrekt);
                        if (svar_3 == "1") {
                            korrekt_Array.splice(2, 1, true);
                            $(".0_rdio").css("opacity", ".3");
                            $(".0_rdio").each(function(index) {
                                if ($(this).attr("value") == "0") {
                                    $(this).css("opacity", ".3");
                                    $(".radio_btn").attr('disabled', true);

                                }
                                console.log(index + ": " + $(this).text());
                            });
                        }

                        if (korrekt_Array.indexOf(false) < 0) {
                            score++;
                            UserMsgBox(".inner_container", "Du har afstemt reaktionsskemaet korrekt.");
                            $(".MsgBox_bgr").css("background-color", "rgba(0,0,0,0.1)");

                            $("#UserMsgBox").click(function() {
                                $(".formel_container").fadeOut(0, function() {
                                    //$(".formel_container").html("");
                                    poseQuestion();

                                });
                            });

                        } else {
                            var feedback = "Du har følgende fejl: <br/>";
                            if (korrekt_Array[0] == false) {
                                feedback = feedback + "- Koefficent 1<br/>"
                            }
                            if (korrekt_Array[1] == false) {
                                feedback = feedback + "- Koefficent 2<br/>"
                            }
                            if (korrekt_Array[2] == false) {
                                feedback = feedback + "- Resultatet"
                            }
                            fejl++;

                            $(".bundfald_score").html("Din score er: <b>" + score + "/" + max_score + "</b> Fejl: <b>" + fejl + "</b>");

                            UserMsgBox(".inner_container", feedback);
                        }


                        console.log("korrekt: " + korrekt_Array);
                    });
                }
            }
            /// Formelsjov slut!!!!


        }
        /*var film;
        $(".vid_container").html("<video preload='auto' id='video' class='videoplayer'><source src='media/vid/" + matrix_Array[neg_selected][pos_selected] + ".mp4' autoplay ='true' type='video/mp4'></video>");
        $(".img_container").hide();
        $(".vid_container").show();

        videoloaded = false;
        $(".loader").show();
        video.addEventListener("canplaythrough", loadSuccess);
        $(".formel_container").css("opacity", 0);*/
    });
}

//

function load_videos(num) {
    myLoader.addFiles('myvid:' + video_Array[num]);
    //myLoader.addFiles('mysound*:sound.ogg||sound.mp3');
    myLoader.on('finish', function() {
        // Start playing the sound once it's finished loading
        num++;
        console.log("load complete!");

        console.log(myLoader);

        if (num < video_Array.length) {

            load_videos(num);

        }
    });
}


/// PRELOaDING END


// populater btns:
function populate_btns() {

    for (var i = 0; i < negative_ioner.length; i++) {
        $(".negativ_container").append("<div class='btn btn-info btn_neg' neg_id='" + i + "''>" + negative_ioner[i] + "</div>");
    }

    for (var i = 0; i < positive_ioner.length; i++) {
        $(".positiv_container").append("<div class='btn  btn-info btn_pos' pos_id='" + i + "''>" + positive_ioner[i] + "</div>");

    }

    MarkCertainCharactersAsSpecial([".btn-info"], ["I", "l"], ["CapitalI", "small_l"], "#");

}



// Video control options: 



/*
$(".scrubzone").mousedown(function(e) {
    console.log("clicked zone");
     var percent = video.currentTime / video.duration;
        var scrub_pos = percent * c_width;
        scrubber.css("left", scrub_pos + "px");
    dragging = true;
    divPos = {
        left: e.pageX - offset.left
    };
    video.pause();
});



*/
$(".scrubzone").click(function(e) {
    console.log("clicked zone: " + e.pageX);
    //$(".scrubber").css("left", e.pageX);
    var playpos = video.duration * (divPos.left / c_width) - 0.2;
    //console.log("playpos" + playpos);
    video.currentTime = playpos;
    video.play();
});


$(document).mousemove(function(e) {
    /*if (mousedown == true) {
        video.pause();
      
        var playpos = video.duration * (divPos.left / video.width);
        $("#video").currentTime = playpos;
        scrubber.css("margin-left", playpos + "px")
    }*/

    divPos = {
        left: e.pageX - offset.left
    };
});


// Scrubber event listener: 

setInterval(function() {
    percent = video.currentTime / video.duration;
    if (dragging == false) {
        var scrub_pos = percent * c_width;

        if (scrub_pos < c_width - 40) {
            scrubber.css("left", scrub_pos + "px");

        }
    } else {
        var playpos = video.duration * (divPos.left / c_width);
        //console.log("playpos" + playpos);
        video.currentTime = playpos;
        //scrubber.css("margin-left", playpos + "px")
    }
    //console.log("p: " + percent);
    $(".formel_container").css("opacity", 1) //percent * 2);
}, 10);
