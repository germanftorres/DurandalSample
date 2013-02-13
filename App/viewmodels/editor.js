define(function (require) {

    var app = require("durandal/app"),
        viewModel = require("durandal/viewModel");


    function TabItem(caption, iconClass, template, selected) {
        var self = this;
        this.caption = caption;
        this.iconClass = iconClass;
        this.template = template;
        this.selected = selected;
        this.isActive = ko.computed(function () {
            return self == selected();
        });
    }

    function Editor() {
        this.paquete = ko.observable();        
        this.selectedTab = ko.observable();
        this.tabs = ko.observableArray([
            new TabItem("General", "icon-file", "_general", this.selectedTab),
            new TabItem("Opciones aereo", "icon-plane", "_opcionesaereo", this.selectedTab)
        ]);
        this.selectedTab(this.tabs()[0]);
    };

    Editor.prototype = {
        activate: function (data) {
            var that = this;

            // mock some data
            // var paquete = http.get("api/...");            
            var paquete = {
                id: "paquetes/00001",
                description: ko.observable("Estancia en Bahamas"),
                items: ko.observableArray([
                  {
                      id: ko.observable(1),
                      description: ko.observable("First Item")
                  },
                  {
                      id: ko.observable(1),
                      description: ko.observable("Second Item")
                  },
                  {
                      id: ko.observable(1),
                      description: ko.observable("Third")
                  }
                ])
            };

            that.paquete(paquete);
        }
    };
    return Editor;
});