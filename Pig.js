class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // visiblity of pig is full
    this.visiblity = 255;
  }
display(){
console.log(this.body.speed)
// for vanishing effect
if(this.body.speed<3){
  super.display();
}else{
  // for removing the body from world
World.remove(world,this.body)
//visiblity gets decreased
push()
this.visiblity = this.visiblity-5;
tint(255,this.visiblity)
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop()
}


}
};