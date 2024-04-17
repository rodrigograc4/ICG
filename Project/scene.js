// To store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    control: null,
    renderer: null,
};

// FUNCTIONS FOR BUILDING THE SCENE

const scene = {

    // Create and insert in the scene graph the models of the 3D scene

    load3DObjects: function (sceneGraph) {

        
        // ************************** //
        // Create Nissan Skyline
        // ************************** //

        const nissanSkyline = createNissanSkyline(-400, 180);
        sceneGraph.add(nissanSkyline);
        nissanSkyline.name = "nissanSkyline";


        // ************************** //
        // Create Plane with Everything
        // ************************** //

        const planes = []

        const plane = createPlane(10000, 6000, -2000);
        sceneGraph.add(plane);
        plane.name = "plane";

        planes.push(plane);

        const plane2 = createPlane(10000, 6000, 8000);
        sceneGraph.add(plane2);
        plane2.name = "plane";

        planes.push(plane2);

    }
};

// ANIMATION

function computeFrame(time) {

    // Control Skyline
    const skyline = sceneElements.sceneGraph.getObjectByName("nissanSkyline");

    var velocity;

    if (skyline.position.x < 10000 && skyline.position.x > -2000 && skyline.position.z < 1000 && skyline.position.z > -1000) {
        if (keyShift) { velocity = 22; } else { velocity = 14; }
    
        if (keyW) { 
            skyline.translateX(velocity);
        }
        if (keyA) {
            skyline.rotation.y = Math.max(skyline.rotation.y + 0.01, -Math.PI / 6);
            skyline.translateZ(-velocity-velocity);
            
        } else if (keyD) {
            skyline.rotation.y = Math.min(skyline.rotation.y - 0.01, Math.PI / 6);
            skyline.translateZ(velocity+velocity);

        } else {

            if (skyline.rotation.y > 0) {
                skyline.rotation.y = Math.max(skyline.rotation.y - 0.01, 0);
            } else if (skyline.rotation.y < 0) {
                skyline.rotation.y = Math.min(skyline.rotation.y + 0.01, 0);
            }
        }
        if (keyS) {
            skyline.translateX(-velocity);
        }
    }
        


    // Rendering
    helper.render(sceneElements);

    // Animation
    //Call for the next frame
    requestAnimationFrame(computeFrame);
}

let planeSpeed = 10; // Velocidade do plano

function animatePlanes() {
    // Obtenha todos os planos na cena
    const planes = sceneElements.sceneGraph.children.filter(child => child.name === "plane");

    // Calcule o valor de x da ponta do plano
    const maxX = Math.max(...planes.map(plane => plane.position.x));

    // Atualize a posição de cada plano
    planes.forEach(plane => {
        // Mova o plano para trás ao longo do eixo X
        planeSpeed += 0.01;
        plane.position.x -= planeSpeed;
        
        // Verifique se o plano ultrapassou o limite permitido
        if (plane.position.x <= -12000) {
            // Reposicione o plano para a frente
            plane.position.x = maxX + 10000; // Assumindo que o comprimento do plano é 10000
        }
    });

    // Chame a próxima animação de quadro
    requestAnimationFrame(animatePlanes);
}



// Call functions:
//  1. Initialize the empty scene
//  2. Add elements within the scene
//  3. Animate

async function init() {
    helper.initEmptyScene(sceneElements);
    scene.load3DObjects(sceneElements.sceneGraph);
    requestAnimationFrame(computeFrame);
    await new Promise(r => setTimeout(r, 20000));
    animatePlanes();
}

// HANDLING EVENTS

// Event Listeners

window.addEventListener('resize', resizeWindow);


//To keep track of the keyboard - WASD
var keyD = false, keyA = false, keyS = false, keyW = false, keyShift = false;
document.addEventListener('keydown', onDocumentKeyDown, false);
document.addEventListener('keyup', onDocumentKeyUp, false);

// Update render image size and camera aspect when the window is resized
function resizeWindow(eventParam) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sceneElements.camera.aspect = width / height;
    sceneElements.camera.updateProjectionMatrix();

    sceneElements.renderer.setSize(width, height);

    // Comment when doing animation
    // computeFrame(sceneElements);
}


function onDocumentKeyDown(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = true;
            break;
        case 83: //s
            keyS = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 87: //w
            keyW = true;
            break;
        case 16: //shift
            keyShift = true;
            break;
    }
}
function onDocumentKeyUp(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 87: //w
            keyW = false;
            break;
        case 16: //shift
            keyShift = false;
            break;
    }
}


// STARTING

init();