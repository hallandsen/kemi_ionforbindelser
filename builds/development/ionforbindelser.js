//########################################################################
//                          Funktioner
//########################################################################

// JQuery-ui resources:
// https://jqueryui.com/resources/demos/droppable/revert.html


var JsonObj;

var Names;
var NameArray = [];

function AjaxCallback(JSONdata){
    console.log("JsonObj - AjaxCallback: " + JSON.stringify(JSONdata));
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

            for(var key in data){
                //console.log("JsonObj[key].name: " + JsonObj[key].name);
                NameArray.push( JsonObj[key].name );
            }

            console.log("NameArray 1: " + NameArray);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });

}
function FontSizeScaler(FontSizeStr, LineHeight, Selector){
    var FontSizeNum = parseInt(FontSizeStr.replace(/px/g, ''));
    var NativeWindowWidth = 1425;   // At WindowWidth = 1426px the .ElementBox font-size = 11px, and scaling linarly.
    var WindowWidth = $( window ).width();
    var Ratio = Math.round(1000*( WindowWidth/NativeWindowWidth ))/1000; // Rounded to 3 digit precision.

    $( Selector ).css("font-size", String(FontSizeNum*Ratio)+"px");

    // Ajust line-height
    // $( Selector ).css("line-height", String(parseInt(LineHeight)*Math.pow(1,Ratio));
    console.log("Ratio : " + Ratio);
    
    console.log("Ratio : " + Ratio);
    console.log("ElementBoxFontSizeNum : " + FontSizeNum);
}

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
        console.log('HTML: '+HTML);
        $('.ionsWrapper').append(HTML);

    }
}

//########################################################################
//                        Run code....
//########################################################################

var outSide;

$( document ).ready(function() {

    //console.log("NameArray 2: " + NameArray);

    CreateIons(JsonObj);

    $('.draggable').mousedown(function(){
        original = true;
    })

    $(".draggable").draggable({ 
        revert: 'invalid',  // Makes the draggable revert back if does not have class plus or minus and is dropped in the corresponding div 
        helper: 'clone',
        stop: function (e, ui) {
            $('.draggable').draggable().data()["ui-draggable"].cancelHelperRemoval = true;
        }
    });
    $(".DropMinus").droppable({
        accept: ".minus",
        drop: function(ev, ui) {
            if(original) {
                $(ui.draggable.clone()).detach().css({top: -20,left: 0, margin:0}).appendTo(this).addClass('clone');
                original = false;
                $('.clone').draggable({
                    revert: true,
                })
            }
            console.log('outside: '+outSide);
        },
        out: function (event, ui) {
            if (!original){
                $(ui.draggable).fadeTo('fast', 0.5);
                outSide = true;
                $('.clone').draggable({
                    revert: false,
                    stop: function (e, ui) {
                        $(this).remove();
                    }
                })
            }
        },
        over: function (event, ui) {
            if (!original){
                $(ui.draggable).fadeTo('fast', 1.0);
                outSide = false;
            }
        }
    });
    $(".DropPlus").droppable({
        accept: ".plus",
        drop: function(ev, ui) {
            if(original) {
                $(ui.draggable.clone()).detach().css({top: 0,left: 0, margin:0}).appendTo(this).addClass('clone');
                original = false;
                $('.clone').draggable({
                    revert: true,
                })
            }
            console.log('outside: '+outSide);
        },
        out: function (event, ui) {
            if (!original){
                $(ui.draggable).fadeTo('fast', 0.5);
                outSide = true;
                $('.clone').draggable({
                    revert: false,
                    stop: function (e, ui) {
                        $(this).remove();
                    }
                })
            }
        },
        over: function (event, ui) {
            if (!original){
                $(ui.draggable).fadeTo('fast', 1.0);
                outSide = false;
            }
        }
    });
});

