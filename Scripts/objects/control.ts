/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
         //Control Attributes
		rotateCubeOneAxis: number;
		rotateCubeTwoAxis: number;
        rotateCubeThreeAxis: number;
        rotateCubeFourAxis: number;
        rotateCubeFiveAxis: number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
      constructor(rotateCubeOneAxis: number,rotateCubeTwoAxis: number,rotateCubeThreeAxis: number,rotateCubeFourAxis: number,rotateCubeFiveAxis: number) {
			this.rotateCubeOneAxis = rotateCubeOneAxis;
			this.rotateCubeTwoAxis = rotateCubeTwoAxis;
            this.rotateCubeThreeAxis = rotateCubeThreeAxis;
            this.rotateCubeFourAxis = rotateCubeFourAxis;
            this.rotateCubeFiveAxis = rotateCubeFiveAxis;
		}
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
