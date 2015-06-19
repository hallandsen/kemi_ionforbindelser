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
"minusName":"brom",     "minusCharge":"-",  "minusCount":"2",       "html":"MgBr<sub>2</sub>"},

{"name": "zinkbromid",      "plus":"Zn",    "plusName":"zink",      "plusCharge":"2+",  "plusCount":"1",    "minus":"Br",
"minusName":"brom",     "minusCharge":"-",  "minusCount":"2",       "html":"ZnBr<sub>2</sub>"}
];

var JsonObj;
var thisAnswer = Math.floor(Math.random() * 8);
var answersArray;
var minusCount = 0;
var plusCount= 0;
var finalMinusCount = CorrectAnswers[thisAnswer].minusCount;
var finalPlusCount = CorrectAnswers[thisAnswer].plusCount;
var step = $('.opgaveFormulering').html().slice(5,6);

var neededPlus = CorrectAnswers[thisAnswer].plus;
var neededPlusNumber = CorrectAnswers[thisAnswer].plusCharge;
neededPlusNumber = neededPlusNumber.replace('+','');
neededPlus = neededPlus+neededPlusNumber;
console.log('neededPlus: '+neededPlus);

var neededMinus = CorrectAnswers[thisAnswer].minus;
var neededMinusNumber = CorrectAnswers[thisAnswer].minusCharge;
neededMinusNumber = neededMinusNumber.replace('-','');
neededMinus = neededMinus+neededMinusNumber;
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
    $('.feedback span').empty();
    var HTML='';
    HTML += '<span class="QuestionTask">'+correct+'</span> <span>/</span> <span class="QuestionTask">'+maxRounds+'</span>';
    $('.feedback').prepend(HTML);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// ion elementer genereres
function CreateIons(JsonObj) {
    var plusPresent = false;
    var minusPresent = false;
    var numberOfIons = 1;
    console.log(JsonObj);

    for ( var i =0; i <=numberOfIons+2; i++) {
        //hvis ikke den positive ion man skal bruge for at klare opgaven er i objektet, så fjern et objekt og tilføj den rigtige ion
        var actualPlus = JsonObj.ions.plus[i].ion;
        var actualPlusCharge = JsonObj.ions.plus[i].charge;
        actualPlusCharge = actualPlusCharge.replace('+','');
        actualPlus = actualPlus + actualPlusCharge;
        //console.log('actualPlus: '+actualPlus);
        // console.log('neededPlus: '+neededPlus);
        // console.log('actualPlus: '+actualPlus);

        if (neededPlus == actualPlus) {
            console.log('the correct positive ion is present');
            plusPresent = true;

        }
        
    }
    if (plusPresent == false) {
            
            //hvilket random element skal erstattes:
            var replacedObj = Math.floor(Math.random() * numberOfIons);
            //console.log('replacedObj: '+replacedObj);
            
            //hent og erstat ion navnet
            var plus = CorrectAnswers[thisAnswer].plus;
            JsonObj.ions.plus[replacedObj].ion = plus;
            console.log(JsonObj.ions.plus[replacedObj].ion);
            
            //hent og erstat ionens ladning
            var charge = CorrectAnswers[thisAnswer].plusCharge;
            JsonObj.ions.plus[replacedObj].charge = charge;
            console.log(JsonObj.ions.plus[replacedObj].charge);
            
            //hent og erstat img src
            charge = charge.replace('+','');
            var img = 'img/plus_' + plus + charge + '.png';
            console.log(img);  
            JsonObj.ions.plus[replacedObj].imgSrc = img;
        }
    //generer de positive ioner
    for ( var i =0; i <=numberOfIons+2; i++) { 
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
    for ( var i =0; i <=numberOfIons+2; i++) {
        //hvis ikke den negative ion man skal bruge for at klare opgaven er i objektet, så fjern et objekt og tilføj den rigtige ion
        var actualMinus = JsonObj.ions.minus[i].ion;
        var actualMinusCharge = JsonObj.ions.minus[i].charge;
        actualMinusCharge = actualMinusCharge.replace('-','');
        actualMinus = actualMinus + actualMinusCharge;
        console.log('neededMinus: '+neededMinus);
        console.log('actualMinus: '+actualMinus);

        if (neededMinus == actualMinus) {
            console.log('the correct negative ion is present');
            minusPresent= true;
        }
    }
    if (minusPresent == false) {
            
            //hvilket random element skal erstattes:
            var replacedObj = Math.floor(Math.random() * numberOfIons);
            //console.log('replacedObj: '+replacedObj);
            
            //hent og erstat ion navnet
            var minus = CorrectAnswers[thisAnswer].minus;
            JsonObj.ions.minus[replacedObj].ion = minus;
            console.log(JsonObj.ions.minus[replacedObj].ion);
            
            //hent og erstat ionens ladning
            var charge = CorrectAnswers[thisAnswer].minusCharge;
            JsonObj.ions.minus[replacedObj].charge = charge;
            console.log(JsonObj.ions.minus[replacedObj].charge);
            
            //hent og erstat img src
            charge = charge.replace('-','');
            var img = 'img/minus_' + minus + charge + '.png';
            console.log(img);  
            JsonObj.ions.minus[replacedObj].imgSrc = img;
    }

    //genererer de negative ioner
    for ( var i =0; i <=numberOfIons+2; i++) {
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
    // shuffleArray(JsonObj.ions.plus);
    // shuffleArray(JsonObj.ions.minus);
}
function makeDraggable (){
    console.log('draggable is back');
    $('.draggable').draggable({ 
        revert: 'invalid',  // Makes the draggable revert back if does not have class correctPlus or correctMinus and is dropped in the corresponding div 
        helper: 'clone',
        start: function() {
            var element = $(this);
            var IonHtml = $(this).html();
            console.log('IonHtml: '+IonHtml);
            //gør html elementet sammenlignignsvenligt.
            var CurrentIon = IonHtml.slice(4,13);
            CurrentIon = CurrentIon.replace(/</g,'');
            CurrentIon = CurrentIon.replace('sup','');
            CurrentIon = CurrentIon.replace('>','');
            CurrentIon = CurrentIon.replace('+','');
            CurrentIon = CurrentIon.replace('-','');
            CurrentIon = CurrentIon.replace('/','');

            CheckMinus(CurrentIon, this);
            CheckPlus(CurrentIon, this);
        },
        stop: function (event, ui) {
            $('.draggable').draggable().data()['ui-draggable'].cancelHelperRemoval = true; //behold clone
            $(this).removeClass('correctMinus');
            $(this).removeClass('correctPlus');
        }

    });
}

function makeDroppable(){
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
                        console.log('droppable is back');
                    }
                });
            }
        }
    });
}

//check om den negative ion brugeren dragger er den rigtige negative ion
function CheckMinus(CurrentIon, element){
    console.log('neededMinus: '+neededMinus);
    if (neededMinus == CurrentIon) {
        if(minusCount<finalMinusCount) {
            $(element).addClass('correctMinus');
            console.log('correctMinus added');
            console.log('minusCount: '+minusCount);
        }
    }
}
//check om den positive ion brugeren dragger er den rigtige positive ion
function CheckPlus(CurrentIon, element){
    console.log('neededPlus: '+neededPlus);
    if (neededPlus == CurrentIon) {
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
    HTML += "</div>";
    $('.DropZone').prepend(HTML);
    $("#overlay").fadeIn( "slow" );
    $('.btn-next').css('visibility', 'visible');
    
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
}
function resetAssignment() {
    // shuffleArray(JsonObj.ions.plus);
    // shuffleArray(JsonObj.ions.minus);
    delete CorrectAnswers[thisAnswer];
    console.log('længde: '+CorrectAnswers.length);
    $('.ionsWrapper').empty();
    $('#overlay').remove();
    $('.DropPlus').empty();
    $('.DropMinus').empty();
    $('.btn-next').css('visibility', 'hidden');
    plusCount =0;
    minusCount =0;
    CreateIons(JsonObj);
    makeDraggable();
    makeDroppable();
}
//########################################################################
//                        Run code....
//########################################################################


$(document).ready(function() {
    shuffleArray(JsonObj.ions.plus);
    shuffleArray(JsonObj.ions.minus);
    feedbackTekst(roundCounter, correct);
    CreateIons(JsonObj);
    makeDraggable();
    makeDroppable();
    $('.draggable').mousedown(function(){
        original = true;
    })

    $('.btn-next').click(function(){
        resetAssignment();
        console.log('reset assignment');
    });

    // $('.draggable').draggable({ 
    //     revert: 'invalid',  // Makes the draggable revert back if does not have class correctPlus or correctMinus and is dropped in the corresponding div 
    //     helper: 'clone',
    //     start: function() {
    //         var element = $(this);
    //         var IonHtml = $(this).html();
    //         console.log('IonHtml: '+IonHtml);
    //         //gør html elementet sammenlignignsvenligt.
    //         var CurrentIon = IonHtml.slice(4,13);
    //         CurrentIon = CurrentIon.replace(/</g,'');
    //         CurrentIon = CurrentIon.replace('sup','');
    //         CurrentIon = CurrentIon.replace('>','');
    //         CurrentIon = CurrentIon.replace('+','');
    //         CurrentIon = CurrentIon.replace('-','');
    //         CurrentIon = CurrentIon.replace('/','');

    //         CheckMinus(CorrectAnswers, CurrentIon, element);
    //         CheckPlus(CorrectAnswers, CurrentIon, element);
    //     },
    //     stop: function () {
    //         $('.draggable').draggable().data()['ui-draggable'].cancelHelperRemoval = true; //behold clone
    //         $(this).removeClass('correctMinus');
    //         $(this).removeClass('correctPlus');
    //     }
    // });
    // function makeDroppable(){
    //     $('.DropMinus').droppable({
    //         accept: '.correctMinus',
    //         tolerance: 'intersect',
    //         drop: function(event, ui) {
    //             if(original) {
    //                 $(ui.draggable.clone()).detach().css({top: -20,left: 0, margin:0}).appendTo(this).addClass('clone'); //append clone til DropMinus
    //                 original = false;
    //                 minusCount++;
    //                 $('.clone').draggable({
    //                     revert: true,
    //                 })
    //             }
    //             CheckAnswer (minusCount, plusCount);
    //         },
    //         out: function (event, ui) {
    //             if (!original){
    //                 $('.correctMinus').fadeTo('fast', 0.5);
    //                 $('.correctMinus').draggable({
    //                     revert: false,
    //                     stop: function () {
    //                         $('.correctMinus').remove();
    //                         minusCount--;
    //                     }
    //                 })
    //             }
    //         },
    //         over: function (event, ui) {
    //             if (!original){
    //                 $(ui.draggable).fadeTo('fast', 1.0);
    //                 $('.clone').draggable ({
    //                     revert: true,
    //                     start: function () {
    //                         $(this).css({'z-index':'10'});
    //                         console.log('over');
    //                     },
    //                     stop: function () {
    //                         $(this).css({'z-index':'auto'});
    //                     }
    //                 });
    //             }
    //         }
    //     });
    //     $('.DropPlus').droppable({
    //         accept: '.correctPlus',
    //         tolerance: 'intersect',
    //         drop: function(event, ui) {
    //             if(original) {
    //                 $(ui.draggable.clone()).detach().css({top: 0,left: 0, margin:0}).appendTo(this).addClass('clone'); //append clone til DropPlus
    //                 original = false;
    //                 plusCount++;
    //                 $('.clone').draggable({
    //                     revert: true,
    //                 })
    //             }
    //             CheckAnswer (minusCount, plusCount);
    //         },
    //         out: function (event, ui) {
    //             if (!original){
    //                 $('.correctPlus').fadeTo('fast', 0.5);
    //                 $('.correctPlus').draggable({
    //                     revert: false,
    //                     stop: function () {
    //                         $(this).remove();
    //                         plusCount--;
    //                     }
    //                 })
    //             }
    //         },
    //         over: function (event, ui) {
    //             if (!original){
    //                 $(ui.draggable).fadeTo('fast', 1.0);
    //                 $('.clone').draggable ({
    //                     revert: true,
    //                     start: function () {
    //                         $(this).css({'z-index':'10'});
    //                     },
    //                     stop: function () {
    //                         $(this).css({'z-index':'auto'});
    //                     }
    //                 });
    //             }
    //         }
    //     });
    // }
    
});