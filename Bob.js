class Bob{
     constructor(x,y,radius){
          var options={
               'isStatic':true,
               'friction':0.5,
               'density':1.2
          }
          this.Body=Bodies.circle(x,y,radius,options)
          
          this.radius=radius;
          World.add(world,this.Body)
     }

     display(){
          var position = this.Body.position
          push ()
          translate (position.x,position.y)
          rectMode(CENTER)
          fill ("pink")
          ellipse(0,0,this.radius,this.radius)
          pop ()
     }
}