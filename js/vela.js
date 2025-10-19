import * as  THREE from "./three.module.js";
export default function velaX({ x,y,z}) {




///cilindro 
var geometry07 = new THREE.CylinderGeometry(3,3,5,20);

var materyal08 = new THREE.MeshLambertMaterial({
        color:0xFFFFFFF, side: THREE.DoubleSide, 
     }) 

 var mesh11=new THREE.Mesh(geometry07,materyal08);
///scene.add(mesh11);
mesh11.position.set(0,4,12);

///FUEGO
var geometry8 = new THREE.CylinderGeometry(0.1,1,5,20);

var materyal9 = new THREE.MeshLambertMaterial({
        color:0xFF9700, side: THREE.DoubleSide, 
     }) 

 var mesh12=new THREE.Mesh(geometry8,materyal9);
///scene.add(mesh12);
mesh12.position.set(0,6,12);

const vela=  new THREE.Group();
vela.add(mesh11,mesh12);
vela.position.set(x,y,z);
return vela;  

}
