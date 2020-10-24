 class Bob{
    
        constructor(x,y,radius){
            var options={
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.2
            }
            this.radius=radius;
            this.body=Matter.Bodies.circle(x,y,radius,options);
            World.add(world,this.body);
           
            
    this.bob1 = createSprite(options);
    World.add(world,this.bob1);

    this.bob2 = createSprite(options);
    World.add(world,this.bob2);

    this.bob3 = createSprite(options);
    World.add(world,this.bob3);

    this.bob4 = createSprite(options);
    World.add(world,this.bob4);

    this.bob5 = createSprite(options);
    World.add(world,this.bob5);

        }
       display(){
           var pos =this.body.position;
           ellipseMode(CENTER);
           fill("purple");
           
           ellipse(pos.x,pos.y,this.radius);
       }
    }
    