---
layout: single
title: Billions Upon Billions of Sprites
modified:
categories: detective-butler
comments: true
share: true
excerpt: Kinjo describes his sprite process for Detective Butler 2.
tags: []
image:
  feature:
date: 2016-02-29T05:42:41-06:00
---

![ocean](/images/ocean.gif)

So, let's take a moment to discuss the way I'm handling artwork for Detective Butler 2.

When writing a detective story, you come to realize that characters are important. Not just like any other story, but in the sense that you NEED certain characters for the plot to exist. You need a culprit, a victim, and at least a few suspects... Maybe a doctor to confirm the body is dead, and the police inspector to arrest the criminal. Possibly some red herrings, the spouses of said red herrings, the family members who happen to be living with them, the pet dog, and the numerous strangers who can account for the culprit's flaky alibi.

In short, mysteries make use of a TON of characters, most of which do not significantly contribute to the story, other than to indirectly serve as some piece of evidence. Given how costly it was to produce even the ten sets of character sprites for the first game, I had to ask myself how I would get the sprites for not just one, but an entire SERIES of even bigger mysteries?

And then I came up with a plan. I was watching the detective anime based on _Agatha Christie's Poirot and Marple_ (though you could see the same in _Detective Conan_ or _Kindaichi_). It was then I noticed just how bland the supporting characters looked. I mean, they all kind of looked alike! Some guy with short, brown hair. Some rich girl with long, blond hair with a fancy dress. It looked as though maybe if you just recolored bits and pieces of their outfits, or heck even their eye colors, and then changed their name and backstory, you could get a totally "different" character.
That's when I realized this was genius.

Back when I was working on the first Detective Butler, I separated the sprites into various parts -- the body, the head, and the face. This was mostly inspired by the way 07th Expansion did the same thing to their sprites in later games, and it makes a lot of sense. You can just render the heads on top of the bodies and the faces on top of the heads, and you save quite a bit of hard disk space. You could even make the heads tilt randomly in-game!
So what happens if we combine this method with our new idea? Generic sprites!

It's very, very simple. You remember Legos? Well, what if we did the exact same thing with character sprites? You could mix and match them. Their heads, their torsos, their legs! And their faces! Each part is interchangeable. Just change the hue a little bit -- you know, a good old-fashioned palette swap -- and suddenly you've got a new character!
I mean, it's not like they'll be that integral to the plot! It's not like people will care that much about how detailed they are if it's just convincing enough! The ones that really matter, we can tailor their designs a bit more, but for the supporting background cast... This will do just fine!

Keep in mind, a year ago when I conceived this idea, it was all just an idea. Then I was lucky enough to find an artist willing to indulge me, and she has since created 250,000 sprites!

![generic-sprites](/images/blog/generic-people.gif)

W-what?! 250,000 sprites?! How the heck did she draw all of those?!

Well, think about it. If you've got 50 heads, 50 tops, and 50 bottoms, how many outfits does that make? 50 x 50 x 50 = 125,000. Double that for both sexes and you've got 250,000 unique-looking people! So we literally have a town's population worth of characters, which is good because our story will take place in a bustling city full of nameless, faceless people! Oh, and this isn't even counting stuff like hats or coats or fancy accessories. The numbers can only go higher!

You might still be skeptical. You might be asking yourself, how can they possibly create memorable characters just by playing mix and match? Surely sacrificing a little bit of quality in favor of speed and quantity won't work, right? Well, I've recreated a few memorable characters using our style of sprites below. See if you know who they are!
I think they all look pretty good, especially for coincidence. If you make enough interchangeable parts then you can make pretty much anything! Even the nameless characters who I haven't come up with a reason for existing yet will look solid.

![generic-sprites](/images/blog/generic-characters.jpg)

The implementation of these into the game is actually even easier than it was with ONScripter. Unity's interface allows me to parent objects together. So I simply create the parent object Character, with child objects Torso, Legs, and Head. Each one gets a sprite renderer, and I just drag and drop the sprite I want onto it. Literally playing dress-up!

Just snap on one of my custom Character Scripts and you've got a fully interactive character you can talk with during your free-roaming investigations! They'll be scattered across the map, waiting for you to come talk to them!

We're not cutting corners. You'll get to see who found the body. You'll get to see who can back up each suspects' alibis. You'll get to see the coroner and the doctor and even the entire crowd of ordinary passersby who are unaware that a murder even took place.

That's why this is called a VISUAL novel!
