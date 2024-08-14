class Link {
  constructor(bodyA, bodyB) {
    var LastLink = bodyA.body.bodies.length - 2;
    this.link = Constraint.create({
      bodyA: bodyA.body.bodies[LastLink],
      pointA: {
        x: 0,
        y: 0
      },
      bodyB: bodyB,
      pointB: {
        x: 0,
        y: 0
      },
      length: -10,
      stiffness: 0.01
    });
    World.add(Tworld, this.link)
  }
  detach() {
    World.remove(Tworld, this.link);
  }
}