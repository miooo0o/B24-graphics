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
 * Euler		Euler Angles
 * @function	rotation.reorder
 * @description	Reorders the Euler angles to a specified order to prevent gimbal lock.
 *				Gimbal lock occurs when the rotation around one axis aligns with another,
 *				causing a loss of one degree of freedom in the rotation system.
 * 				By reordering the Euler angles, you can avoid this problem and ensure
 *				that the rotation behaves as expected.
 *				- update quaternion
 * 
 * @param {string} order -	The new order of the Euler angles. It must be one of the following: 
 *							'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'.
 */
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

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

camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)