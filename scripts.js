$(document).ready(function () {
    // api url
    var api_url = "https://api.spaceXdata.com/v3/launches?limit=100";

    var Launch_Success_Filter = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";

    var Launch_Land_Filter = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true";

    var all_url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014";

    var data;

    // Defining async function
    async function getapi(url) {
        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        data = await response.json();
        console.log(data);
        show(data);
    }

    var main_url=["https://api.spaceXdata.com/v3/launches?limit=100","","",""]

    var api_url;

    main_url.forEach(myFunctionarray);

	function myFunctionarray(value) {
	  api_url = api_url + value ; 
	  console.log(api_url)
}
    // Calling that async function

    getapi(api_url);

    $(".year").click(function () {
    	api_url="";
        $(".year").removeClass("active");
        $(this).addClass("active");
        var yearvalue = $(this).val();
        main_url[3] = yearvalue;
         main_url.forEach(myFunctionarray);
        getapi(api_url);
    });

     $(".launch").click(function () {
     	api_url="";
        $(".launch").removeClass("active");
        $(this).addClass("active");
        var launchvalue = $(this).val();
        main_url[1] = launchvalue;
        main_url.forEach(myFunctionarray);
        getapi(api_url);
    });

      $(".land").click(function () {
      	api_url="";
        $(".land").removeClass("active");
        $(this).addClass("active");
        var landvalue = $(this).val();
        main_url[2] = landvalue;
        main_url.forEach(myFunctionarray);
        getapi(api_url);
    });


    function show(showdata) {
        let tab = `
		`;

        // Loop to access all rows
        for (let r of showdata) {
            tab += `
		<div class="card-section">
				<div class="img-div"><img src="${r.links.mission_patch}" ></div>
				<span>${r.mission_name}</span>
				<p><b>Mission id:</b> <ul><li>${r.mission_id}</li></ul></p>
				<p><b>Launch Year:</b> ${r.launch_year}</p>
				<p><b>Successful Launch:</b> ${r.launch_success}</p>
				<p><b>Succesful Landing:</b> ${r.launch_success}</p>
		</div>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("data-div").innerHTML = tab;
    }
});
