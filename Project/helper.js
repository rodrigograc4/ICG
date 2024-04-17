
// HELPER FUNCTIONS

const helper = {

    initEmptyScene: function (sceneElements) {

        // ************************** //
        // Create the 3D scene
        // ************************** //
        sceneElements.sceneGraph = new THREE.Scene();
        //sceneElements.sceneGraph.background = new THREE.Color(0x47bcff)
        sceneElements.sceneGraph.fog = new THREE.Fog(0xffe680, 2500, 12000)

        // ************************** //
        // Add camera
        // ************************** //
        const width = window.innerWidth;
        const height = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(45, width / height, 10, 10000);
        sceneElements.camera = camera;
        camera.position.set(-2000, 1000, 0);
        camera.lookAt(0, 0, 0);

        // ************************** //
        // Illumination
        // ************************** //

        // ************************** //
        // Add ambient light
        // ************************** //
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
        sceneElements.sceneGraph.add(ambientLight);

        // ***************************** //
        // Add spotlight (with shadows)
        // ***************************** //
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
        sunLight.position.set(0, 2800, 0);
        sceneElements.sceneGraph.add(sunLight);

        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;

        sunLight.name = "sunLight";


        const moonLight = new THREE.DirectionalLight(0xffffff, 0.05);
        moonLight.position.set(0, -2400, 0);
        sceneElements.sceneGraph.add(moonLight);

        moonLight.castShadow = true;
        moonLight.shadow.mapSize.width = 2048;
        moonLight.shadow.mapSize.height = 2048;

        moonLight.name = "moonLight";

        // *********************************** //
        // Create renderer (with shadow map)
        // *********************************** //
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        sceneElements.renderer = renderer;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor('rgb(255, 255, 150)', 1.0);
        renderer.setSize(width, height);

        // Setup shadowMap property
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // **************************************** //
        // Add the rendered image in the HTML DOM
        // **************************************** //
        const htmlElement = document.querySelector("#Skyline_Ride");
        htmlElement.appendChild(renderer.domElement);

        // ************************** //
        // NEW --- Control for the camera
        // ************************** //
        sceneElements.control = new OrbitControls(camera, renderer.domElement);
        sceneElements.control.screenSpacePanning = true;

        // ************************** //
        // Enable shadows
        // ************************** //
        sceneElements.sceneGraph.castShadow = true;
        sceneElements.sceneGraph.receiveShadow = true;

    },

    render: function (sceneElements) {

        const SunLight = sceneElements.sceneGraph.getObjectByName("sunLight");
        const MoonLight = sceneElements.sceneGraph.getObjectByName("moonLight");
        SunLight.rotation.x -= 0.005;
        MoonLight.rotation.x -= 0.005;


        sceneElements.renderer.render(sceneElements.sceneGraph, sceneElements.camera);
    },
};