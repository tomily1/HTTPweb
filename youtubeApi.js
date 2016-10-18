function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

function onPageLoad() {
    gapi.client.load('youtube', 'v3', onApiLoaded);
}

function onApiLoaded() {
	gapi.client.setApiKey('AIzaSyAupZL4G1kcKRbHVmDfgk4uSPHHHwwPDYw');
	var requests = gapi.client.youtube.search.list({
		part: 'snippet',
        q: 'andela',
        regionCode: 'NG'
    });

    requests.execute(searchResponse);
}

function searchResponse(response){
    showResponse(response)
}