import * as THREE from "./three.module.js";

export default function papelazX({ x, y, z }) {



//  papel
var  papelGeo = new THREE.PlaneGeometry(100, 60);
var  papelMat = new THREE.MeshLambertMaterial({
    color: 0x05eb,  
    side: THREE.DoubleSide,
    transparent: true,
   
});
var  papel = new THREE.Mesh( papelGeo,  papelMat);

//scene.add( papel);
 papel.position.set(0, 20, 0);

// bordes
var borGeo = new THREE.SphereGeometry(4, 16, 16);
var borMat = new THREE.MeshLambertMaterial({ color: 0xffd800 });
var bor = new THREE.Mesh(borGeo, borMat);
//scene.add(bor);
bor.position.set(-45, 0, 1);

var bor2 = bor.clone(); 
bor2.position.set(-45, 20, 1); 
//scene.add(bor2);

var bor3 = bor.clone(); 
bor3.position.set(-45, 42, 1); 
//scene.add(bor3);

var bor4 = bor.clone(); 
bor4.position.set(-25, 42, 1); 
//scene.add(bor4);

var bor5 = bor.clone(); 
bor5.position.set(-5, 42, 1); 
//scene.add(bor5);

var bor6 = bor.clone(); 
bor6.position.set(15, 42, 1); 
//scene.add(bor6);

var bor7 = bor.clone(); 
bor7.position.set(30, 42, 1); 
//scene.add(bor7);


var bor8 = bor.clone(); 
bor8.position.set(45, 42, 1); 
///scene.add(bor8);

var bor9 = bor.clone(); 
bor9.position.set(45, 20, 1); 
//scene.add(bor9);

var bor10 = bor.clone(); 
bor10.position.set(45, 0, 1); 
//scene.add(bor10);



// seccion deco
var decoGeo = new THREE.TorusGeometry(6, 4,42, 80);
var decoMat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
var deco = new THREE.Mesh(decoGeo, decoMat);
//scene.add(deco);
deco.position.set(-5, 24, 1);

var deco2 = deco.clone(); deco2.position.set(-4,12, 1); //scene.add(deco2);
var deco3 = deco.clone(); deco3.position.set(6, 24, 1); //scene.add(deco3);
var deco4 = deco.clone(); deco4.position.set(6, 12, 1); //scene.add(deco4);


////florea
var colganteGeo = new THREE.ConeGeometry(3, 4, 3);
var colganteMat = new THREE.MeshLambertMaterial({ color: 0x00b050, side: THREE.DoubleSide });
var colgante = new THREE.Mesh(colganteGeo, colganteMat);
//scene.add(colgante);
colgante.rotation.set(Math.PI, 0, 0);
colgante.position.set(-30, -5, 1);

var colgante2 = colgante.clone(); colgante2.position.set(-15, -5, 1); //scene.add(colgante2);
var colgante3 = colgante.clone(); colgante3.position.set(0, -5, 1); //scene.add(colgante3);
var colgante4 = colgante.clone(); colgante4.position.set(15, -5, 1); //scene.add(colgante4);
var colgante5 = colgante.clone(); colgante5.position.set(30, -5, 1); //scene.add(colgante5);

//  Cuerda 
var cuerdaGeo = new THREE.CylinderGeometry(1.5, 1.5, 110, 12);
var cuerdaMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });
var cuerda = new THREE.Mesh(cuerdaGeo, cuerdaMat);
//scene.add(cuerda);
cuerda.rotation.set(0, 0, Math.PI / 2);
cuerda.position.set(0, 54, 0);

// grupos

 var pica = new THREE.Group();
    pica.add(cuerda,colgante3,colgante,colgante2,colgante4,colgante4,colgante5,deco,deco2,deco3,deco4,
    bor,bor2,bor3,bor4,bor5,bor6,bor7,bor8,bor9,bor10,papel);
    //scene.add(pica);

    var pica2 = pica.clone();
    //scene.add(pica2);
   pica2.position.set(-110, -0, 1);

   
    var pica3 = pica.clone();
    //scene.add(pica3);
   pica3.position.set(110, -0, 1);

   const papelaz = new THREE.Group();
  papelaz.add(pica, pica2, pica3);
  papelaz.position.set(x, y, z);

  return papelaz;
}

