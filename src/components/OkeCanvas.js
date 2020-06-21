import React, {Component} from 'react';
import PureCanvas from "./PureCanvas";

class OkeCanvas extends Component {
    state ={
        ww : window.innerWidth,
        hh : window.innerHeight,
        num: 10,
    }


    boxAnime(){
       let ctx  = this.canvas.getContext('2d');
       const w = this.canvas.width;
       const h = this.canvas.height;
       let maxR = 40;
       let maxW = 60;
       let maxH = 60;
       // let minR = 6;
       var canvas = this.canvas;
       let mouse = {
           x: undefined,
           y: undefined,
       };
       let num  = this.state.num;
window.addEventListener('resize',function () {
   init();
});
       canvas.addEventListener('mousemove', function (e) {
           mouse.x  = e.x;
           mouse.y = e.y;
       });

             let colors = ['#f2297d','#5530a4','#0ba6d4',
                 '#147dd4','#f9b731','#0c855c'];
            function Circle(x,y,r,dx,dy) {
                this.x = x;
                this.y = y;
                this.r = r;
                this.dy =dy;
                this.dx = dx;
                this.minR = r;
                this.color =colors[Math.floor(Math.random() * colors.length)];
                this.drawCircle = function () {
                    ctx.beginPath();
                    ctx.fillStyle = this.color;
                    ctx.arc(this.x , this.y  ,this.r,Math.PI * 180,0);
                    ctx.fill();
                    ctx.closePath();
                };

                this.update = function () {
                    if (this.x + this.r > w || this.x - this.r < 0 ){
                        this.dx = -this.dx;
                    }
                    if (this.y + this.r > w || this.y - this.r < 0){
                        this.dy = -this.dy;
                    }
                    this.x += this.dx;
                    this.y += this.dy;
                    // let origR = this.r;
                    if (mouse.x - this.x  <50 && mouse.x - this.x   >-50 && mouse.y - this.y   <50 && mouse.y - this.y   >-50  ){
                        if (this.r<maxR){
                            this.r+=1;
                        }
                    }

                    else if (this.r >this.minR){
                        this.r-= 1;
                    }
                    this.drawCircle();
                    // this.drawRect();
                }
            }
        function Rect(x,y,dx,dy,width,height) {
            this.x = x;
            this.y = y;
            this.dy =dy;
            this.dx = dx;
            this.minW = width;
            this.minH = height;
            this.w = width;
            this.h =height;
            this.color =colors[Math.floor(Math.random() * colors.length)];
            
            this.drawRect = function () {
                ctx.beginPath();
                // ctx.fillStyle = this.color;
                // ctx.strokeStyle = this.color;
                ctx.strokeRect(this.x,this.y,this.w,this.h);
                // ctx.fillRect(this.x,this.y,this.w,this.h);
                ctx.strokeStyle = this.color;
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            this.update = function () {
                if (this.x + this.w > w || this.x - this.w < 0 ){
                    this.dx = -this.dx;
                }
                if (this.y + this.h > w || this.y - this.h < 0){
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;
                // let origR = this.r;
                if (mouse.x - this.x  <50 && mouse.x - this.x   >-50 && mouse.y - this.y   <50 && mouse.y - this.y   >-50  ){
                    if (this.w<maxW){
                        this.w+=1;
                    }
                    if (this.h<maxH){
                        this.h+=1
                    }
                }

                else if (this.w >this.minW || this.h>this.minH){
                    this.w-= 1;
                    this.h-=1;
                }
                this.drawRect();
            }
        }
            // let circle =new Circle(Math.random() * 1000,Math.random() * 1000,77,Math.random() - 0.5,Math.random() - 0.5);
            var circleArr = [];
            var rects = [];

            // console.log(circleArr);
        function init() {
            circleArr = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            for (let i = 0; i<num;i++){
                let x = Math.random() * w;
                let dx =  (Math.random() -0.5) * 8;
                let dy = (Math.random() -0.5) * 8;
                let y = Math.random() * h;
                let r = Math.random() * 5 + 1;
                circleArr.push(new Circle(x,y,r,dx,dy))
            }
        }

        function inits() {

            rects = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            for (let i = 0; i<num;i++){
                let x = Math.random() * w;
                let dx =  (Math.random() -0.5) * 8;
                let dy = (Math.random() -0.5) * 8;
                let width = Math.random() * 10 + 1;
                let height = Math.random() * 10 + 1;
                let y = Math.random() * h;
                rects.push(new Rect(x,y,dx,dy,width,width))
            }
        }

            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0,0,w,h);
               for (let i = 0;i <circleArr.length;i++){
                   circleArr[i].update();;
                   // console.log("hello")
               }
               for (let i = 0; i<rects.length;i++){
                   rects[i].update();
               }
            }
            animate();
        init();
        inits();
        console.log(rects);
        // }

    }


    componentDidMount() {
        let ww = this.state.ww;
        let hh = this.state.hh;
        let phone = window.matchMedia("(max-width:37.5em)");
        let tabPort = window.matchMedia("(max-width:56.5em)");
        let tabLand= window.matchMedia("(max-width:75em)");
            if (phone.matches){
                this.setState({
                    num: 20,
                })

            }
            if (tabPort.matches){
                this.setState({
                    num: 40})

            }
            if (tabLand.matches){
                this.setState({
                    num: 55,
                })

            }
        this.boxAnime();
    }

    render() {



        return (
            <div>
                <canvas style={{position: 'relative', margin: '0 auto'}} id='canvas' ref={(ref)=>this.canvas = ref} width={this.state.ww} height={this.state.hh}>

                </canvas>

            </div>
        );
    }
}

export default OkeCanvas;