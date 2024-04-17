// ************************** //
// Create Plane
// ************************** //

function createPlane(l, w, startX) {
  const g = new THREE.Group();

  // ************************** //
  // Materials
  // ************************** //

  const whiteMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide }); // Linha branca
  const dashedMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide }); // Linha tracejada

  const textureLoader = new THREE.TextureLoader();
  const tarTexture = textureLoader.load('resources/asphalt.jpg');
  const grassTexture = textureLoader.load('resources/grass.jpg');
  const dirtTexture = textureLoader.load('resources/dirt2.jpg');
  const sandTexture = textureLoader.load('resources/sand.jpg');
  const oceanTexture = textureLoader.load('resources/ocean.jpg');

  tarTexture.wrapS = tarTexture.wrapT = THREE.RepeatWrapping;
  tarTexture.repeat.set(4, 2); // Altere os valores conforme necessário para controlar a repetição
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(15, 5); // Altere os valores conforme necessário para controlar a repetição
  dirtTexture.wrapS = dirtTexture.wrapT = THREE.RepeatWrapping;
  dirtTexture.repeat.set(5, 2); // Altere os valores conforme necessário para controlar a repetição
  sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping;
  sandTexture.repeat.set(5, 2); // Altere os valores conforme necessário para controlar a repetição
  oceanTexture.wrapS = oceanTexture.wrapT = THREE.RepeatWrapping;
  oceanTexture.repeat.set(5, 2); // Altere os valores conforme necessário para controlar a repetição

  const tarMaterial = new THREE.MeshPhongMaterial({ map: tarTexture, side: THREE.DoubleSide });
  const grassMaterial = new THREE.MeshPhongMaterial({ map: grassTexture, side: THREE.DoubleSide });
  const dirtMaterial = new THREE.MeshPhongMaterial({ map: dirtTexture, side: THREE.DoubleSide });
  const sandMaterial = new THREE.MeshPhongMaterial({ map: sandTexture, side: THREE.DoubleSide });
  const oceanMaterial = new THREE.MeshPhongMaterial({ map: oceanTexture, side: THREE.DoubleSide });

  const tarWidth = 1000;
  const grassWidth = (w -tarWidth) / 2;
  const oceanWidth = (w -tarWidth) / 4 - 200;
  const tarGeometry = new THREE.PlaneGeometry(l, tarWidth +200);
  const grassGeometry = new THREE.PlaneGeometry(l, grassWidth);
  const oceanGeometry = new THREE.PlaneGeometry(l, oceanWidth);
  const whiteGeometry = new THREE.PlaneGeometry(l, 15);
  
  const dashWidth = 200; // Largura do segmento da linha tracejada
  const dashSpacing = 300; // Espaçamento entre os segmentos da linha tracejada
  const numSegments = Math.floor(l / (dashWidth + dashSpacing));
  const dashedGeometry = new THREE.PlaneGeometry(dashWidth, 15, 1, 1);

  // ************************** //
  // Plane
  // ************************** //

  const tarPlane = new THREE.Mesh(tarGeometry, tarMaterial);
  tarPlane.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  tarPlane.receiveShadow = true;
  tarPlane.position.set(startX + l / 2, 1, 0);
  g.add(tarPlane);

  // ************************** //
  // White Lines
  // ************************** //

  const whiteLineLeft = new THREE.Mesh(whiteGeometry, whiteMaterial);
  whiteLineLeft.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  whiteLineLeft.receiveShadow = true;
  whiteLineLeft.position.set(startX + l / 2, 2, -tarWidth / 2);
  g.add(whiteLineLeft);

  const whiteLineRight = new THREE.Mesh(whiteGeometry, whiteMaterial);
  whiteLineRight.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  whiteLineRight.receiveShadow = true;
  whiteLineRight.position.set(startX + l / 2, 2, tarWidth / 2);
  g.add(whiteLineRight);

  const whiteLineMiddle = new THREE.Mesh(whiteGeometry, whiteMaterial);
  whiteLineMiddle.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  whiteLineMiddle.receiveShadow = true;
  whiteLineMiddle.position.set(startX + l / 2, 2, 0);
  g.add(whiteLineMiddle);

  const initialPosition = 0
  for (let i = 0; i < numSegments; i++) {
    const dashedLineLeft = new THREE.Mesh(dashedGeometry, dashedMaterial);
    dashedLineLeft.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    dashedLineLeft.receiveShadow = true;
    dashedLineLeft.position.set(startX + initialPosition + i * (dashWidth + dashSpacing), 2, -tarWidth / 4);
    dashedLineLeft.position.set(startX + initialPosition + i * (dashWidth + dashSpacing), 2, -tarWidth / 4);
    g.add(dashedLineLeft);
  }

  for (let i = 0; i < numSegments; i++) {
    const dashedLineRight = new THREE.Mesh(dashedGeometry, dashedMaterial);
    dashedLineRight.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    dashedLineRight.receiveShadow = true;
    dashedLineRight.position.set(startX + initialPosition + i * (dashWidth + dashSpacing), 2, tarWidth / 4);
    dashedLineRight.position.set(startX + initialPosition + i * (dashWidth + dashSpacing), 2, tarWidth / 4);
    g.add(dashedLineRight);
  }

  // ************************** //
  // Beach
  // ************************** //

  const grassPlaneLeft = new THREE.Mesh(grassGeometry, sandMaterial);
  grassPlaneLeft.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  grassPlaneLeft.receiveShadow = true;
  grassPlaneLeft.position.set(startX + l / 2, 0, -w / 4);
  g.add(grassPlaneLeft);

  const halfleftofgrassplaneleft = new THREE.Mesh(oceanGeometry, oceanMaterial);
  halfleftofgrassplaneleft.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  halfleftofgrassplaneleft.receiveShadow = true;
  halfleftofgrassplaneleft.position.set(startX + l / 2, 1, -(w / 2) + (w / 8));
  g.add(halfleftofgrassplaneleft);


  // ************************** //
  // Dirt
  // ************************** //

  const grassPlaneRight = new THREE.Mesh(grassGeometry, dirtMaterial);
  grassPlaneRight.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
  grassPlaneRight.receiveShadow = true;
  grassPlaneRight.position.set(startX + l / 2, 0, w / 4);
  g.add(grassPlaneRight);


  // ************************** //
  // Fenders
  // ************************** //

  const fenceSpacing = 178;
  for (let i = 0; i < l / fenceSpacing; i++) {
    g.add(createHighwayFence(startX + i * fenceSpacing, (tarWidth+100) / 2));
    
    const fence2StartX = startX - (i * fenceSpacing) + (tarWidth + 2500);
    fence2 = createHighwayFence(fence2StartX, (tarWidth + 100) / 2);
    fence2.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
    g.add(fence2);
  }


  // ************************** //
  // Building Set
  // ************************** //

  const buildingSet = createBuildingSet(-startX, -1100);
  buildingSet.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
  g.add(buildingSet);
  

  // ************************** //
  // Abandoned House
  // ************************** //

  const abandonedHouse = createAbandonedHouse(-startX + 4000, 1400);
  g.add(abandonedHouse);


  // ************************** //
  // Beach Chair
  // ************************** //

  const beachChair = createBeachChair(-startX + 1000, -1300);  
  g.add(beachChair);

  const beachChair2 = createBeachChair(-startX - 3500, -1400);
  g.add(beachChair2);

  // ************************** //
  // Beach Umbrella   
  // ************************** //

  const beachUmbrella = createBeachUmbrella(-startX - 1000, -1300);
  g.add(beachUmbrella);

  const beachUmbrella2 = createBeachUmbrella(-startX + 4000, -1000);
  g.add(beachUmbrella2);

  // ************************** //
  // Beach Ball
  // ************************** //

  const beachBall = createBeachBall(-startX - 1300, -1500);
  g.add(beachBall);

  // ************************** //
  // Palm Tree
  // ************************** //

  const palmTree = createPalmTree(-startX - 2500, -900);
  g.add(palmTree);

  const palmTree2 = createPalmTree(-startX + 2200, -800);
  g.add(palmTree2);

  const palmTree3 = createPalmTree(-startX + 2600, -1100);
  g.add(palmTree3);


  // ************************** //
  // Old Rusty Car
  // ************************** //

  const oldRustyCar = createOldRustyCar(-startX + 3000, 1300);
  //rotate 45 degrees 
  oldRustyCar.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 4);
  oldRustyCar.position.set(-startX + 1000, 0, 4000);



  g.add(oldRustyCar);




  // ************************** //
  // Update StartX
  // ************************** //

  startX += l;

  g.getNextStartX = function () {
    return startX;
  };

  return g;
}
