import * as THREE from "./three.module.js";

export default function pan({ x, y, z }) {


   ////pan

var geometry08 = new THREE.TorusGeometry(4,10,10);

var materyal08 = new THREE.MeshBasicMaterial({
        color:0x754500, side: THREE.DoubleSide, 
     }) 

 var mesh12=new THREE.Mesh(geometry08,materyal08);
///scene.add(mesh12);
mesh12.position.set(0,4,12);
mesh12.rotation.set(33,0,0);

///// choclate

var geometry05 = new THREE.SphereGeometry(3,19,13);

var materyal06 = new THREE.MeshBasicMaterial({
        color:0x261700, side: THREE.DoubleSide, 
     }) 

 var mesh09=new THREE.Mesh(geometry05,materyal06);
//scene.add(mesh09);
mesh09.position.set(8,14,12);

var choco1 = mesh09.clone();
//scene.add(choco1);
choco1.position.set(-8,14,12);

var choco2 = mesh09.clone();
///scene.add(choco2);
choco2.position.set(0,14,6);

var choco3 = mesh09.clone();
//scene.add(choco3);
choco3.position.set(0,14,13);





   const pan = new THREE.Group();
  pan.add(mesh12,mesh09,choco1,choco2,choco3);
  pan.position.set(x, y, z);

  return pan;
}
