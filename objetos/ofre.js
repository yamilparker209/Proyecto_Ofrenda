import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {



//Objetos 3D

var geometry02=new THREE.BoxGeometry(80,4,80);
var texture02=new THREE.TextureLoader().load("./Fotos/Piramide.jpg")
var material02=new THREE.MeshLambertMaterial({map:texture02});
var Piramide=new THREE.Mesh(geometry02,material02);
//scene.add(Piramide);
Piramide.position.set(0,2,-15);
Piramide.castShadow=true;

texture02.wrapS=THREE.RepeatWrapping;
texture02.wrapT=THREE.RepeatWrapping;
texture02.repeat.set(2,.2)

var geometry03=new THREE.BoxGeometry(80,.2,80);
var texture03=new THREE.TextureLoader().load("./Fotos/Piramide.jpg")
var material03=new THREE.MeshLambertMaterial({map:texture03});
var Piramide02=new THREE.Mesh(geometry03,material03);
//scene.add(Piramide02);
Piramide02.position.set(0,4.11,-15);
Piramide02.castShadow=true;

texture03.wrapS=THREE.RepeatWrapping;
texture03.wrapT=THREE.RepeatWrapping;
texture03.repeat.set(2,2)

var Piso01=new THREE.Group();
Piso01.add(Piramide,Piramide02);
//scene.add(Piso01);

var geometry04=new THREE.BoxGeometry(60,4,60);
var texture04=new THREE.TextureLoader().load("./Fotos/Piramide.jpg");
var material04=new THREE.MeshLambertMaterial({map:texture04});
var Piramide03=new THREE.Mesh(geometry04,material04);
//scene.add(Piramide03);
Piramide03.position.set(0,6,-15);
Piramide03.castShadow=true;

texture04.wrapS=THREE.RepeatWrapping;
texture04.wrapT=THREE.RepeatWrapping;
texture04.repeat.set(2,.2)

var geometry05=new THREE.BoxGeometry(60,.2,60);
var texture05=new THREE.TextureLoader().load("./Fotos/Piramide.jpg");
var material05=new THREE.MeshLambertMaterial({map:texture05});
var Piramide04=new THREE.Mesh(geometry05,material05);
//scene.add(Piramide04);
Piramide04.position.set(0,8.11,-15);
Piramide04.castShadow=true;

texture05.wrapS=THREE.RepeatWrapping;
texture05.wrapT=THREE.RepeatWrapping;
texture05.repeat.set(.8,2)

var Piso02=new THREE.Group();
Piso02.add(Piramide03,Piramide04);
//scene.add(Piso02)


var geometry06=new THREE.BoxGeometry(40,4,40);
var texture06=new THREE.TextureLoader().load("./Fotos/Piramide.jpg");
var material06=new THREE.MeshLambertMaterial({map:texture06});
var Piramide05=new THREE.Mesh(geometry06,material06);
//scene.add(Piramide05);
Piramide05.position.set(0,10,-15);
Piramide05.castShadow=true;

texture06.wrapS=THREE.RepeatWrapping;
texture06.wrapT=THREE.RepeatWrapping;
texture06.repeat.set(.8,.2)


var geometry07=new THREE.BoxGeometry(40,.2,40);
var texture07=new THREE.TextureLoader().load("./Fotos/Piramide.jpg");
var material07=new THREE.MeshLambertMaterial({map:texture07});
var Piramide06=new THREE.Mesh(geometry07,material07);
//scene.add(Piramide06);
Piramide06.position.set(0,12.11,-15);
Piramide06.castShadow=true;

texture06.wrapS=THREE.RepeatWrapping;
texture06.wrapT=THREE.RepeatWrapping;
texture06.repeat.set(.8,.2)

var Piso03=new THREE.Group();
Piso03.add(Piramide05,Piramide06);
//scene.add(Piso03)


var geometry08=new THREE.BoxGeometry(20,4,20);
var texture08=new THREE.TextureLoader().load("./Fotos/Piramide.jpg");
var material08=new THREE.MeshLambertMaterial({map:texture08});
var Piramide07=new THREE.Mesh(geometry08,material08);
//scene.add(Piramide07);
Piramide07.position.set(0,14,-15);
Piramide07.castShadow=true;

texture08.wrapS=THREE.RepeatWrapping;
texture08.wrapT=THREE.RepeatWrapping;
texture08.repeat.set(.8,.2)


var geometry09=new THREE.BoxGeometry(20,.2,20);
var texture09=new THREE.TextureLoader().load("./Fotos/Piramide.jpg");
var material09=new THREE.MeshLambertMaterial({map:texture09});
var Piramide08=new THREE.Mesh(geometry09,material09);
//scene.add(Piramide08);
Piramide08.position.set(0,16.11,-15);
Piramide08.castShadow=true;

texture09.wrapS=THREE.RepeatWrapping;
texture09.wrapT=THREE.RepeatWrapping;
texture09.repeat.set(.5,.5);

const ofre=  new THREE.Group();
ofre.add(Piramide,Piramide02,Piso01,Piso02,Piso03,Piramide03,Piramide04,Piramide05,Piramide06,Piramide07,Piramide08);
ofre.position.set(x,y,z);
return ofre;  

}
