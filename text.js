console.log('text.js');

var camera, renderer, scene , controls , clock;

var spdx = 0,
spdy = 0;
var mouseX = 0, mouseY = 0, mouseDown = false;

camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//controls = new THREE.TrackballControls( camera );
scene = new THREE.Scene();

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var screenH = window.innerHeight;
var screenW = window.innerWidth;
var textGeom= new THREE.TextGeometry("test",
{
	font:'optimer',
	weight:'bold',
	size:100
});

var material2 = new THREE.MeshNormalMaterial();
var textMesh = new THREE.Mesh(textGeom,material2);

textGeom.computeBoundingBox();
	var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
	textMesh.position.set( -0.5 * textWidth, 0, 60 );//left-rt/high/far
	scene.add( textMesh );
	pivot = new THREE.Object3D();
	pivot.add( textMesh );
	scene.add( pivot );
	// Now, show what the camera sees on the screen:
	renderer.render(scene, camera);
	function animate() {
	  spdy = (screenH / 50 + mouseY) / 2000;
	  spdx = (screenW / 50 + mouseX) / 1000;
	
	  // rotate on mousedown
	  if (mouseDown) {
	   // textMesh.rotation.x = spdy;
	   	 pivot.rotation.x = spdy;
	     pivot.rotation.y = spdx;
	  }
	  requestAnimationFrame(animate);
	  render();
	}
	function render() {
	  // render
	  renderer.render(scene, camera);
	}		
	animate();

render();