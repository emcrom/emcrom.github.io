/**
 * Created by xlagunas on 22/12/13.
 */
/**
 * Aquesta funció canvia la galeria de fotos que s'estigui mostrant,
 * elimina les imatges anteriors i afegeix totes les nomes
 *
 * jsonName: nom del fitxer sense extensio
 * */

 function loadGalleryFromJSON(jsonName){
    $.getJSON("./settings/"+jsonName+".json", function( data ) {
        $("#button-appender").empty();
        $("#img-appender").empty();
        console.log(data);
        for(var i=0;i<data.length;i++){
            var element = data[i];
            if (i ==0){
                $("#button-appender").append(
                    '<li data-target="#carousel-index" data-slide-to="'+i+'" class="active"></li>'
                );

                $("#img-appender").append(
                    '<div class="item active">'+
                        '<img src="img/'+jsonName+'/'+element.name+'">'+
                        '<div class="carousel-caption carousel-caption-style text-center">'+
                        '<p>'+element.caption+'</p>'+
                        '</div>'+
                        '</div>');
            }
            else{
                $("#button-appender").append(
                    '<li data-target="#carousel-index" data-slide-to="'+i+'" class=""></li>'
                );

                $("#img-appender").append(
                    '<div class="item">'+
                        '<img src="img/'+jsonName+'/'+element.name+'">'+
                        '<div class="carousel-caption carousel-caption-style text-center">'+
                        '<p>'+element.caption+'</p>'+
                        '</div>'+
                        '</div>');
            }

        }
    });
}