// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
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

let groundstick=Bodies.rectangle(10, 600, 2000, 10,{isStatic: true})
let wreckBall=Bodies.circle(300, 300, 80)
let constraint = Constraint.create({
       pointA: { x: 150, y: 100},
       bodyB: wreckBall
   });
let stack = Composites.stack(400, 30, 5, 5, 0, 0, function(x, y) {
        return Bodies.rectangle(x, y, 40, 40);
    });
World.add(engine.world, [constraint, stack, wreckBall, groundstick]);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
