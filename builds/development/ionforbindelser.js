//########################################################################
//                          Data og indledende variable
//########################################################################
var CorrectAnswers = [
{"name": "natriumklorid",   "plus":"Na",    "plusName":"natrium",   "plusCharge":"+",  "plusCount":"1",     "minus":"Cl",
"minusName":"klor",    "minusCharge":"-",   "minusCount":"1",       "html":"NaCl"},

{"name": "jernklorid",      "plus":"Fe",    "plusName":"jern",      "plusCharge":"2+", "plusCount":"1",     "minus":"Cl",
"minusName":"klor",    "minusCharge":"-",   "minusCount":"2",       "html":"FeCl<sub>2</sub>"},

{"name": "natriumoxid",     "plus":"Na",    "plusName":"natrium",   "plusCharge":"+",  "plusCount":"2",     "minus":"O",
"minusName":"ilt",     "minusCharge":"2-",  "minusCount":"1",       "html":"Na<sub>2</sub>O"},

{"name": "kobberjod",       "plus":"Cu",    "plusName":"kobber",    "plusCharge":"2+", "plusCount":"1",     "minus":"I",
"minusName":"jod",     "minusCharge":"-",   "minusCount":"2",       "html":"CuI<sub>2</sub>"},

{"name": "sølvsulfid",      "plus":"Ag",    "plusName":"sølv",      "plusCharge":"+",  "plusCount":"2",     "minus":"S",
"minusName":"svovl",   "minusCharge":"2-",  "minusCount":"1",       "html":"Ag<sub>2</sub>S"},

{"name": "jernbromid",      "plus":"Fe",    "plusName":"jern",      "plusCharge":"3+", "plusCount":"1",     "minus":"Br",
"minusName":"brom",    "minusCharge":"-",   "minusCount":"3",       "html":"FeBr<sub>3</sub>"},

{"name": "magnesiumbromid", "plus":"Mg",    "plusName":"magnesium", "plusCharge":"2+",  "plusCount":"1",    "minus":"Br",
"minusName":"brom",     "minusCharge":"-",  "minusCount":"2",       "html":"MgBr<sub>2</sub>"}
];

var JsonObj;
var thisAnswer = Math.floor(Math.random() * 6);
var answersArray;
var minusCount = 0;
var plusCount= 0;
var finalMinusCount = CorrectAnswers[thisAnswer].minusCount;
var finalPlusCount = CorrectAnswers[thisAnswer].plusCount;
var step = $('.opgaveFormulering').html().slice(5,6);
var neededPlus = CorrectAnswers[thisAnswer].plus;
console.log('neededPlus: '+neededPlus);
var neededMinus = CorrectAnswers[thisAnswer].minus;
console.log('neededMinus: '+neededMinus);

//flow variabler
var roundCounter = 0;
var maxRounds = 10;
var correct = 0;
//########################################################################
//                          Funktioner
//########################################################################


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
    HTML += ' Byg ionforbindelsen der består af <span class="QuestionTask">'+CorrectAnswers[thisAnswer].plus+'<sup>'+CorrectAnswers[thisAnswer].plusCharge+
    '</sup></span> og <span class="QuestionTask">'+CorrectAnswers[thisAnswer].minus+'<sup>'+CorrectAnswers[thisAnswer].minusCharge+'</sup></span>';
    $('#opgaveFormulering1').append(HTML); 
}
function opgaveTekst2 (CorrectAnswers) {
    var HTML='';
    HTML += ' Byg ionforbindelsen der består af <span class="QuestionTask">'+CorrectAnswers[thisAnswer].plusName+'</span> og <span class="QuestionTask">'
    +CorrectAnswers[thisAnswer].minusName+'</span> og afstem formlen.';
    $('#opgaveFormulering2').append(HTML); 
}
function opgaveTekst3 (CorrectAnswers) {
    var HTML='';
    HTML += ' Byg ionforbindelsen <span class="QuestionTask">'+CorrectAnswers[thisAnswer].name +'</span>';
    $('#opgaveFormulering3').append(HTML); 
}
//feedback felt med antal rigtige genereres og opdateres
function feedbackTekst (roundCounter, correct) {
    $('.feedback').empty();
    var HTML='';
    HTML += '<span class="QuestionTask">'+correct+'</span> ud af <span class="QuestionTask">'+maxRounds+'</span> rigtige';
    $('.feedback').append(HTML);
}

// ion elementer genereres
function CreateIons(JsonObj) {
    //genererer de positive ioner
    for ( var i =0; i <=6; i++) {
        var plusIon = JsonObj.ions.plus[i].ion;
        var charge = JsonObj.ions.plus[i].charge;
        var imgSrc = imgSrc = JsonObj.ions.plus[i].imgSrc;
        var chargeValue = charge.slice(-1);
        var chargeClass ='';
        var HTML = '';
        chargeClass = 'plus';
        HTML += '<div class="ion draggable '+ chargeClass + '">';
        HTML += '<h3>'+ plusIon + '<sup>'+ charge + '</sup></h3>';
        HTML +='<img src="'+ imgSrc +'"></div>';
        $('.ionsWrapper').append(HTML);
    }
    //genererer de negative ioner
    for ( var i =0; i <=4; i++) {
        var minusIon = JsonObj.ions.minus[i].ion;
        var charge = JsonObj.ions.minus[i].charge;
        var imgSrc = imgSrc = JsonObj.ions.minus[i].imgSrc;
        var chargeValue = charge.slice(-1);
        var chargeClass ='';
        var HTML = '';
        chargeClass = 'minus';        
        HTML += '<div class="ion draggable '+ chargeClass + '">';
        HTML += '<h3>'+ minusIon + '<sup>'+ charge + '</sup></h3>';
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
        correct++;
        feedbackTekst (roundCounter, correct);
        feedbackOverlay(thisAnswer);
    }
}
//generer overlay
function feedbackOverlay(thisAnswer){

    var HTML = "<div id='overlay'>";
    if(step == '1') {           //hvis step 1 så:
        HTML +="<h2>"+CorrectAnswers[thisAnswer].html+"</h2>";    
    }
    else if (step == '2'){      //hvis step 2 så:
        HTML +="<h2>"+CorrectAnswers[thisAnswer].name+"</h2>";
    }
    else if (step == '3') {     //hvis step 3 så:
        HTML += '<h2>'+CorrectAnswers[thisAnswer].html+'</h2>'
    }
    HTML += '<div class ="btn btn-default sound-btn"><span class="glyphicon glyphicon-volume-up playAnswer"></span></div>';
    HTML += '<audio src="audio/NaCl.mp3" id="audioAnswer"></audio>'; //erstat med nedenstående når lyd er blevet indspillet
    //HTML += '<audio src="audio/'+ CorrectAnswers[thisAnswer].plus+CorrectAnswers[thisAnswer].minus+'.mp3" id="audioAnswer"></audio>';
    HTML += '<div class="btn btn-default btn-next">Næste opgave</div>'
    HTML += "</div>";
    $('.DropZone').prepend(HTML);
    $("#overlay").fadeIn( "slow" );
    
    //læs op funktionaliteter
    var audioElement = $("#audioAnswer")[0];
    $('.glyphicon-volume-up').click(function(){
        $('.sound-btn').addClass('activeSound');
        console.log('playing audio');
        audioElement.play();
        $('#audioAnswer').bind("ended", function(){
            $('.sound-btn').removeClass('activeSound');       
        });
    });
    //næste opg btn:

    $('#overlay')
}
//########################################################################
//                        Run code....
//########################################################################


$(document).ready(function() {
    feedbackTekst(roundCounter, correct);
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