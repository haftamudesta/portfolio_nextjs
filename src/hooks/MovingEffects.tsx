import {useCanvas} from "./useCanvas"
import {useRef,useCallback} from "react"
class MovingParticles{
        x:number;
        y:number;

        speed:{x:number,y:number}

        radius:number;
        color:string;
        constructor(ctx:CanvasRenderingContext2D){
                this.x=Math.random()*ctx.canvas.width,
                this.y=Math.random()*ctx.canvas.height,
                this.speed={
                        x:(Math.random()-0.5)*2,
                        y:(Math.random()-0.5)*2
                }
                this.radius=Math.random()*1.5 +0.5
                this.color=`rgba(${Math.random()*100 +155},${Math.random()*100 +155},${Math.random()*100 +155},0.5)`
        }
        update(ctx:CanvasRenderingContext2D){
                this.x +=this.speed.x;
                this.y +=this.speed.y;
        // Bounce off the edges of the canvas
        if (this.x < 0 || this.x > ctx.canvas.width) this.speed.x *= -1;
        if (this.y < 0 || this.y > ctx.canvas.height) this.speed.y *= -1;
        }
        draw(ctx:CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // Draw a circle
                ctx.fillStyle = this.color;
                ctx.fill();
                //ctx.closePath();
            }
}
export function MovingParticleCanvas(){
        const particles=useRef<MovingParticles[]>([])
        const draw=useCallback(
          (ctx:CanvasRenderingContext2D) => {
            if(particles.current.length===0){
                particles.current=Array.from({length:100},()=>new MovingParticles(ctx))
            }
            ctx.fillStyle='rgba(10,10,10,0.05)';
            ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
            particles.current.forEach(particle => {
                particle.update(ctx)
                particle.draw(ctx)
                });

                ctx.strokeStyle='rgba(255,255,255,0.02)'
                for(let i=0;i<particles.current.length;i++){
                        for(let j=0;j<particles.current.length;j++){
                                const dx=particles.current[i].x-particles.current[j].x;
                                const dy=particles.current[i].y-particles.current[j].y;
                                const distance=Math.sqrt(dx*dx+dy*dy)
                                if(distance<100){
                                        ctx.beginPath();
                                        ctx.moveTo(particles.current[i].x,particles.current[i].y);
                                        ctx.lineTo(particles.current[j].x,particles.current[j].y);
                                        ctx.stroke();
                                }
                        }
                }
            
          },[]) 
          const canvasRef=useCanvas(draw);
          return(
                <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-event-none opacity-20"
                 />
          )   
}