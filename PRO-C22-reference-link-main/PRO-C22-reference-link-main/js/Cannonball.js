class Cannonball
{
    constructor(x, y)
    {
        this.xPosition = x;
        this.yPosition = y;
        this.radius = 30;

        var cannonball_options = 
        {
            isStatic: true
        }
        this.cannonballImage = loadImage("./assets/cannonball.png");
        this.body = Bodies.circle(x, y, this.radius, cannonball_options);
        World.add(world, this.body);


    }

    display()
    {
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.cannonballImage, pos.x, pos.y, this.radius, this.radius ); 
        pop();
    }
}