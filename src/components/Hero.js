import React from 'react';
import Me from '../img/me.jpg';
import * as THREE from 'three';
import OkeCanvas from "./OkeCanvas";
class Hero extends React.Component{

    webBox(){
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor('0xffccdd',0);
        renderer.setClearAlpha(0);
        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 3, 3, 3 ,2,4,5);
        var material = new THREE.MeshBasicMaterial( { color: '#a98117' } );
        var scene = new THREE.Scene();
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
        animate();

        window.addEventListener('resize', ()=>{renderer.setSize( window.innerWidth, window.innerHeight);
        camera.aspect= window.innerWidth/ window.innerHeight;
        camera.updateProjectionMatrix();
        });
    }
    componentDidMount() {
        // this.webBox();
    }
    render() {
        return (
            <header
                // ref={ref=>(this.mount=ref)}
                     className='hero'>
                <OkeCanvas/>


                <div className='hero-center'>
                   <img src={Me} className='me'/>
                   <div className='hero-text'>
                       <h2>Hey! It's Okechukwu Omeh
                           <span>I am a self taught Web and Mobile developer and I'd love to solve your Problems</span>
                       </h2>
                       <button className='highBtn'>Hire Me</button>
                   </div>
               </div>


            </header>
        );
    }


};

export default Hero;