import * as THREE from "./three.module.js";

export default function flor({ x, y, z }) {


var gerometry10 = new THREE.BoxGeometry(7,7,6,8);
var material10= new THREE.MeshBasicMaterial({
    color:0xffffff, side:THREE.DoubleSide
})
var mesh10= new THREE.Mesh(gerometry10,material10);
///scene.add(mesh10)
mesh10.position.set(0,3,-5,0)

var gerometry11 = new THREE.SphereGeometry(1);
var material11= new THREE.MeshBasicMaterial({
    color:0x8b4513, side:THREE.DoubleSide
})
var mesh11= new THREE.Mesh(gerometry11,material11);
//scene.add(mesh11)
mesh11.position.set(0,15,-4,0)

var gerometry12 = new THREE.ConeGeometry(1,3,3,5,9,8);
var material12= new THREE.MeshBasicMaterial({
    color:0x008000
    , side:THREE.DoubleSide
})
var mesh12= new THREE.Mesh(gerometry12,material12);
//scene.add(mesh12)
mesh12.position.set(2,10,-5,0);
mesh12.rotation.set(0,0,1.9)

var gerometry13 = new THREE.CylinderGeometry(1,1,8,20);
var material13= new THREE.MeshBasicMaterial({
    color:0x008000, side:THREE.DoubleSide
})
var mesh13= new THREE.Mesh(gerometry13,material13);
///scene.add(mesh13)
mesh13.position.set(0,10,-5,0)

var gerometry15 = new THREE.TorusKnotGeometry(1.8,0.8,40,40);
var material15= new THREE.MeshBasicMaterial({
    color:0xffadbb, side:THREE.DoubleSide
})
var mesh15= new THREE.Mesh(gerometry15,material15);
//scene.add(mesh15)
mesh15.position.set(0,15,-5,0)

var gerometry16 = new THREE.DodecahedronGeometry(3.2);
var material16= new THREE.MeshBasicMaterial({
    color:0x4b2f1a, side:THREE.DoubleSide
})
var mesh16= new THREE.Mesh(gerometry16,material16);
//scene.add(mesh16)
mesh16.position.set(0,5,-5)


   const flor = new THREE.Group();
  flor.add(mesh10,mesh11,material12,mesh13,mesh15,mesh16);
  flor.position.set(x, y, z);

  return flor;
}

