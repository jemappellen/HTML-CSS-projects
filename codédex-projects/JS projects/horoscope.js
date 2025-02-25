// 🐱 Catoscope
// What the Stars Say About Your Nine Lives! 🐾

//Enter month of birth to launch the catoscope

let monthOfBirth = 'march'.trim().toUpperCase();

//The month of birth is logged to the console

const zodiacSignReveal = () => {
  console.log(`The world was blessed to receive you in ${monthOfBirth}!

🐈 You are...
`);
}

//The horoscope is logged to the console based on the month of birth

switch (monthOfBirth) {
  case 'JANUARY':
    zodiacSignReveal();
    console.log(`♑ Capricorn - The Boss Cat

You’re all business this week, Capricorn kitty.
That means strict nap schedules, disciplined 
treat begging, and ensuring your human sticks
to their job of worshiping you.
    `);
    break;

  case 'FEBRUARY':
    zodiacSignReveal();
    console.log(`♒ Aquarius – The Eccentric Explorer

You’re full of surprises, Aquarius cat!
One minute you’re zooming through the house 
at 3 AM, the next you’re staring at the wall 
like you’ve seen a ghost. Your human doesn’t 
understand you, but that’s okay—you’re simply 
operating on a higher level of consciousness.
    `);
    break;

  case 'MARCH':
    zodiacSignReveal();
    console.log(`♓ Pisces – The Fluffy Daydreamer

You’re extra sleepy and cuddly, Pisces kitty.
This is the perfect time to curl up in the sun 
and let your mind wander to dreams of endless 
tuna buffets. Just don’t forget to wake up for 
mealtime.
    `);
    break;

  case 'APRIL':
    zodiacSignReveal();
    console.log(`♈ Aries – The Fearless Hunter

Your adventurous spirit is at an all-time high, Aries cat!
You’ll find yourself leaping onto the highest shelves and boldly
swiping at unseen forces (probably dust particles).
But be careful—your daring nature might get you stuck
somewhere embarrassing (again).
    `);
    break;

  case 'MAY':
    zodiacSignReveal();
    console.log(`♉ Taurus – The Cozy Connoisseur

This week is all about luxury, Taurus kitty.
Snuggle into the softest blanket, claim the 
warmest spot by the window, and demand extra 
head scratches. Your human might resist giving 
you extra treats, but with a well-placed purr, 
you’ll win them over.
    `);
    break;

  case 'JUNE': 
    zodiacSignReveal();
    console.log(`♊ Gemini – The Chatty Cat

You have a lot to say this week, Gemini feline!
Whether it’s meowing for food, attention,
or just because, your vocal cords are getting 
a workout. Your human may not understand, but that
won’t stop you from telling them all about your day.
    `);
    break;

  case 'JULY':
    zodiacSignReveal();
    console.log(`♋ Cancer – The Snugglebug

You’re extra affectionate right now, Cancer cat.
Expect to curl up in your human’s lap more often
(whether they like it or not).
Just be careful not to get too clingy—nobody likes
a jealous kitty when they’re petting the dog.
    `);
    break;

  case 'AUGUST':
    zodiacSignReveal();
    console.log(`♌ Leo – The Regal Ruler

Bow down, mere mortals!
Your confidence is through the roof, Leo kitty,
and you demand to be treated like the royalty you are.
Whether it’s parading around the house with your tail 
high or demanding belly rubs (but only for 3 seconds), 
you own this place.
    `);
    break;

  case 'SEPTEMBER':
    zodiacSignReveal();
    console.log(`♍ Virgo – The Meticulous Mouser

You’re in full organization mode, Virgo cat.
That means knocking things off shelves with 
precision and rearranging items in your space
(like shoving your human’s socks under the couch).
Don’t be surprised if they don’t appreciate your 
interior design efforts.
    `);
    break;

  case 'OCTOBER':
    zodiacSignReveal();
    console.log(`♎ Libra – The Social Butterfly

You’re craving companionship this week, Libra kitty!
Whether it’s following your human from room to room
or trying to befriend the goldfish, you just want to 
be around others. Just remember—some creatures 
(ahem, the dog) don’t always appreciate your refined company.
    `);
    break;

  case 'NOVEMBER':
    zodiacSignReveal();
    console.log(`♏ Scorpio – The Mysterious Stalker

You’re feeling secretive, Scorpio cat.
Maybe you’ll hide under the bed and wait 
for the perfect moment to pounce on unsuspecting 
toes. Your intense gaze is making everyone 
slightly uncomfortable, but you love keeping 
them on edge.
    `);
    break;

  case 'DECEMBER':
    zodiacSignReveal();
    console.log(`♐ Sagittarius – The Free Spirit

Adventure calls, Sagittarius feline!
Whether it’s sneaking outside when the 
door cracks open or exploring the deepest 
corners of the closet, you’re in the mood 
for discovery. Just don’t let curiosity lead 
you into the bathtub!
    `);
    break;

  default:
    console.log('Input error. Try again.');
    break;
}