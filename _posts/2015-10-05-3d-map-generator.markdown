---
layout: post
title: 3D Map Generator
modified:
categories:
comments: true
excerpt:
tags: []
image:
  feature:
date: 2015-10-05T23:20:12-05:00
---

The 3D Map Generator is a piece of functionality I'd been working on recently for Detective Butler. Basically, our goal was to release chapters in a fairly timely manner. Our biggest hurdle in doing so was getting 3D models for the backgrounds. It was difficult and time-consuming for us (read: me) to work in Sketchup to create the backgrounds, and any mistakes would be too costly to try and redo. In short, we needed a quick and efficient way to make our backgrounds, and this idea seemed like it would work the best.

The inspiration for this idea actually came from Runescape, with its simplistic-looking terrain grid. Having a grid-based system would be advantageous so that all other cinematic features (camera panning) and interactivity (clickable objects) can be measured on a unit scale. So for example, we might want to move the camera 10 tiles, or only have one object per tile, or maybe have an object take up four tiles. In other words, this grid system would make our backgrounds look a lot nicer than just trying to make a freeform model in Sketchup (and trying but failing to be consistent). The consistency is instead handled by Unity, and as I like to say, it's going to be a lot easier to keep track of things if I just let the computer handle all the math for me.

Basically, the purpose of the 3D Map Generator is to take in a text file as input, which has a map drawn out in ASCII characters. Then, while running it in Unity, it converts that map into a 3D map, generating it tile by tile at runtime. Afterward, I can save the map as a game object prefab, and use it as much as I want later on. The process I took to create the map generator is as follows:

1. Generate a single 3D tile from within the code
2. Generate a grid of 3D tiles from within the code
3. Add variations of height to the grid
4. Connect the different heights by creating slopes
5. Add variations in texture to each tile
6. Ability to combine all same-material meshes into a single mesh
7. Ability to save the object as a prefab
8. Generate a single wall (multiple tiles connected)
9. Add variations of height to the wall
10. Generate a tile or a wall based on text file input
11. Add variations in height, objects, and texture to the text file
12. Add automatic rotation checking based on adjacent tiles

Each step probably took between 1-3 days. Overall, the system took the entirety of September to get into a useful state. Currently, it's useful for creating rooms of buildings and mountainous landscapes. Given a text file, it takes maybe at most five minutes to create a 3D map which can be used as a background. All aspects of the 3D map can also be edited manually in the Unity editor after being generated, in case there's something else you want to add, remove, or modify.

Here is an example of a map:

~~~
//You need this blank line at the top, and an extra . at the end of every row.
*******...........
*.....*...........
*.....*...........
*.....*...........
*.....*...........
*.....*****d*****.
*...............*.
*...............*.
*...............*.
*...............*.
*...............*.
*************..**.
*************..**.
**.........**..**.
**.........**..**.
******d*****....*.
*..........*....*.
*..........*....*.
*..........d....*.
*..........*....*.
*..........*....*.
*************..**.
~~~

Yes, that's all. And here is what it looks like in-game:

![map-example](/images/map-example.jpg)

Note that tile texture and height use their own individual files, and so each tile's texture and height can be unique. The final image shows multiple textures, as well as doors (represented by 'd' in the input file) that automatically rotate to align with each wall.

So, the rate at which we can create maps/backgrounds for Detective Butler has improved tremendously. We'll be able to use this to literally show you maps of the area, which will be useful for solving each crime. The camera view will switch between the standard visual novel perspective and the overhead map view. And of course, we will continue to add functionality to create more complex maps as time goes on.
