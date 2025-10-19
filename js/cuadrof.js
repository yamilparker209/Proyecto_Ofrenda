import * as THREE from "./three.module.js";

export default function cudrof({ x, y, z }) {



var Forma01 = new THREE.BoxGeometry(10,12,1);
var Color= new THREE.MeshLambertMaterial({
    color:0xff8c00, side:THREE.DoubleSide
})
var Cuadro01= new THREE.Mesh(Forma01,Color);
///scene.add(Cuadro01)
Cuadro01.position.set(0,6,0)
Cuadro01.rotation.set(-.25,0,0)

var Forma02=new THREE.BoxGeometry(2,7,1);
var Color02= new THREE.MeshLambertMaterial({
    color:0xff8c00, side:THREE.DoubleSide
})
var Pliegue= new THREE.Mesh(Forma02,Color02);
///scene.add(Pliegue)
Pliegue.position.set(0,3.5,-1)
Pliegue.rotation.set(.15,0,0)

//Plano
    var plano = new THREE.BoxGeometry(9,11,0);
    var textura1=new THREE.TextureLoader().load("./Fotos/chems.jpg");
    var material1=new THREE.MeshLambertMaterial({map:textura1});
    var mesh1 = new THREE.Mesh(plano,material1);
    //scene.add(mesh1);
    mesh1.receiveShadow = true;
    mesh1.rotation.set(-.25,0,0)
    mesh1.position.set(0,6,0.6)




   const cuadrof = new THREE.Group();
  cuadrof.add(mesh1,Pliegue,Cuadro01);
  cuadrof.position.set(x, y, z);

  return cuadrof;
}

