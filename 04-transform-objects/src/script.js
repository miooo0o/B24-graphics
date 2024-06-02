import * as THREE from 'three'

/**
 * All classes that inherit from Object3D have the following properties:
 * 
 * @property {Vector3} 		position	- The position of the object in 3D space.
 * @property {Vector3}		scale		- The scaling factor of the object in each dimension.
 * @property {Euler}		rotation	- The rotation of the object represented as Euler angles.
 * @property {Quaternion}	quaternion	- The orientation of the object represented as a quaternion.
 */

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Position
mesh.position.set(0.7, -0.6, 1)

// Scale
mesh.scale.set(2, 0.5, 0.5)

/**
 * Axes helper
 */
const axesHelpe = new THREE.AxesHelper(1) // param: unit vector * n
scene.add(axesHelpe)

/**
 * 1. console.log(mesh.position.length())
 * @function	Object3D.Vector3.length()
 * @description	{.length} distance between the center of the scene and our object's position
 * 
 * 2. console.log(mesh.position.distanceTo(camera.position))
 * @function	Object3D.Vector3.distanceTo(Vector3)
 * @description	{.distanceTo} distance between Object3D.position to param Vector3
 * 
 * 3. mesh.position.normalize()
 * 	  console.log(mesh.position.length())
 * @function	Object3D.Vector3.normalize()
 * @description	normalize(unit vector) target Vector3
 */

/**
 * Sizes
 */
const sizes = {
	width: 800,
	height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)