// ************************** //
// Load Nissan Skyline
// ************************** //

function createNissanSkyline(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/nissan_skyline/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(1,1,1)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 6, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Nissan Skyline ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Highway Fence
// ************************** //

function createHighwayFence(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/highway_fence/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(40,40,40)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 38, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Highway Fence ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Building Set
// ************************** //

function createBuildingSet(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/building_set/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(100,100,100)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 10, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Building Set ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Abandoned House
// ************************** //

function createAbandonedHouse(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/abandoned_house/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(100,100,100)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Abandoned House ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Beach Chair
// ************************** //

function createBeachChair(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/beach_chair/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(100,100,100)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Beach Chair ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Beach Umbrella
// ************************** //

function createBeachUmbrella(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/beach_umbrella/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(0.7,0.7,0.7)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Beach Umbrella ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Beach Ball
// ************************** //

function createBeachBall(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/beach_ball/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(30,30,30)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 30, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Beach Ball ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Palm Tree
// ************************** //

function createPalmTree(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/palm_tree/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(50,50,50)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Palm Tree ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Old Rusty Car   
// ************************** //

function createOldRustyCar(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/old_rusty_car/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(1,1,1)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 30, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Old Rusty Car ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}