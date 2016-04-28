/**
 * Created by Ryan on 4/17/2016.
 */
function get(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}



