import * as THREE from "./three.module.js";

export default function calavera({ x, y, z }) {



 ///// calavera

var geometry05 = new THREE.SphereGeometry(3,19,13);

var materyal06 = new THREE.MeshBasicMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide, 
     }) 

 var mesh09=new THREE.Mesh(geometry05,materyal06);
//scene.add(mesh09);
mesh09.position.set(8,14,12);
mesh09.scale.set(5, 5, 5);

    ////pan

var geometry08 = new THREE.TorusGeometry(10,5,5);

var materyal08 = new THREE.MeshBasicMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide, 
     }) 

 var mesh12=new THREE.Mesh(geometry08,materyal08);
//scene.add(mesh12);
mesh12.position.set(4,4,12);
mesh12.rotation.set(33,0,0);


///// ojos

var geometry05 = new THREE.SphereGeometry(5,23,13);

var materyal06 = new THREE.MeshBasicMaterial({
        color:0x00000, side: THREE.DoubleSide, 
     }) 

 var mesh05=new THREE.Mesh(geometry05,materyal06);
//scene.add(mesh09);
mesh05.position.set(-2,14,6);

var choco1 = mesh05.clone();
//scene.add(choco1);
choco1.position.set(-3,14,16);


////dientes


var geometry04 = new THREE.BoxGeometry(2,6,4,4,6,20);

var materyal05 = new THREE.MeshBasicMaterial({
        color:0x0000000, side: THREE.DoubleSide, 
     }) 

 var mesh08=new THREE.Mesh(geometry04,materyal05);
//scene.add(mesh08);
mesh08.position.set(-9,4,15);

var di1 = mesh08.clone();
//scene.add(di1);
di1.position.set(-10,4,10);

var di2 = mesh08.clone();
//scene.add(di2);
di2.position.set(-8,4,5);



   const calavera = new THREE.Group();
  calavera.add(mesh08,mesh12,mesh09,di1,di2,choco1,mesh05);
  calavera.position.set(x, y, z);

  return calavera;
}

