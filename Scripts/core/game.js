/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var cubeGeometry;
    var cubeMaterial;
    var stats;
    var cube;
    var cube2;
    var cube3;
    var cube4;
    var cube5;
    var axes;
    var planeGeometry;
    var planeMaterial;
    var spotLight;
    var colour;
    function init() {
        // Instantiate a new Scene object
        scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        // add an axis helper to the scene
        axes = new AxisHelper(20);
        scene.add(axes);
        console.log("Added Axis Helper to scene...");
        //plane
        var geometry = new PlaneGeometry(60, 20);
        var material = new MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        var plane = new Mesh(geometry, material);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 10;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);
        console.log('added plane');
        // Add a SpotLight to the scene
        spotLight = new SpotLight(0xbdbd1e);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);
        console.log("Added Spot Light to Scene");
        //cube #1 at the base
        cubeGeometry = new BoxGeometry(5, 5, 5);
        cubeMaterial = new LambertMaterial({ color: loadColour() });
        cube = new Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        cube.position.x = 0;
        cube.position.y = 0;
        cube.position.z = 0;
        scene.add(cube);
        console.log('cube1');
        //cube # 2 second from the base
        cubeGeometry = new BoxGeometry(4, 4, 4);
        cubeMaterial = new LambertMaterial({ color: loadColour() });
        cube2 = new Mesh(cubeGeometry, cubeMaterial);
        cube2.castShadow = true;
        cube2.position.x = 0.5;
        cube2.position.y = 5;
        cube2.position.z = -1;
        scene.add(cube2);
        console.log('cube2');
        //cube # 3 third from the base
        cubeGeometry = new BoxGeometry(2.5, 2.5, 2.5);
        cubeMaterial = new LambertMaterial({ color: loadColour() });
        cube3 = new Mesh(cubeGeometry, cubeMaterial);
        cube3.castShadow = true;
        cube3.position.x = 0.5;
        cube3.position.y = 7.5;
        cube3.position.z = -1;
        scene.add(cube3);
        console.log('cube3');
        //cube # 4 second from the top
        cubeGeometry = new BoxGeometry(1, 1, 1);
        cubeMaterial = new LambertMaterial({ color: loadColour() });
        cube4 = new Mesh(cubeGeometry, cubeMaterial);
        cube4.castShadow = true;
        cube4.position.x = 0.5;
        cube4.position.y = 8.5;
        cube4.position.z = -1;
        scene.add(cube4);
        console.log('cube4');
        //cube # 5 top cube
        cubeGeometry = new BoxGeometry(0.5, 0.5, 0.5);
        cubeMaterial = new LambertMaterial({ color: loadColour() });
        cube5 = new Mesh(cubeGeometry, cubeMaterial);
        cube5.castShadow = true;
        cube5.position.x = 0.5;
        cube5.position.y = 9;
        cube5.position.z = -1;
        scene.add(cube5);
        console.log('cube5');
        //Add Ambient Light to the scene
        var light = new THREE.AmbientLight(0x404040);
        scene.add(light);
        // add controls
        gui = new GUI();
        control = new Control(0, 0, 0, 0, 0);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function loadColour() {
        var cubeColour = '';
        if (Math.floor(Math.random() * 10) >= 6) {
            cubeColour = '#9932CC';
        }
        else {
            cubeColour = '#0000FF';
        }
        return cubeColour;
    }
    function addControl(controlObject) {
        gui.add(controlObject, 'rotateCubeOneAxis', 0, 5);
        gui.add(controlObject, 'rotateCubeTwoAxis', 0, 5);
        gui.add(controlObject, 'rotateCubeThreeAxis', 0, 5);
        gui.add(controlObject, 'rotateCubeFourAxis', 0, 5);
        gui.add(controlObject, 'rotateCubeFiveAxis', 0, 5);
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        cube.rotation.y += control.rotateCubeOneAxis * 15;
        cube2.rotation.y += control.rotateCubeTwoAxis * 15;
        cube3.rotation.y += control.rotateCubeThreeAxis * 15;
        cube4.rotation.y += control.rotateCubeFourAxis * 15;
        cube5.rotation.y += control.rotateCubeFiveAxis * 15;
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();
