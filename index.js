require([
    "dojo/_base/declare", "dojo/parser", "dojo/ready",
    "dijit/_WidgetBase", "dojo/dom-construct"
], function (declare, parser, ready, _WidgetBase, domConstruct) {

    declare("MyFirstWidget", [_WidgetBase], {
        _i: 0,
        // put methods, attributes, etc. here
        constructor: function (params, srcNodeRef) {
            //console.log("creating widget with params " + (params) + " on node " + srcNodeRef);
        },
        buildRendering: function () {
            // create the DOM for this widget
            this.domNode = domConstruct.create("button", { innerHTML: this._i });
        }
        ,
         templateString: "<div>" +
            "<button data-dojo-attach-event='onclick: increment'>press me</button>" +
            "&nbsp; count: <span data-dojo-attach-point='counter'>0</span>" +
            "</div>",
        postCreate: function () {
            // every time the user clicks the button, increment the counter
            this.connect(this.domNode, "onclick", "increment");
        },

        increment: function () {
            this.domNode.innerHTML = ++this._i;
        }
    });
    ready(function () {
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        (new MyFirstWidget()).placeAt(document.body);
    });
});