class Ball{

    constructor(x,y,r){

        let options = {

            restitution: 0.95
        };

        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        World.add(world,this.body);
        
}

    show(){

        var pos = this.body.position
        push();
        ellipseMode(RADIUS)
        stroke(235);
        fill(127);
        ellipse(pos.x,pos.y,20);
        pop();

    }
}