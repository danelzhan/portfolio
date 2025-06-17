import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('app') });
const loader = new GLTFLoader();

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(-20, 5, 30);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Optionally, add ambient light for softer shadows
const ambientLight = new THREE.AmbientLight(0xffe692, 0.08);
scene.add(ambientLight);

// // Add a spotlight
// const spotLight = new THREE.SpotLight(0xffffff, 1);
// spotLight.position.set(15, 60, 35);
// spotLight.angle = Math.PI / 6;
// spotLight.penumbra = 0.2;
// spotLight.castShadow = true;
// scene.add(spotLight);
// const spotLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(spotLightHelper);

var vending_machine;
var streetlight;


var state = "menu"; // Initial state

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 725;
var ctx = canvas.getContext('2d');

const top_margin = 15;
const corner_radius = 20;
const menu_corner_radius = 12;
const background_color = '#53F4FF'
const text_color = 'white';
const tile_color = "#157A6E";
const button_height = 180;

const button_1 = {
  x: 40,
  y: 40 + top_margin,
  width: 120,
  height: button_height
};

const button_2 = {
  x: 190,
  y: 40 + top_margin,
  width: 120,
  height: button_height
};

const button_3 = {
  x: 340,
  y: 40 + top_margin,
  width: 120,
  height: button_height
};

const button_4 = {
  x: 40,
  y: 250 + top_margin,
  width: 120,
  height: button_height
};

const button_5 = {
  x: 190,
  y: 250 + top_margin,
  width: 120,
  height: button_height
};

const button_6 = {
  x: 340,
  y: 250 + top_margin,
  width: 120,
  height: button_height
};

const bottom_island = {
  x: 40,
  y: 540 + top_margin,
  width: 420,
  height: 120
};

var project_thumbnail = {
  x: 40,
  y: 40 + top_margin,
  width: 140,
  height: 210
};

var project_banner = {
  x: 210,
  y: 40 + top_margin,
  width: 250,
  height: 210
};

var project_description = {
  x: 40,
  y: 240 + top_margin + 60,
  width: 420,
  height: 300
};

var return_button = {
  x: 340,
  y: 600 + top_margin + 50,
  radius: 30
}

var info_button = {
  x: 420,
  y: 600 + top_margin + 50,
  radius: 30
}

var profile_panel = {
  x: 40,
  y: 40 + top_margin,
  width: 420,
  height: 440
}


let bannerOffset = 0;
const bannerText = "Software Engineer        Game Developer        Visual Designer        Content Creator        ";
const bannerSpeed = 0.4; // pixels per frame
const fontSize = 30;

function drawBanner() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#007BFF';
  ctx.fillRect(0, 480, canvas.width, 40); // Draw banner background

  // Draw scrolling text
  ctx.font = `${fontSize}px sans-serif`;
  ctx.fillStyle = 'white';
  // Measure the text width once
  const textWidth = ctx.measureText(bannerText).width;

  // Repeat text enough to cover canvas + overflow
  let x = -bannerOffset;
  while (x < canvas.width) {
    ctx.fillText(bannerText, x, 510);
    x += textWidth;
  }

  canvasTexture.needsUpdate = true;

  // Update offset
  bannerOffset += bannerSpeed;
  if (bannerOffset > textWidth) {
    bannerOffset = 0;
  }
}

function drawUI() {

  ctx.fillStyle = background_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  

  // button_1
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_1.x, button_1.y, button_1.width, button_1.height, menu_corner_radius);
  const img = new Image();
  img.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 140;
    const imgHeight = 220;
    const imgX = button_1.x + (button_1.width - imgWidth) / 2;
    const imgY = button_1.y - 95;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };
  img.src = 'drink_1.png';

  // button_2
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_2.x, button_2.y, button_2.width, button_2.height, menu_corner_radius);
  ctx.fill();
  // ctx.fillText("Open", button.x + 30, button.y + 50);

  // button_3
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_3.x, button_3.y, button_3.width, button_3.height, menu_corner_radius);
  ctx.fill();
  // ctx.fillText("Open", button.x + 30, button.y + 50);

  // button_4
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_4.x, button_4.y, button_4.width, button_4.height, menu_corner_radius);
  ctx.fill();

  // button_5
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_5.x, button_5.y, button_5.width, button_5.height, menu_corner_radius);
  ctx.fill();

  // button_6
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_6.x, button_6.y, button_6.width, button_6.height, menu_corner_radius);
  ctx.fill();

  // bottom_island
  ctx.fillStyle = tile_color;
  ctx.roundRect(bottom_island.x, bottom_island.y, bottom_island.width, bottom_island.height, corner_radius);
  ctx.fill();

}

drawUI();
const canvasTexture = new THREE.CanvasTexture(canvas);

const geometry = new THREE.PlaneGeometry( 12, 17 );
var material = new THREE.MeshBasicMaterial( {map: canvasTexture, side: THREE.DoubleSide} );
var screen = new THREE.Mesh( geometry, material );
screen.position.set(-1.5, 0.5, 5.5);
scene.add( screen );

function project_1() {

  ctx.fillStyle = background_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(project_thumbnail.x, project_thumbnail.y, project_thumbnail.width, project_thumbnail.height, corner_radius);
  ctx.fill();
  const img = new Image();
  img.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 180;
    const imgHeight = 300;
    const imgX = button_1.x + (button_1.width - imgWidth) / 2 + 9;
    const imgY = button_1.y - 130;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };
  img.src = 'drink_1.png';

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(project_banner.x, project_banner.y, project_banner.width, project_banner.height, corner_radius);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(project_description.x, project_description.y, project_description.width, project_description.height, corner_radius);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.arc(return_button.x, return_button.y, return_button.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.arc(info_button.x, info_button.y, info_button.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.arc(0, 0, 0, 0, 0);
  ctx.fill();

  canvasTexture.needsUpdate = true;
}

function project_2() {
  
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  canvasTexture.needsUpdate = true;
}

function project_3() {
  
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  canvasTexture.needsUpdate = true;
}

function profile() {

  ctx.fillStyle = background_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(profile_panel.x, profile_panel.y, profile_panel.width, profile_panel.height, corner_radius);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.arc(return_button.x, return_button.y, return_button.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.arc(info_button.x, info_button.y, info_button.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.arc(0, 0, 0, 0, 0);
  ctx.fill();

  canvasTexture.needsUpdate = true;

}

// default is layer_0;
// this layer is for menu text
function menu_layer_1() {

  const font = '22px sans-serif';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Hwei's", 50, 205);

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Canvas", 50, 225);

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Bionics", 200, 225);

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Campus", 350, 225);

}

window.addEventListener('click', (event) => {
  // Convert screen coords to NDC
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycast from the camera to the mouse position
  raycaster.setFromCamera(mouse, camera);

  // Check intersection with the screen mesh
  const intersects = raycaster.intersectObject(screen);

  if (intersects.length > 0) {

      // Convert UV to canvas pixels
      const uv = intersects[0].uv;
      const canvasX = uv.x * canvas.width;
      const canvasY = (1 - uv.y) * canvas.height; // invert Y

      if (state === "menu") {

        // Check if click is inside button
        if (
          canvasX >= button_1.x &&
          canvasX <= button_1.x + button_1.width &&
          canvasY >= button_1.y &&
          canvasY <= button_1.y + button_1.height
        ) {
          project_1();
          state = "project_1";
        }

        if (
          canvasX >= button_2.x &&
          canvasX <= button_2.x + button_2.width &&
          canvasY >= button_2.y &&
          canvasY <= button_2.y + button_2.height
        ) {
          console.log("Button 2 clicked!");
        }

        if (
          canvasX >= button_3.x &&
          canvasX <= button_3.x + button_3.width &&
          canvasY >= button_3.y &&
          canvasY <= button_3.y + button_3.height
        ) {
          console.log("Button 3 clicked!");
        }

        if (
          canvasX >= button_4.x &&
          canvasX <= button_4.x + button_4.width &&
          canvasY >= button_4.y &&
          canvasY <= button_4.y + button_4.height
        ) {
          console.log("Button 4 clicked!");
        }

        if (
          canvasX >= button_5.x &&
          canvasX <= button_5.x + button_5.width &&
          canvasY >= button_5.y &&
          canvasY <= button_5.y + button_5.height
        ) {
          console.log("Button 5 clicked!");
        }

        if (
          canvasX >= button_6.x &&
          canvasX <= button_6.x + button_6.width &&
          canvasY >= button_6.y &&
          canvasY <= button_6.y + button_6.height
        ) {
          console.log("Button 6 clicked!");
        }

        if (
          canvasX >= bottom_island.x &&
          canvasX <= bottom_island.x + bottom_island.width &&
          canvasY >= bottom_island.y &&
          canvasY <= bottom_island.y + bottom_island.height
        ) {
          profile();
          state = "profile";
        }

      } else if (state === "project_1") {

        if (
          canvasX >= return_button.x - return_button.radius &&
          canvasX <= return_button.x + return_button.radius &&
          canvasY >= return_button.y - return_button.radius &&
          canvasY <= return_button.y + return_button.radius
        ) {
          drawUI();
          canvasTexture.needsUpdate = true;
          state = "menu";
        }

        if (
          canvasX >= info_button.x - info_button.radius &&
          canvasX <= info_button.x + info_button.radius &&
          canvasY >= info_button.y - info_button.radius &&
          canvasY <= info_button.y + info_button.radius
        ) {
          window.location.href = "https://github.com/danelzhan/Hweis-Canvas";
        }

      } else if (state === "profile") {

        if (
          canvasX >= return_button.x - return_button.radius &&
          canvasX <= return_button.x + return_button.radius &&
          canvasY >= return_button.y - return_button.radius &&
          canvasY <= return_button.y + return_button.radius
        ) {
          drawUI();
          canvasTexture.needsUpdate = true;
          state = "menu";
        }

      }



    }
  }
);  

loader.load(
  'vending_machine.glb',
  function (glb) {
    console.log(glb);
    vending_machine = glb.scene;
    vending_machine.scale.set(10, 10, 10); // Adjust scale as needed
    vending_machine.position.set(0, -20, 0); // Adjust position as needed
    vending_machine.traverse((child) => {
      console.log("child");
      if (child.isMesh) {
          if (child.material && child.material.type === 'MeshBasicMaterial') {
            child.material = new THREE.MeshStandardMaterial({ color: child.material.color });
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
    });


    scene.add(vending_machine);
  }
);

const pointLight = new THREE.PointLight(0xffe692, 100, 200, 1.4);
pointLight.position.set(6, 33, 10);
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
// scene.add(pointLightHelper);
scene.add(pointLight);

loader.load(
  'streetlight.glb',
  function (glb) {
    console.log(glb);
    streetlight = glb.scene;
    streetlight.scale.set(60, 60, 60); // Adjust scale as needed
    streetlight.position.set(18, -20, 10); // Adjust position as needed
    // streetlight.traverse((child) => {

    // if (child.isMesh) {
    //     if (child.material && child.material.type === 'MeshBasicMaterial') {
    //       child.material = new THREE.MeshStandardMaterial({ color: child.material.color });
    //     }
    //     child.castShadow = true;
    //     child.receiveShadow = true;
    //   }
    // });


    scene.add(streetlight);
  }
);


// Create a reflective floor using MeshStandardMaterial with high metalness and low roughness
const floorGeometry = new THREE.PlaneGeometry(400, 400); // adjust size
const reflectiveFloor = new Reflector(floorGeometry, {
  clipBias: 0.003,
  textureWidth: window.innerWidth * window.devicePixelRatio,
  textureHeight: window.innerHeight * window.devicePixelRatio,
  color: 0x222222,
});
reflectiveFloor.rotation.x = -Math.PI / 2; // rotate to lay flat
reflectiveFloor.position.y = -20.2; // adjust as needed
scene.add(reflectiveFloor);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  //spotLightHelper.update();
  // pointLightHelper.update();
  if (state === "menu") {
    drawBanner();
    menu_layer_1();
  }
 
  renderer.render(scene, camera);
}
animate();
