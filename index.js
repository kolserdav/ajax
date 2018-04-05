export default function ajaxS(url, request = null, responseBack = null, method = 'POST')
{
    let xhr = new XMLHttpRequest();
    if (responseBack === null || responseBack === ''){
        responseBack = function (response){
            console.log(response);
        };
    }

    if (request === null || request === ''){
        request = "test=ajaxS works";
    }

    if (method === 'GET' || method === 'get'){
        let params = request;
        request = null;
        url = url+'?'+params;
    }

    function reqHeader(xhr)
    {
        if (method === 'GET' || method === 'get')
        {
            return null;
        }
        else {
            return xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
    }

    sendRequest(url, request, responseBack, method);

    function sendRequest(url, request)
    {
        xhr.onreadystatechange = setGo;
        xhr.open(method, url, true);
        reqHeader(xhr);
        xhr.send(request);
    }
    function setGo()
    {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.responseText;
            responseBack(response);
        }
        else {
            return false;
        }
    }

}


