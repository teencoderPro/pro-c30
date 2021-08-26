class Roof{
     constructor(x,y,height,width){
          var options={
               isStatic:true
          }
          this.Body = Bodies.rectangle(x,y,height,width,options)
          this.width=width;
          this.height=height;
          World.add(world,this.Body)
     }
     display(){
          var pos = this.Body.position
          rectMode(CENTER)
          
          rect(pos.x,pos.x,this.width,this.height)

     }
}
