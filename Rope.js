class Rope {
    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX = offsetX
      this.offsetY = offsetY
      
      var options = {
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
      }
      //this.body = Bodies.circle(x, y,10, options);
     // this.radius = 10;
     // World.add(world, this.body)

    this.rope = Constraint.create(options)
    World.add(world,this.rope)
      }
    display(){

      
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    var bobx = pointA.x
    var boby = pointA.y
    var roofx = pointB.x + this.offsetX
    var roofy = pointB.y + this.offsetY
    push()
    strokeWeight(3)
    fill('white')
    line(bobx , boby , roofx, roofy)
    pop()
    }
}
  