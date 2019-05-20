// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites;
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false
    }

});


Engine.run(engine);
Render.run(render);

let groundstick=Bodies.rectangle(10, 600, 2000, 10,{isStatic: true});
let wreckBall=Bodies.circle(300, 500, 80, {density: 1000000000000, frictionAir: 0.0});
let roof = Bodies.polygon(500, 300, 3, 130);
let stack = Composites.stack(400, 400, 5, 5, 0, 0, function(x, y) {
        return Bodies.rectangle(x, y, 40, 40, {density: 1});
    });
let constraint = Constraint.create({
       pointA: { x: 300, y: 100},
       bodyB: wreckBall
   });
// let stackContraint = Constraint.create({
//       pointA: { x: 400, y: 500},
//       bodyB: stack
//   });
Matter.Body.rotate(roof, -(3.14/6))
World.add(engine.world, [roof, constraint, stack, wreckBall, groundstick]);


let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
