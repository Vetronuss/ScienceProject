var selection = "";
var shown = selection
var numElect = 5;
var elecText = "a stable subatomic particle with a charge of negative electricity, found in all atoms and acting as the primary carrier of electricity in solids.";
var protText = "a stable subatomic particle occurring in all atomic nuclei, with a positive electric charge equal in magnitude to that of an electron, but of opposite sign.";
var nuetText = "a subatomic particle of about the same mass as a proton but without an electric charge, present in all atomic nuclei except those of ordinary hydrogen.";
var nuclText = "The atomic nucleus is the small, dense region consisting of protons and neutrons at the center of an atom, discovered in 1911 by Ernest Rutherford based on the 1909 Geiger–Marsden gold foil experiment.";
var symbolText = "Chemical symbols are the abbreviations used in chemistry for chemical elements, functional groups and chemical compounds. Element symbols for chemical elements normally consist of one or two letters from the Latin alphabet and are written with the first letter capitalised.";
var elementText = "In chemistry, an element is a pure substance consisting only of atoms that all have the same numbers of protons in their nuclei. Unlike chemical compounds, chemical elements cannot be broken down into simpler substances by any chemical reaction."
var atomMassText = "the mass of an atom of a chemical element expressed in atomic mass units. It is approximately equivalent to the number of protons and neutrons in the atom (the mass number) or to the average number allowing for the relative abundances of different isotopes."
var atomNumText = "the number of protons in the nucleus of an atom, which determines the chemical properties of an element and its place in the periodic table."
var infoTxt = "Click on part of the atom or element to learn more about it.";
var atomChargeText = "In an atom of matter, an electrical charge occurs whenever the number of protons in the nucleus differs from the number of electrons surrounding that nucleus. If there are more electrons than protons, the atom has a negative charge. If there are fewer electrons than protons, the atom has a positive charge.";
var massNumText = "The mass number, also called atomic mass number or nucleon number, is the total number of protons and neutrons in an atomic nucleus. It is approximately equal to the atomic mass of the atom expressed in atomic mass units.";
var infoText = "This science project was made 100% from scratch using the javascript coding language and the p5.js library. It covers the topic of atomic structure which includes atoms, protons, neutrons, electrons, atomic number, mass number, isotopes and atomic mass.\n\nThis project was made by Cooper Lebor\n\nTo navigate the project use the mouse to click on certain parts of the atom or certain vocab terms in the element, you can also use the slider displayed on the bottom right of the screen to change the amount of electrons present in the atom.";
var nuclImg

function preload()
{
  nuclImg = loadImage('img/Nucleus.png');
}
var joke;
var p1;
var p2;
var electSlide 
function setup() {
  squareCanvas();
  console.log(width)
  p1 = createVector(0,0)
  p2 = createVector(0,0)
  electSlide = createSlider(1,10,5,1);
  electSlide.position(30*width/789,265*2.5*width/789)
  electSlide.size(160*(width/481))
}


function draw() {
  
  numElect = electSlide.value()
  if (key == 'a')
  {
    p1 = createVector(mouseX,mouseY)
    key = NaN;
  }
  if (key == 's')
  {
    p2 = createVector(mouseX-p1.x,mouseY-p1.y);
    key = NaN;
  }
  
  
  
  background(10);
  push()
  stroke(255)
  fill(255)
  //text(mouseX+", " + mouseY,width-100,height-100)
  pop();
  
  console.log(p1.x+","+p1.y+","+p2.x+","+p2.y);
  
  
  if (shown!="")
  {
    electSlide.hide();
  }else
  {
    electSlide.show();
  }
  
  
  if (shown!= "")
  {
    push();
  
    
    stroke(100);
    fill(50)
    strokeWeight(4*width/789)
    rect(100*width/789,100*width/789,width-200*width/789,height-200*width/789)
    fill(255)
    line(100*width/789,200*width/789,width-100*width/789,200*width/789)
    textSize(40*width/789)
    textAlign(CENTER,CENTER)
  
    stroke(0)
    text(shown,width/2,height/5.5)
    textAlign(LEFT)
    
    textSize(20*width/789)
    
    switch(shown){
      case "electron":
        text("Nerd:\n\n"+elecText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThese particles make up the outer layer of the atom and are negativly charged.",110*width/789,455*width/789,231*width/789);
        electron(width/2,height/1.8,150*width/789,true)
        break;
        case "proton":
        text("Nerd:\n\n"+protText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nA proton is found in the nucleus of every atom. The particle has a positive electrical charge, equal and opposite to that of the electron.",110*width/789,455*width/789,231*width/789);
        proton(width/2,height/1.8,150*width/789,true)
        break;
        case "nuetron":
        text("Nerd:\n\n"+nuetText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThese particles are found in the nucleus and have a nuetral charge.",110*width/789,455*width/789,231*width/789);
        nuetron(width/2,height/1.8,150*width/789,true)
        break;
        case "nucleus":
        text("Nerd:\n\n"+nuclText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThe middle of the atom containing both protons and nuetrons.",110*width/789,455*width/789,231*width/789);
        image(nuclImg,220*(width/481),239*(width/481),170*(width/481),170*(width/481));
        break;
        case "Atomic Symbol":
        text("Nerd:\n\n"+symbolText,110*width/789,240*width/789,width-220);
        text("\nSimple:\n\nThe abbreviation for a element.",110*width/789,455*width/789,231*width/789);
        break;
        case "Atomic Number":
        text("Nerd:\n\n"+atomNumText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThe number of protons in an atom.",110*width/789,455*width/789,231*width/789);
        break;
        case "Atomic Mass":
        text("Nerd:\n\n"+atomMassText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThe mass of an atom.",110*width/789,455*width/789,231*width/789);
        break;
        case "Element":
        text("Nerd:\n\n"+elementText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThe name given to a group of atoms that express certain properties",110*width/789,455*width/789,231*width/789);
        break;
        case "Atomic Charge":
        text("Nerd:\n\n"+atomChargeText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nThe amount of electrons subtracted from the amount of protons to represent the charge of an atom.",110*width/789,455*width/789,231*width/789);
        break;
        case "Mass Number":
        text("Nerd:\n\n"+massNumText,110*width/789,240*width/789,width-220*width/789);
        text("\nSimple:\n\nProtons+nuetrons",110*width/789,455*width/789,231*width/789);
        break;
        case "info":
        text(infoText,110*width/789,240*width/789,width-220*width/789)
        break;
        case "Joke":
        text(joke,110*width/789,240*width/789,width-220*width/789)
        break;
        
    }
    
    pop();
    return;
  }
  push();
  fill(100)
  stroke(110)
  circle(width-(50*(width/833)),width/2,50*(width/833));
  textSize(35*(width/833));
  if (selection == "info")
  {
    circle(width-(50*(width/833)),width/2,60*(width/833));
    textSize(45*(width/833));
  }
  
  
  
  
  
  
  textFont('Georgia');
  fill(255)
  stroke(255)
  textAlign(CENTER,CENTER)
  text("i",width-(50*(width/833)),width/2)
  
  pop();
  
  
  
  if (distance(mouseX,mouseY,width-(50*(width/833)),width/2)<=25*(width/833))
  {
    selection = "info"
  }else if (selection == "info")
  {
    selection = "";
  }
  
  
  //top joke button
  push();
  rectMode(CENTER)
  strokeWeight(4*(width/833))
  fill(100)
  stroke(140)
  rect(width/2,50*(width/833),200*(width/833),60*(width/833));
  textAlign(CENTER,CENTER)
  textSize(27*(width/833))
  strokeWeight(2*(width/833))
  stroke('blue')
  fill(0)
  if (collidePointRect(mouseX,mouseY,316*(width/833),19*(width/833),201*(width/833),59*(width/833) ))
  {
    selection = "Joke";
    textSize(30*(width/833))
  }else if (selection == "Joke")
  {
    selection = "";
  }
  text("Science Joke!",width/2,50*(width/833))
  pop();
  
  
  
  //bottom left instructions
  push();
  textAlign(LEFT,BOTTOM);
  textSize(15*width/481);
  stroke(63,129,240);
  fill(255);
  text(infoTxt,0+10*(width/481),height-10*(width/481),width);
  pop();
  
  
  
  //draw central atom
  proton(width/2,height/2,30*width/789)
  proton(width/2-30*width/789,height/2-30*width/789,30*width/789)
  proton(width/2+30*width/789,height/2-30*width/789,30*width/789)
  proton(width/2+30*width/789,height/2+30*width/789,30*width/789)
  proton(width/2-30*width/789,height/2+30*width/789,30*width/789)
  nuetron(width/2+30*width/789,height/2,30*width/789)
  nuetron(width/2,height/2+30*width/789,30*width/789)
  nuetron(width/2-30*width/789,height/2,30*width/789)
  nuetron(width/2,height/2-30*width/789,30*width/789)
  push();
  stroke(255,128);
  strokeWeight(3*width/789)
  noFill();
  
  if (distance(mouseX,mouseY,width/2,height/2)<130/2*width/789&&distance(mouseX,mouseY,width/2,height/2)>110/2*width/789)
  {
    selection = "nucleus"
    
  }
  if (selection == "nucleus")
  {
    strokeWeight(5*width/789)
  }
  circle(width/2,height/2,120*width/789)//nucleus
  strokeWeight(3*width/789)
  stroke(255,90)
  circle(width/2,height/2,260*width/789)
  pop();
  rot = frameCount/500
  for (var i = 0+rot; i < TWO_PI+rot; i+=TWO_PI/numElect)
  {
    if (selection == "electron"){
    electron(width/2+cos(i)*130*width/789,height/2+sin(i)*130*width/789,30*1.3*width/789)}else
    {
      electron(width/2+cos(i)*130*width/789,height/2+sin(i)*130*width/789,30*width/789)
    }
  }
  if (distance(mouseX,mouseY,width/2,height/2)<140*width/789&&distance(mouseX,mouseY,width/2,height/2)>110*width/789)
  {
    selection = "electron";
  }
  
  push();
  fill(50)
  stroke(140)
  strokeWeight(4*width/789)
  rect(20*width/789,220*2.5*width/789,180*(width/481),100*(width/481));
  
  //Bottom right box
  rect(width-(20*width/789)-(180*(width/481)),250*2.5*width/789,180*(width/481),21.8*2.5*(width/481));
  fill(100)
  rect(20*width/789,20*width/789,150*1.5*width/789,200*1.5*width/789)
  stroke('crimson')
  strokeWeight(3*1.5*width/789)
  fill(0)
  textSize(40*1.5*width/789)
  
  if (true)
  {
    push();
    noFill();
    stroke('red')
    rect(p1.x,p1.y,p2.x,p2.y);
    pop();
    //console.log(p1.x+","+p1.y+","+p2.x+","+p2.y)
  }
  
  
  if (collidePointRect(mouseX,mouseY,33*width/789,39*width/789,128*width/789,75*width/789 ))
  {
    selection = "Atomic Number";
    textSize(50*1.5*width/789)
  }
  text(5,30*1.5*width/789,70*1.5*width/789)
  textSize(60*1.5*width/789)
  if (collidePointRect(mouseX,mouseY,33*width/789,118*width/789,132*width/789,85*width/789))
  {
    selection = "Atomic Symbol";
    textSize(70*1.5*width/789)
  }
  text('B',30*1.5*width/789,130*1.5*width/789)
  textSize(30*1.5*width/789)
  if (collidePointRect(mouseX,mouseY,31*width/789,210*width/789,178*width/789,58*width/789 ))
  {
    selection = "Element";
    textSize(40*1.5*width/789)
  }
  text('Boron',30*1.5*width/789,170*1.5*width/789)
  textSize(26*1.5*width/789)
   if (collidePointRect(mouseX,mouseY,28*width/789,263*width/789,151*width/789,49*width/789))
  {
    selection = "Atomic Mass";
    textSize(30*1.5*width/789)
  }
  text(10.81,30*1.5*width/789,200*1.5*width/789)
  pop();
  push();
  textAlign(LEFT,TOP);
  stroke(0)
  strokeWeight(2*(width/481))
  fill(255)
  textSize(16*(width/481))
  text("Number of electrons: "+electSlide.value(),30*width/789,253*2.5*width/789)
  textSize(20*(width/481))
  stroke(0)
  strokeWeight(2)
  fill(255)
  
  if (selection == "Atomic Charge")
  {
    textSize(22.3*(width/481))
  }
  
  var atomCharg = 5-numElect;
  text("Atomic Charge: " + atomCharg,30*width/789,225*2.5*width/789)
  textSize(20*(width/481))
  if (selection == "Mass Number")
  {
    textSize(22.3*(width/481));
  }
  text("Mass Number: 9",width-(20*width/789)-(170*(width/481)),260*2.5*width/789)
  pop();
  
  if (collidePointRect(mouseX,mouseY,293*(width/481),389*(width/481),168*(width/481),40*(width/481)))
  {
    selection = "Mass Number";
  }else if (selection == "Mass Number")
  {
    selection = "";
  }
  
  if (collidePointRect(mouseX,mouseY,
11*(width/481),336*(width/481),180*(width/481),29*(width/481)))
  {
    selection = "Atomic Charge";
  }else if (selection == "Atomic Charge")
  {
    selection = "";
  }
  
  if (selection == "")
  {
    return
  }
  
  push();
  
  stroke(100);
  fill(50)
  strokeWeight(4*width/789)
  rect(width-250*width/789,10*width/789,240*width/789,70*width/789)
  fill(255)
  stroke(0)
  textAlign(CENTER,CENTER)
  textSize(30*width/789)
  text(selection,((width-250*width/789)+(width-250*width/789+240*width/789))/2,45*width/789)
  pop();
  
  
    
}


function proton(x,y,size,f=false)
{
  if (distance(mouseX,mouseY,x,y)<size/2&&!f)
  {
    selection = "proton";
    size*=1.3
  }
  push();
  fill('red');
  circle(x,y,size);
  strokeWeight(4);
  strokeCap(SQUARE);
  line(x+size/3,y,x-size/3,y);
  line(x,y+size/3,x,y-size/3);
  pop();
  
}



function nuetron(x,y,size,f=false)
{
  if (distance(mouseX,mouseY,x,y)<size/2&&!f)
  {
    selection = "nuetron";
    size*=1.3
  }
  push();
  fill('gray');
  circle(x,y,size);
  strokeWeight(4);
  strokeCap(SQUARE);
  noFill();
  circle(x,y,size/2)
  
  pop();
  
}

function electron(x,y,size,f=false)
{
  push();
  fill(98,98,255);
  circle(x,y,size);
  strokeWeight(4);
  strokeCap(SQUARE);
  line(x+size/3,y,x-size/3,y);
  
  pop();
}
  
  
  
  
  
function mouseClicked() {
  
  joke = random(jokes);
  if (shown == "")
  {
    shown = selection;
  }else
  {
    shown = "";
  }
}
  
  
  
  
var jokes = [" Why is it so hard to wake up in the morning? That’s because of Newton’s First Law – A body at rest wants to stay at rest."," Light travels faster than sound. That’s why some people appear brighter until you hear them speak."," Why can you never trust atoms? Because they make up everything!"," I was reading a book on helium. I couldn’t put it down."," What did one tectonic plate say when he bumped into the other? Sorry, my fault!"," What is a tornado’s favorite game to play? Twister!"," Meteorologists weigh rainbows and found out they are ‘Pretty Light’!"," Two chemists go into a bar. The first one says “I think I’ll have an H2O.” The second one says “I think I’ll have an H2O too” — and he died."," What did the biologist wear to impress his date? Designer genes"," What did the Limestone say to the geologist? Don’t take me for granite!"," A physicist, a biologist, and a chemist were going to the ocean for the first time.\n The physicist saw the ocean and was fascinated by the waves. He said he wanted to do some research on the fluid dynamics of the waves and walked into the ocean. Obviously he drowned and never returned.\n The biologist said he wanted to do research on the flora and fauna inside the ocean and walked inside the ocean. He, too, never returned.\n The chemist waited for a long time and afterwards, wrote the observation, “The physicist and the biologist are soluble in ocean water.”"," Neurons that fire together, wire together!"," Why is the ocean so salty? Because land never waves back at it!"," What type of fish is made out of 2 sodium atoms? 2Na!"," How to cut a sea into half? With a see saw!"," A frog telephones the Psychic Hotline.\nHis Personal Psychic Advisor tells him, “You are going to meet a beautiful young girl who will want to know everything about you.”\n The frog is thrilled! “This is great! Will I meet her at a party?”\n “No,” says his advisor, “in her biology class.”"," According to chemistry, Alcohol is a solution!"," If the Silver Surfer and Iron Man teamed up, what would that make them? Alloys","  What did the stamen say to the pistil? I like your style!"," How can you tell if a tree is a Dogwood Tree? By its bark!"," What is the fastest way to determine the sex of a chromosome? Pull down its genes."," What do you call an educated tube? A graduated cylinder!","  A photon checks into a hotel and is asked if he needs any help with his luggage. He says, “No, I’m traveling light.”"," What do you call an accountant for the biology department? A buy-ologist."," What did the tree wear to the pool party? Swimming Trunks!"," A neutron walks into a bar and asks how much for a beer. The bartender replies, “For you, no charge.”"," No matter how popular antibiotics get, they will never get viral!"," What did the science book say to the math book? You have got problems!"," What do you call it when a biologist takes a photo of herself? A cell-fie"," What kind of tree can be placed into your hand? A palm tree"," Why was bee’s hair sticky? Because it used a honey-comb!"," Did you hear oxygen and magnesium got together? OMg!"," Why did the cloud date the fog? Because he was so down to Earth!"," What did the scientist say to the chemist whose lab smelled like eggs? Sorry for your sulfering."," Why are chemists excellent at solving problems? They have all the solutions."," Why did the firefly get bad grades at school? Because it wasn’t very bright!"," A dung beetle walks into a bar and says, “Excuse me, is this stool taken?”"," What was the name of the first Electricity Detective? Sherlock Ohms."," How do we know Saturn was married more than once? Because it has too many rings!"," What did the volcano say to his beautiful wife? I lava you"," Why were oxygen, hydrogen, and carbon wearing suits and ties? They were a formyl group."," Want to hear a chemistry pun? I am in my element!"," What should you do when no one laughs at your? Keep trying until you get a ‘reaction’."," How do geologists ask each other out? They say, “Are you a carbon sample? Because I’d love to date you.”"," What type of a dog do chemists own? A lab!"," How did the astronaut serve dinner in outer space? On flying saucers!"," Biologists have just found the gene for shyness. They would have found it earlier, but it was hiding behind two other genes."," What did the Earth say to the other planets? You guys have no life!"," How do you stop an astronaut’s baby from crying? You rocket!"," How do trees surf on the internet? They log in!"," What’s a pirate’s favorite element? Aaaaargon"," If you buy one proton and one electron, then you can get a proton free of charge!"," What did the positive charge say to the negative charge after their date? We have potential!"," Why do plants hate algebra? It gives them square roots."," What did one cell tell his sister cell when she stepped on his toe? Ouch! That’s mitosis!"," What kinds of books do planets usually like to read? Comet books"," Where do astronauts leave their spaceships? At the parking meteors!"," What was the first animal to go into space? The cow that jumped over the moon!"," What is the snake’s favorite subject? Hiss-Tory!"," Why did Mickey Mouse go to space? To see Pluto!"," Why don’t aliens eat clowns? Because they taste funny!"," Which type of books are the hardest to get through? Friction Books"," Why don’t magnets have mates? Because they are polar opposites!"," What does blood say when it’s trying to be optimistic? B Positive."," What is Research? Research is what you are doing, when you don’t know what you are doing!"," How do you throw a party in space? You planet."," What kind of music do planets dance to? Nep-tunes!"," What did one ion say to another? I’ve got my ion you."," What is an Astronaut’s favorite key on the keyboard? Space Bar"," What does a skeleton say before he eats? Bone appetite!"," How much room does fungi need in order to grow? As mushroom as possible!"," Why did the germ cross the microscope? To get to the other slide!"," What is a chemist’s favourite carnival ride? A Ferrous Wheel"," Did you hear about the new restaurant on the moon? The food is great but there is no atmosphere!"," Where did the chemist have his lunch? On a periodic table."," What did the thermometer tell the graduated cylinder?\n You may have graduated, but I have more degrees."," What runs faster: Hot or Cold? Hot, because you can catch the cold!"," What has a bed that you can’t sleep in? A river"," How did Ben Franklin feel after discovering electricity? Shocked!"," Gold is the best element because it’s AU-some."," Where does criminal light end up? In prism."," I wanted to be an astronaut as a kid. But my parents said ‘Sky is the limit’."," How does the nucleus communicate with the ribosomes? With the cellphone!"," What sound does a sub-atomic duck make? A Quark."," What do you call an acid with an attitude? A-mean-o Acid"," What is a rocks favorite cereal to eat? Coco-pebbles!"," How do Scientists freshen their breath? With experi-mints!"," Did you hear oxygen went on a date with potassium? It went OK!"," What did the Atlantic Ocean say to the Pacific Ocean? Nothing, Oceans don’t talk… they just WAVE!"," Why did the white bear dissolve in water? Because it was polar!"," What do computers like to eat? Chips!"," I make horrible science puns, but only periodically!"," What did the helpless T cell say when facing the infection? Is there antibody out there?"," What element derives from a Norse god? Thorium."," What can run, but cannot walk? Water"," Carbon and hydrogen went on a date. I heard they really bonded!"," Why did the scientist take out his doorbell? He wanted to win the no-bell prize!"," The proton is not speaking to the other proton; he’s a mad atom!"," What do you call a snake that is 3.14 m long? A Pi-thon!"," What did one hungry plant say to another? I could use a light snack!"," Why did the chemist hang up periodic table posters everywhere? It made him feel like he was in his element."," If you’re not part of the solution—you’re part of the precipitate."," Why didn’t the skeleton go to the ball? Because he has no-body to go with!"," What do trees like to drink? Root-beer!"," What do protons and life coaches have in common? They know how to stay positive!"," What do you call a clown in jail? A Silicon!"," Why didn’t the skeleton cross the road? Because it din’t have the guts!"," They call me DJ Enzyme because I am always breaking it down!"," What’s the difference between a dog and a marine biologist? One wags a tail and the other tags a whale."," Did you hear about the famous microbiologist who traveled to 40 different countries and learned to speak seven languages? He was a man of many cultures."," What are the primary elements of a sense of humor?\n Sulfur, Argon, Calcium, and Samarium. Otherwise known as SArCaSm"," Want to hear a joke about nitrogen oxide? NO!"," What is the least interesting element? Bohrium."," A piece of ice fell in love with Bunsen burner. “Bunsen my flame! I melt every time I see you”, said the ice. The Bunsen burner replied, “ It is only a phase you are going through”."," Why is the moon so broke? It’s down to its last quarter."," Why is the spinal column so audacious? Because he’s got nerve!"," Why is the dieting advice to “eat light” so dangerous? That’s how you become a black hole."," What did the infectious disease say when the bartender refused him service? Well, you’re not a very good host."," What is a chemist’s favorite holiday song? Oh Chemist-TREE, oh Chemist-TREE!"," What did Donald Duck say in his graduate physics class? “Quark, quark, quark!”"," Which university did the hippopotamus go to study? Hippocampus!"," What gas never cries?  Nitrous Oxide (Laughing Gas)","  Which fruit contains Barium and double Sodium? BaNaNa!"," The optimist sees the glass half full. The pessimist sees the glass half empty. The chemist sees the glass completely full, half in the liquid state and half in the vapor state."," The last words of a chemist? “… and now for the taste test.”"," Why did the acid go to the gym? To become a buffer solution!"," Why did Carbon marry Hydrogen? They bonded well from the minute they met.","  What do you call a joke that is based on cobalt, radon, and yttrium? CoRnY."," If H2O is the formula for water, then what is the formula for ice? H2O cubed!"," All mushrooms are edible. Some are only edible once."," Why didn’t the sun go to graduate school? Because it already had a million degrees!"," Two blood cells met and fell in love. Alas, it was all in vein."," Why couldn’t the astronaut book a room on the moon? It was full!"," What did one decimal say to the number? “Did you get my point?”"," Why is electricity the perfect student? It conducts itself so well."," Why do quantum physicists make bad pitchers? Because when they find the position, they can’t find the momentum, and when they have the momentum, they can’t find the position"," What did is a nuclear physicist’s favorite snack? Fission chips."," Chemists are totally wild! Some drop acid and others drop the base."," I’m fascinated by water’s gas form. It mist-ifies me."," A biologist and a physicist got married but got divorced soon after. There was just no chemistry."," What’s the best science? Geology — it rocks!"," How do deaf mathematicians communicate? Through sine language."," Why did the chemistry lab blow up? Oxidants happen!"," Why did the amoeba cross the road? It was time to split."," What did the bartender say when oxygen, hydrogen, sulfur, sodium, and phosphorus walked into his bar? “OH SNaP!”"," What do you call the leader of a biology gang? The nucleus."," Why did the attacking army use acid? To neutralize the enemy’s base!","  What do you do with a sick chemist? If you can’t helium, and you can’t curium, then you might as well barium."," What do chemists call a benzene ring where the carbon atoms are replaced with iron atoms? A ferrous wheel."," Why did the gene crossover? To get to the non-sister homolog!"," When a third-grader was asked to cite Newton’s first law, she said, “Bodies in motion remain in motion, and bodies at rest stay in bed unless their mothers call them to get up.”"," When the astronomy department found out their famous professor wouldn’t get the Nobel prize this year, they decided to hold a party for him anyway. They gave him a constellation prize."," Many people ask me why I chose forensic medicine as a career, and I tell them that it is because a forensic man gets the honor of being called when the top doctors have failed!"," Why is quantum mechanics the “original hipster”? It described the universe before it was cool."," Did you hear about the neutron who got arrested? He got released without charge."," If you ask a cosmonaut when it is his favorite moment to snack, how does he answer? “Launch time.”"," What’s the difference between a mathematician and a forensic scientist? A mathematician thinks that two points are enough to define a straight line while a forensic scientist wants more data."," One mouse to another: “Look at that fellow with a white coat on. Whenever I push the paddle, he starts writing something!”"," How many forensic scientists does it take to change a light bulb? It takes two — one to screw it in and one to check for fingerprints."," What did the Atlantic Ocean say to the Indian Ocean? “Try and be more PACIFIC!”"," Where did the lightning bolt propose to his girlfriend? Cloud nine."," What did the dog say to his owner? “My favorite frequency is 50,000 hertz, but you’ve probably never heard of that.”"," What did the receiver say to the radio wave? “Ouch! That megahertz.”"," An astronomy major had a part-time job working in the university’s off-campus housing office. One day, a fellow student, upon entering the office in thought about the morning lecture, asked, “What is an astronomical unit?” To which the astronomy major replied, “One helluva big apartment.”"," A physicist, while exiting the theater after seeing Star Wars, bumped into a fellow physicist. Inspired by the movie, he blurted to his friend, “May the mass times acceleration be with you.”"," Organ donors really put their heart into it."," I don’t need a spine — it’s holding me back!"," There’s a new theory on inertia, but it doesn’t seem to be gaining momentum."," If a prince farts, is it a noble gas?"," I feel like I’m diagonally parked in a parallel universe."," The cost of the space program is truly astronomical!"," Absolute zero is so cool!"," Einstein developed a theory about space — it was about time!"," Funny chemistry jokes always get a good reaction."," How come noses run and feet smell?"," A sign outside the chemistry hotel reads, “Great Day Rates, Even Better NO3-‘s.’ (Nitrates)”"," Do scientists who study the sun have a flare for research?"," Air resistance is a real drag."," Biology is the only science in which multiplication is the same thing as division."," Hand over the calculator; friends don’t let friends derive drunk."," I’m a big fan of renewable energy!"," Why couldn’t the astronaut focus? He kept spacing out."," What do you call the lights on a lunar rover? Moonbeams"," Which stars wear glasses? Movie stars."," When life gives you mold, make penicillin."," The name’s Bond. Ionic Bond. Taken, not shared."," What do solids, liquids and gases have in common? They all matter."," Guys, stop it with the puns. We’ve all sulfured enough."," What did the chemist say when he found two isotopes of Helium? HeHe"," What did the elements say to hydrogen? What a loner!"," We really shouldn’t talk about mitosis…It’s such a divisive issue."," A teacher asks their class what is the molecular formula for water. A student replies HijklmnO. The teacher says no you’re wrong. Then the student says didn’t you say the formula was H to O"," All the elements are sitting at the dinner table and neon says” Helium don’t eat too much! You’re gonna get fat!” Helium says ” No I’m not, I’m the second lightest here!”"," How did the computer hacker get out of the jail? He found the escape key!"," Why did the spider buy a computer? Because it wanted to browse the web."," Why do hurricanes have good vision? Because they have a BIG eye!"," Which fish is most afraid of dogs? Catfish!"," Why are astronauts always happy when they are in space? Because there is no gravity to drag them down!"," Biologists have discovered legs are hereditary. They run in your jeans!"," Who is shorter than a biologist? A Microbiologist!"];
  
  
  
  
  