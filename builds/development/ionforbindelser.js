//########################################################################
//                          Funktioner
//########################################################################

var CorrectAnswers = [
{"name": "Natriumklorid",   "plus":"Na",    "plusName":"Natrium",   "plusCharge":"+",  "plusCount":"1",     "minus":"Cl",       "minusName":"Klor",    "minusCharge":"-",   "minusCount":"1",   "html":"NaCl",               "sound":"audio/NaCl.mp3"},
{"name": "Jernklorid",      "plus":"Fe",    "plusName":"Jern",      "plusCharge":"2+", "plusCount":"1",     "minus":"Cl",       "minusName":"Klor",    "minusCharge":"-",   "minusCount":"2",   "html":"Fe<sub>1</sub>Cl<sub>3</sub>", "sound":"audio/FeCl.mp3"}, 
{"name": "Natriumoxid",     "plus":"Na",    "plusName":"Natrium",   "plusCharge":"+",  "plusCount":"2",     "minus":"O",        "minusName":"Ilt",     "minusCharge":"2-",  "minusCount":"1",   "html":"Na<sub>2</sub>O",    "sound":"audio/NaO.mp3"},
{"name": "Kobberjod",       "plus":"Cu",    "plusName":"Kobber",    "plusCharge":"2+", "plusCount":"1",     "minus":"I",        "minusName":"Jod",     "minusCharge":"-",   "minusCount":"2",   "html":"CuI<sub>2</sub>",    "sound":"audio/CuI.mp3"},
{"name": "Sølvsulfid",      "plus":"Ag",    "plusName":"Sølv",      "plusCharge":"+",  "plusCount":"2",     "minus":"S",        "minusName":"Svovl",   "minusCharge":"2-",  "minusCount":"1",   "html":"Ag<sub>2</sub>S",    "sound":"audio/AgS.mp3"},
{"name": "JernBromid",      "plus":"Fe",    "plusName":"Jern",      "plusCharge":"3+", "plusCount":"1",     "minus":"Br",       "minusName":"Brom",    "minusCharge":"-",   "minusCount":"3",   "html":"FeBr<sub>3</sub>",   "sound":"audio/FeBr.mp3"},
{"name": "",                "plus":"Ag",    "plusName":"Sølv",      "plusCharge":"+",  "plusCount":"2",     "minus":"S",        "minusName":"Natrium", "minusCharge":"2-",  "minusCount":"1",   "html":"Ag<sub>2</sub>S"}
];

var JsonObj;
var thisAnswer = Math.floor(Math.random() * 5);
var answersArray;
var minusCount = 0;
var plusCount= 0;
var finalMinusCount = CorrectAnswers[thisAnswer].minusCount;
var finalPlusCount = CorrectAnswers[thisAnswer].plusCount;
var step = $('#active').html().slice(5,7);
console.log(step);

function AjaxCallback(JSONdata){
    //console.log("JsonObj - AjaxCallback: " + JSON.stringify(JSONdata));
}
function loadData(url) {
    $.ajax({
        url: url,
        // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
        dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
        // dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
        async: false, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
        success: function(data, textStatus, jqXHR) {
            JsonObj = JSON.parse(JSON.stringify(data));
            AjaxCallback(JsonObj);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });
}

//opgavetekst genereres
function opgaveTekst1 (CorrectAnswers) {
    var HTML='';
    HTML += 'Byg ionforbindelsen der består af '+CorrectAnswers[thisAnswer].plus+'<sup>'+CorrectAnswers[thisAnswer].plusCharge+
    '</sup> og '+CorrectAnswers[thisAnswer].minus+'<sup>'+CorrectAnswers[thisAnswer].minusCharge+'</sup>';
    $('#opgaveFormulering1').append(HTML); 
}
function opgaveTekst2 (CorrectAnswers) {
    var HTML='';
    HTML += 'Byg ionforbindelsen der består af '+CorrectAnswers[thisAnswer].plusName+' og '
    +CorrectAnswers[thisAnswer].minusName+' og afstem formlen.';
    $('#opgaveFormulering2').append(HTML); 
}
function opgaveTekst3 (CorrectAnswers) {
    var HTML='';
    HTML += 'Byg ionforbindelsen '+CorrectAnswers[thisAnswer].name;
    $('#opgaveFormulering3').append(HTML); 
}
// ion elementer genereres
function CreateIons(JsonObj) {
    for ( var i =0; i <=11; i++) {
        var HTML = '';
        var ion = '';
        var charge = '';
        var imgSrc = '';
        var chargeClass ='';
        ion = JsonObj[i].ion;
        charge = JsonObj[i].charge;       
        imgSrc = JsonObj[i].imgSrc;       
        chargeValue = charge.slice(-1); 
        if (chargeValue == '+' ) {
            chargeClass = 'plus';
        }
        else if (chargeValue == '-' ) {
            chargeClass = 'minus';
        }
        HTML += '<div class="ion draggable '+ chargeClass + '">';
        HTML += '<h3>'+ ion + '<sup>'+ charge + '</sup></h3>';
        HTML +='<img src="'+ imgSrc +'"></div>';
        $('.ionsWrapper').append(HTML);
    }
}
//check om den negative ion brugeren dragger er den rigtige negative ion
function CheckMinus(CorrectAnswers, CurrentIon, element){
    var correctMinus = CorrectAnswers[thisAnswer].minus;
    console.log(correctMinus);
    if (correctMinus == CurrentIon) {
        if(minusCount<finalMinusCount) {
            $(element).addClass('correctMinus');
            console.log('correctMinus added');
            console.log('minusCount: '+minusCount);
        }
    }
}
//check om den negative ion brugeren dragger er den rigtige positive ion
function CheckPlus(CorrectAnswers, CurrentIon, element){
    var correctPlus = CorrectAnswers[thisAnswer].plus;
    console.log(correctPlus);
    if (correctPlus == CurrentIon) {
        if(plusCount<finalPlusCount) {
            $(element).addClass('correctPlus');
            console.log('correctPlus added');
            console.log('plusCount: '+plusCount);
        }
    }
}
//læg overlay på dropzonen hvis de er nok af de rigtige ion elementer i dropzonen.
function CheckAnswer (minusCount, plusCount){
    if (minusCount == finalMinusCount && plusCount == finalPlusCount) {
        feedbackOverlay(thisAnswer);
    }
}
//generer overlay
function feedbackOverlay(thisAnswer){

    var HTML = "<div id='overlay'>";
    if(step == '1') {           //hvis step 1 så:
        HTML +="<h2>"+CorrectAnswers[thisAnswer].html;+"</h2>";    
    }
    else if (step == '2'){      //hvis step 2 så:
        HTML +="<h2>"+CorrectAnswers[thisAnswer].name;+"</h2>";
    }
    else if (step == '3') {     //hvis step 3 så:
        HTML += '<h2>HVAD SKAL DER STÅ HER?</h2>'
    }
    HTML += '<div class ="btn btn-default"><span class="glyphicon glyphicon-volume-up playAnswer"></span></div>';
    HTML += '<audio src="audio/NaCl.mp3" id="audioAnswer"></audio>'; //erstat med nedenstående når lyd er blevet indspillet
    HTML += '<audio src="'+ CorrectAnswers[thisAnswer].sound + '" id="audioAnswer"></audio>';
    HTML += "</div>";
    $('.DropZone').prepend(HTML);
    $("#overlay").fadeIn( "slow" );
    
    //læs op funktionaliteter
    var audioElement = $("#audioAnswer")[0];
    $('.glyphicon-volume-up').click(function(){
        $('.playAnswer').addClass('activeSound');
        console.log('playing audio');
        audioElement.play();
        $('#audioAnswer').bind("ended", function(){
            $('.playAnswer').removeClass('activeSound');       
        });
    });
}
//########################################################################
//                        Run code....
//########################################################################


$(document).ready(function() {
    CreateIons(JsonObj);
    $('.draggable').mousedown(function(){
        original = true;
    })
    $('.draggable').draggable({ 
        revert: 'invalid',  // Makes the draggable revert back if does not have class correctPlus or correctMinus and is dropped in the corresponding div 
        helper: 'clone',
        start: function() {
            var element = $(this);
            var IonHtml = $(this).html();
            var CurrentIon = IonHtml.slice(4,6);
            CurrentIon = CurrentIon.replace('<','');
            CheckMinus(CorrectAnswers, CurrentIon, element);
            CheckPlus(CorrectAnswers, CurrentIon, element);
        },
        stop: function () {
            $('.draggable').draggable().data()['ui-draggable'].cancelHelperRemoval = true; //behold clone
            $(this).removeClass('correctMinus');
            $(this).removeClass('correctPlus');
        }
    });
    $('.DropMinus').droppable({
        accept: '.correctMinus',
        tolerance: 'intersect',
        drop: function(event, ui) {
            if(original) {
                $(ui.draggable.clone()).detach().css({top: -20,left: 0, margin:0}).appendTo(this).addClass('clone'); //append clone til DropMinus
                original = false;
                minusCount++;
                $('.clone').draggable({
                    revert: true,
                })
            }
            CheckAnswer (minusCount, plusCount);
        },
        out: function (event, ui) {
            if (!original){
                $('.correctMinus').fadeTo('fast', 0.5);
                $('.correctMinus').draggable({
                    revert: false,
                    stop: function () {
                        $('.correctMinus').remove();
                        minusCount--;
                    }
                })
            }
        },
        over: function (event, ui) {
            if (!original){
                $(ui.draggable).fadeTo('fast', 1.0);
                $('.clone').draggable ({
                    revert: true,
                    start: function () {
                        $(this).css({'z-index':'10'});
                        console.log('over');
                    },
                    stop: function () {
                        $(this).css({'z-index':'auto'});
                    }
                });
            }
        }
    });
    $('.DropPlus').droppable({
        accept: '.correctPlus',
        tolerance: 'intersect',
        drop: function(event, ui) {
            if(original) {
                $(ui.draggable.clone()).detach().css({top: 0,left: 0, margin:0}).appendTo(this).addClass('clone'); //append clone til DropPlus
                original = false;
                plusCount++;
                $('.clone').draggable({
                    revert: true,
                })
            }
            CheckAnswer (minusCount, plusCount);
        },
        out: function (event, ui) {
            if (!original){
                $('.correctPlus').fadeTo('fast', 0.5);
                $('.correctPlus').draggable({
                    revert: false,
                    stop: function () {
                        $(this).remove();
                        plusCount--;
                    }
                })
            }
        },
        over: function (event, ui) {
            if (!original){
                $(ui.draggable).fadeTo('fast', 1.0);
                $('.clone').draggable ({
                    revert: true,
                    start: function () {
                        $(this).css({'z-index':'10'});
                    },
                    stop: function () {
                        $(this).css({'z-index':'auto'});
                    }
                });
            }
        }
    });
});