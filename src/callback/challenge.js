let XMLHttpRequest =required('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api,callback){
    let xhttp= new XMLHttpRequest();
    xhttp.open('GET',url_api,true); //activar el asincronismo
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState===4){
            if(xhttp.status=== 200){
                callback(null,JSON.parse(xhttp.responseText));
            }else{
                const error= new Error('Error' +url_api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}