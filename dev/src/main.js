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

camera.position.set(-27, 7, 43);

const camera_sound = new Audio('woosh.mp3');
camera_sound.volume = 0.6;

function frame_camera() {
  camera_sound.play();
  gsap.to(camera.position, {
    duration: 0.6,
    x: 0,
    y: 1.6,
    z: 22.7,
    onUpdate: () => {
      camera.lookAt(0, 0, 0);
    }
  });

}
window.frame_camera = frame_camera;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = 7 * Math.PI / 12;
controls.maxDistance = 70;

// Optionally, add ambient light for softer shadows
const ambientLight = new THREE.AmbientLight(0xffe692, 0.08);
scene.add(ambientLight);

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

const return_button_profile = new Image();
return_button_profile.src = 'return.png';
const linkedin_button_profile = new Image();
linkedin_button_profile.src = 'linkedin.png';
const pfp = new Image();
pfp.src = 'pfp.png';
const restock = new Image();
restock.src = 'restock.png';
const drink_1 = new Image();
drink_1.src = 'drink_1.png';
const drink_2 = new Image();
drink_2.src = 'drink_2.webp';
const drink_3 = new Image();
drink_3.src = 'drink_3.webp';
const drink_4 = new Image();
drink_4.src = 'drink_4.png';
const drink_5 = new Image();
drink_5.src = 'drink_5.webp';
const drink_6 = new Image();
drink_6.src = 'drink_6.png';

let videoPlaying = false;
const video = document.createElement('video');
video.src = 'hwei_canvas.mp4';
video.muted = true;
video.loop = true;
video.autoplay = true;
video.playsInline = true;
video.load();
video.play();

const video2 = document.createElement('video');
video2.src = 'perscriptify.mp4';
video2.muted = true;
video2.loop = true;
video2.autoplay = true;
video2.playsInline = true;
video2.load();
video2.play();

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
  y: 20 + top_margin,
  width: 420,
  height: 570
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
  ctx.fill();

  // button_2
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_2.x, button_2.y, button_2.width, button_2.height, menu_corner_radius);
  ctx.fill();

  // button_3
  ctx.fillStyle = tile_color;
  ctx.roundRect(button_3.x, button_3.y, button_3.width, button_3.height, menu_corner_radius);
  ctx.fill();

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
  ctx.fill()

  canvasTexture.needsUpdate = true;
}

function project_2() {
  
 ctx.fillStyle = background_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(project_thumbnail.x, project_thumbnail.y, project_thumbnail.width, project_thumbnail.height, corner_radius);
  ctx.fill();

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
  ctx.fill()

  canvasTexture.needsUpdate = true;
}

function project_3() {
  
  ctx.fillStyle = background_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(project_thumbnail.x, project_thumbnail.y, project_thumbnail.width, project_thumbnail.height, corner_radius);
  ctx.fill();

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
  ctx.fill()

  canvasTexture.needsUpdate = true;
}

function project_4() {
  
  ctx.fillStyle = background_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = tile_color;
  ctx.beginPath();
  ctx.roundRect(project_thumbnail.x, project_thumbnail.y, project_thumbnail.width, project_thumbnail.height, corner_radius);
  ctx.fill();

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
  ctx.fill()

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

  var imgWidth = 140;
  var imgHeight = 220;
  var imgX = button_1.x + (button_1.width - imgWidth) / 2;
  var imgY = button_1.y - 95;
  ctx.drawImage(drink_1, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 95;
  imgHeight = 138;
  imgX = button_2.x + 13;
  imgY = button_2.y - 9;
  ctx.drawImage(drink_2, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 130;
  imgHeight = 125;
  imgX = button_3.x - 5;
  imgY = button_3.y + 10;
  ctx.drawImage(drink_3, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 150;
  imgHeight = 160;
  imgX = button_4.x - 15;
  imgY = button_4.y - 5;
  ctx.drawImage(drink_4, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 150;
  imgHeight = 150;
  imgX = button_5.x - 15;
  imgY = button_5.y + 3;
  ctx.drawImage(drink_5, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 90;
  imgHeight = 140;
  imgX = button_6.x + 15;
  imgY = button_6.y + 10;
  ctx.drawImage(drink_6, imgX, imgY, imgWidth, imgHeight);

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Hwei's", 50, 205);
  ctx.fillText("Canvas", 50, 225);
  ctx.fillText("Spawn", 200, 225);
  ctx.fillText("Prescriptify", 350, 225);
  ctx.fillText("SocialCRM", 50, 435);

  ctx.font = "64px sans-serif";
  ctx.fillText("ᕦ(• - •)ᕤ", 128, 625);

  ctx.font = font;
  ctx.fillText("About Me", 203, 665);

}

// restocking layer
function menu_layer_2() {

  var imgWidth
  var imgHeight
  var imgX
  var imgY

  // imgWidth = 120;
  // imgHeight = 220;
  // imgX = button_3.x;
  // imgY = button_3.y - 20;
  // ctx.drawImage(restock, imgX, imgY, imgWidth, imgHeight);

  // imgWidth = 120;
  // imgHeight = 220;
  // imgX = button_4.x;
  // imgY = button_4.y - 20;
  // ctx.drawImage(restock, imgX, imgY, imgWidth, imgHeight);
  
  imgWidth = 120;
  imgHeight = 220;
  imgX = button_5.x;
  imgY = button_5.y - 20;
  ctx.drawImage(restock, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 120;
  imgHeight = 220;
  imgX = button_6.x;
  imgY = button_6.y - 20;
  ctx.drawImage(restock, imgX, imgY, imgWidth, imgHeight);
 
}

function profile_layer_1() {

  const font = '22px sans-serif';

  let imgWidth = 40;
  let imgHeight = 40;
  let imgX = 320;
  let imgY = 645;
  ctx.drawImage(return_button_profile, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 35;
  imgHeight = 35;
  imgX = 403;
  imgY = 648;
  ctx.drawImage(linkedin_button_profile, imgX, imgY, imgWidth, imgHeight);

  imgWidth = 360;
  imgHeight = 400;
  imgX = 75;
  imgY = -10;
  ctx.drawImage(pfp, imgX, imgY, imgWidth, imgHeight);

  ctx.fillStyle = text_color;
  ctx.font = "36px sans-serif";
  ctx.fillText("hi, 你好", 60, 385);

  ctx.font = font;
  ctx.fillText("i'm currently a sophomore in the ", 60, 425);
  ctx.fillText("university of british columbia, ", 60, 455);
  ctx.fillText("studying computer engineering.", 60, 485);
  ctx.fillText("whilst off campus, you can find me ", 60, 515);
  ctx.fillText("being a big back, playing tennis,", 60, 545);
  ctx.fillText("or on league of legends.", 60, 575);

}

// default is layer_0;
// this layer is for project
function project_layer_1() {

  const img = new Image();
  img.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 180;
    const imgHeight = 294;
    const imgX = button_1.x + (button_1.width - imgWidth) / 2 + 9;
    const imgY = button_1.y - 140;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };
  img.src = 'drink_1.png';

  const font = '22px sans-serif';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Hwei's", 50, 230);

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Canvas", 50, 250);

  const return_button = new Image();
  return_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 40;
    const imgHeight = 40;
    const imgX = 320;
    const imgY = 645;
    ctx.drawImage(return_button, imgX, imgY, imgWidth, imgHeight);
  };
  return_button.src = 'return.png';

  const info_button = new Image();
  info_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 50;
    const imgHeight = 50;
    const imgX = 395;
    const imgY = 640;
    ctx.drawImage(info_button, imgX, imgY, imgWidth, imgHeight);
  };
  info_button.src = 'info.png';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Inspired by the gameplay and thematic ", 60, 360);
  ctx.fillText("of Hwei from League of Legends,", 60, 390);
  ctx.fillText("Hwei's Canvas is a 2D roguelike ", 60, 420);
  ctx.fillText("centered on a custom symbol-drawing", 60, 450);
  ctx.fillText("spell system, where players cast", 60, 480);
  ctx.fillText("abilities by drawing predefined patterns.", 60, 510);

  canvasTexture.needsUpdate = true;

}

function project_layer_2() {

  const img = new Image();
  img.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 120;
    const imgHeight = 180;
    const imgX = button_1.x + (button_1.width - imgWidth) / 2 + 9;
    const imgY = button_1.y - 25;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };
  img.src = 'drink_2.webp';

  const font = '22px sans-serif';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Spawn", 50, 250);

  const spawn_head = new Image();
  spawn_head.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 230;
    const imgHeight = 180;
    const imgX = 220;
    const imgY = 70;
    ctx.drawImage(spawn_head, imgX, imgY, imgWidth, imgHeight);
  };
  spawn_head.src = 'spawn.png';

  const return_button = new Image();
  return_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 40;
    const imgHeight = 40;
    const imgX = 320;
    const imgY = 645;
    ctx.drawImage(return_button, imgX, imgY, imgWidth, imgHeight);
  };
  return_button.src = 'return.png';

  const info_button = new Image();
  info_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 50;
    const imgHeight = 50;
    const imgX = 395;
    const imgY = 640;
    ctx.drawImage(info_button, imgX, imgY, imgWidth, imgHeight);
  };
  info_button.src = 'info.png';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Spawn is a social media app that", 60, 360);
  ctx.fillText("aims to make sponteneity easy.", 60, 390);
  ctx.fillText("As an Android Developer, I worked ", 60, 420);
  ctx.fillText("on the development cycle of the ", 60, 450);
  ctx.fillText("Android version, creating dynamic ", 60, 480);
  ctx.fillText("front-end pages, implmenting user ", 60, 510);
  ctx.fillText("authentication, and connecting with ", 60, 540);
  ctx.fillText("application backend. ", 60, 570);

  canvasTexture.needsUpdate = true;

}

function project_layer_3() {

  const img = new Image();
  img.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 120;
    const imgHeight = 150;
    const imgX = button_1.x + (button_1.width - imgWidth) / 2 + 9;
    const imgY = button_1.y + 20;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };
  img.src = 'drink_3.webp';

  const font = '22px sans-serif';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Perscriptify", 50, 250);

  const return_button = new Image();
  return_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 40;
    const imgHeight = 40;
    const imgX = 320;
    const imgY = 645;
    ctx.drawImage(return_button, imgX, imgY, imgWidth, imgHeight);
  };
  return_button.src = 'return.png';

  const info_button = new Image();
  info_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 50;
    const imgHeight = 50;
    const imgX = 395;
    const imgY = 640;
    ctx.drawImage(info_button, imgX, imgY, imgWidth, imgHeight);
  };
  info_button.src = 'info.png';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("Prescriptify is a React, Flask, and ", 60, 360);
  ctx.fillText("MongoDB app that helps users detect", 60, 390);
  ctx.fillText("harmful drug and food interactions.", 60, 420);
  ctx.fillText("It uses Gemini to simplify complex data", 60, 450);
  ctx.fillText("into clear alerts and visual summaries,", 60, 480);
  ctx.fillText("while Auth0 authentication and ", 60, 510);
  ctx.fillText("encrypted storage keep user information ", 60, 540);
  ctx.fillText("secure.", 60, 570);

  canvasTexture.needsUpdate = true;

}

function project_layer_4() {

  const img = new Image();
  img.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 120;
    const imgHeight = 180;
    const imgX = button_1.x + (button_1.width - imgWidth) / 2 + 9;
    const imgY = button_1.y;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };
  img.src = 'drink_4.png';

  const font = '22px sans-serif';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("SocialCRM", 50, 250);

  const spawn_head = new Image();
  spawn_head.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 230;
    const imgHeight = 180;
    const imgX = 220;
    const imgY = 70;
    ctx.drawImage(spawn_head, imgX, imgY, imgWidth, imgHeight);
  };
  spawn_head.src = 'social_crm.jpg';

  const return_button = new Image();
  return_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 40;
    const imgHeight = 40;
    const imgX = 320;
    const imgY = 645;
    ctx.drawImage(return_button, imgX, imgY, imgWidth, imgHeight);
  };
  return_button.src = 'return.png';

  const info_button = new Image();
  info_button.onload = () => {
    // Draw the image (resize to fit)
    const imgWidth = 50;
    const imgHeight = 50;
    const imgX = 395;
    const imgY = 640;
    ctx.drawImage(info_button, imgX, imgY, imgWidth, imgHeight);
  };
  info_button.src = 'info.png';

  ctx.fillStyle = text_color;
  ctx.font = font;
  ctx.fillText("At Hack the North, my team’s ", 60, 360);
  ctx.fillText("SocialCRM won Best AI Agent for ", 60, 390);
  ctx.fillText("building an end-to-end agentic system ", 60, 420);
  ctx.fillText("that autonomously collected, analyzed,", 60, 450);
  ctx.fillText("and reasoned over creator data. The ", 60, 480);
  ctx.fillText("project stood out for its ability to turn ", 60, 510);
  ctx.fillText("raw social content into structured,", 60, 540);
  ctx.fillText("actionable insights with minimal", 60, 570);
  ctx.fillText("human input.", 60, 600);

  canvasTexture.needsUpdate = true;

}

const tap_sound = new Audio("tap.mp3");
tap_sound.volume = 0.04;

window.addEventListener('pointerdown', (event) => {
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
          state = "project_1";
          project_1();
          tap_sound.play();
        }

        if (
          canvasX >= button_2.x &&
          canvasX <= button_2.x + button_2.width &&
          canvasY >= button_2.y &&
          canvasY <= button_2.y + button_2.height
        ) {
          state = "project_2";
          project_2()
          tap_sound.play();
        }

        if (
          canvasX >= button_3.x &&
          canvasX <= button_3.x + button_3.width &&
          canvasY >= button_3.y &&
          canvasY <= button_3.y + button_3.height
        ) {
          state = "project_3";
          project_3()
          tap_sound.play();
        }

        if (
          canvasX >= button_4.x &&
          canvasX <= button_4.x + button_4.width &&
          canvasY >= button_4.y &&
          canvasY <= button_4.y + button_4.height
        ) {
          state = "project_4";
          project_4()
          tap_sound.play();
        }

        if (
          canvasX >= button_5.x &&
          canvasX <= button_5.x + button_5.width &&
          canvasY >= button_5.y &&
          canvasY <= button_5.y + button_5.height
        ) {
          console.log("Button 5 clicked!");
          tap_sound.play();
        }

        if (
          canvasX >= button_6.x &&
          canvasX <= button_6.x + button_6.width &&
          canvasY >= button_6.y &&
          canvasY <= button_6.y + button_6.height
        ) {
          console.log("Button 6 clicked!");
          tap_sound.play();
        }

        if (
          canvasX >= bottom_island.x &&
          canvasX <= bottom_island.x + bottom_island.width &&
          canvasY >= bottom_island.y &&
          canvasY <= bottom_island.y + bottom_island.height
        ) {
          state = "profile";
          profile();
          tap_sound.play();
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
          tap_sound.play();
        }

        if (
          canvasX >= info_button.x - info_button.radius &&
          canvasX <= info_button.x + info_button.radius &&
          canvasY >= info_button.y - info_button.radius &&
          canvasY <= info_button.y + info_button.radius
        ) {
          tap_sound.play();
          window.location.href = "https://github.com/danelzhan/Hweis-Canvas";
        }

      } else if (state === "project_2") {

        if (
          canvasX >= return_button.x - return_button.radius &&
          canvasX <= return_button.x + return_button.radius &&
          canvasY >= return_button.y - return_button.radius &&
          canvasY <= return_button.y + return_button.radius
        ) {
          drawUI();
          canvasTexture.needsUpdate = true;
          state = "menu";
          tap_sound.play();
        }

        if (
          canvasX >= info_button.x - info_button.radius &&
          canvasX <= info_button.x + info_button.radius &&
          canvasY >= info_button.y - info_button.radius &&
          canvasY <= info_button.y + info_button.radius
        ) {
          tap_sound.play();
          window.location.href = "https://getspawn.com/";
        }

      } else if (state === "project_3") {

        if (
          canvasX >= return_button.x - return_button.radius &&
          canvasX <= return_button.x + return_button.radius &&
          canvasY >= return_button.y - return_button.radius &&
          canvasY <= return_button.y + return_button.radius
        ) {
          drawUI();
          canvasTexture.needsUpdate = true;
          state = "menu";
          tap_sound.play();
        }

        if (
          canvasX >= info_button.x - info_button.radius &&
          canvasX <= info_button.x + info_button.radius &&
          canvasY >= info_button.y - info_button.radius &&
          canvasY <= info_button.y + info_button.radius
        ) {
          tap_sound.play();
          window.location.href = "https://devpost.com/software/scriptshield";
        }

      } else if (state === "project_4") {

        if (
          canvasX >= return_button.x - return_button.radius &&
          canvasX <= return_button.x + return_button.radius &&
          canvasY >= return_button.y - return_button.radius &&
          canvasY <= return_button.y + return_button.radius
        ) {
          drawUI();
          canvasTexture.needsUpdate = true;
          state = "menu";
          tap_sound.play();
        }

        if (
          canvasX >= info_button.x - info_button.radius &&
          canvasX <= info_button.x + info_button.radius &&
          canvasY >= info_button.y - info_button.radius &&
          canvasY <= info_button.y + info_button.radius
        ) {
          tap_sound.play();
          window.location.href = "https://devpost.com/software/socialcrm";
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
          tap_sound.play();
        } else if (
          canvasX >= info_button.x - info_button.radius &&
          canvasX <= info_button.x + info_button.radius &&
          canvasY >= info_button.y - info_button.radius &&
          canvasY <= info_button.y + info_button.radius
        ) {
          tap_sound.play();
          window.location.href = "https://www.linkedin.com/in/danelzhan/";
        }

      }



    }
  }
);  

loader.load(
  'vending_machine.glb',
  function (glb) {
    vending_machine = glb.scene;
    vending_machine.scale.set(10, 10, 10); // Adjust scale as needed
    vending_machine.position.set(0, -20, 0); // Adjust position as needed
    vending_machine.traverse((child) => {
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
  color: 0x333333,
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
    menu_layer_2();
  } else if (state === "project_1") {
    project_layer_1();
    ctx.drawImage(video, 220, 75, 230, 170);
  } else if (state === "project_2") {
    project_layer_2();
  } else if (state === "project_3") {
    project_layer_3();
    ctx.drawImage(video2, 220, 75, 230, 170);
  } else if (state === "project_4") {
    project_layer_4();
  } else if (state === "profile") {
    profile_layer_1();
  }
  // console.log(camera.position);
 
  renderer.render(scene, camera);
}

animate();

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Resize renderer
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Update camera aspect
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize);