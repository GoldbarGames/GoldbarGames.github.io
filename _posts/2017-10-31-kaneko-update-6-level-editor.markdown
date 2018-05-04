---
layout: single
title: Kaneko Update 6 - Level Editor
modified:
categories:
comments: true
excerpt: For Halloween, let's talk Kaneko!
tags: []
image:
  feature:
date: 2017-10-31T00:45:30-06:00
---

## Overview

Last but not least, our final update for October will focus on *Witch Doctor Kaneko*, a project we haven't touched upon in some time. 

Since the last Kaneko update, we moved our game engine from Unity to C++, using the Simple and Fast Media Library (SFML). We have accomplished a number of things in this engine that we hadn't done in Unity, which includes:

<ul>
  <li>Smooth controls and physics</li>
  <li>Easy to use sprite animation system</li>
  <li>Easy to use shader system</li>
  <li>More than half of Kaneko's spellbook</li>
  <li>Self-shaping terrain</li>
</ul>

## Terrain Generation

Let me explain that last bullet point a bit more. Our levels in Kaneko utilize three layers: middle, back, and front. Using these layers allows us to draw complex-looking terrain (for example, grass behind a path, the path itself, and then the grass in front of the path). While the middle and back layers are drawn behind Kaneko, the front layer is drawn in front of Kaneko, creating an illusion of depth. You can see an example in the screenshow below:

![Screenshot]({{ "images/blog/wdk_editor_scr1.png" | absolute_url }})

Notice that a wide range of different sprites are used to represent each tile. For instance, there are the path tiles, the edge tiles, the upside-down edge tiles, and so on. When creating a level, it would be extremely time-consuming to pick each one of these sprites by hand. So a while back I was able to code it into the game itself! We simply specify that there is a tile in a certain location, and it checks adjacent tiles to see what kind of sprite it should have. So the level automatically carves its own graphics out.

Additionally, I took the time to program a simple procedural generation function. In other words, the game can also generate its own levels by the press of a button. I've played a few of them, and while not all of them are very fun (they are rather barren and don't have much to do in them), it's really cool to see the game create entire levels on its own. We probably won't use it in the final game, but it's a cool feature I thought I'd mention.

Over time, creating levels has become slightly more complicated, as we need to add in various objects (such as blocks, doors, and bookshelves) to create interesting puzzles. Even though we had simplified the graphics to a point where the game could infer what to draw based on what tiles are nearby, it was still cumbersome to actually create these levels ourselves. We had to edit a text file, essentially typing 0 for an empty space and 1 for a wall. When your levels are really large, typing all those 0's and 1's can take a very long time! You have to type one for every row and every column, no exceptions!

## Easy Level Creation

We had reached a point where we had programmed in the basic game mechanics and simply needed to create levels in order to experiment with the puzzle designs. The problem was that it was really cumbersome to go about making these levels, testing them, and then changing them based on our testing. Eventually, I concluded that we needed to create our own level editor... But how?

The answer turned out to make a lot of sense. We'll just program the level editor inside of our game engine! And so now we finally have one. It reads in the data files, and when you're finished editing exports them, too. With the press of a button you can add or delete objects and terrain, and can move them around by clicking and dragging with the mouse. Even better, you can test your level as you are creating it, so if you need to make any changes you can do so immediately. I'm sure we'll be adding a lot more to the level editor down the road, but it's a working start right now. And we'll be able to use this level editor for any future game we make in C++!

![Screenshot]({{ "images/blog/wdk_editor_scr2.png" | absolute_url }})

In conclusion, we'll be using this level editor to test puzzle ideas and experiment around with the game mechanics. The other members of my team can also very easily create levels using this editor, with no knowledge of programming necessary. Although there is still a lot of work to be done, we have made significant progress. And with multiple people helping create and test the levels, production should go a lot faster!

