class Bob {
    constructor(x,y) {
      
      var options = {
         
      isStatic:false,
      restitution:1,
      friction:0,
      density:0.8

      }
      this.body = Bodies.circle(x, y,10, options);
      this.radius = 10;
      World.add(world, this.body)
    

    //this.rope = Constraint.create(options)
    //World.add(world,this.rope)
      }
    display(){
      
    var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      ellipse( 0, 0, this.radius*3, this.radius*3);
      pop();
    }
}
  