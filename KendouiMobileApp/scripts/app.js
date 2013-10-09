(function (global) {
  
    window.cars = [
        {Vendor: "Audi", Model: "A6", RentPrice: "2000", IsFree:"True"},
        {Vendor: "VW", Model: "Golf", RentPrice: "1000", IsFree:"True"},
        {Vendor: "Mercedes", Model: "E270", RentPrice: "2000", IsFree:"True"},
        {Vendor: "BMW", Model: "320", RentPrice: "1500", IsFree:"True"},
        {Vendor: "BMW", Model: "330", RentPrice: "2000", IsFree:"True"},
        {Vendor: "Opel", Model: "Astra", RentPrice: "100", IsFree:"True"},
        {Vendor: "Seat", Model: "Ibiza", RentPrice: "120", IsFree:"True"},
    ];
     
    var app = global.app = global.app || {};
  
    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body);
        
        var template = kendo.template($('#carTmpl').html());
        var processed = template(cars);
        $('#all-cars').append(processed);
    }, false);
    
})(window);