/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotateCubeOneAxis, rotateCubeTwoAxis, rotateCubeThreeAxis, rotateCubeFourAxis, rotateCubeFiveAxis) {
            this.rotateCubeOneAxis = rotateCubeOneAxis;
            this.rotateCubeTwoAxis = rotateCubeTwoAxis;
            this.rotateCubeThreeAxis = rotateCubeThreeAxis;
            this.rotateCubeFourAxis = rotateCubeFourAxis;
            this.rotateCubeFiveAxis = rotateCubeFiveAxis;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));
