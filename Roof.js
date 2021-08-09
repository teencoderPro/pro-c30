class Roof{
     constructor(x,y,height,width){
          var options={
               isStatic:true
          }
          this.body = Bodies.rectangle(x,y,height,width,options)
          this.width=width;
          this.height=height;
          World.add(world,this.body)
     }
     display(){
          var pos = this.body.position
          rectMode(CENTER)
          
          rect(pos.x,pos.x,this.width,this.height)

     }
}