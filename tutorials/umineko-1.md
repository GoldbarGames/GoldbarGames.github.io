---
layout: page
title: "Umineko Fan-Game Tutorial Part 1 - All the Basics"
description: ""
---
{% include JB/setup %}

### Extracting the Code

Run NSDEC.exe (with admin privileges) in the same directory as your nscript.dat. The game script will be output to a file called "result.txt", which we will want to rename to "0.txt" for testing purposes. The "0.txt" file overrides the nscript.dat, so ONScripter.exe will read our modified version of the code instead of the original Umineko.

Similarly, running NSAOUT.exe in the same directory as your arc.nsa will extract all of the sprites and backgrounds to a folder called "arc". You will want to reference this folder frequently, as it will be hard at first to recall every filename of every image.

### Starting the Game

How do we know where the game starts in the code? There is actually a lot of code above and below the game's script, but there is one easy way to tell. In order for our game to run, we need to tell ONScripter where to begin the game. This section is called the **game block**. On the other hand, we might want to define some variables and functions before the game actually starts, and this section is called the **definition block**. In the definition block, our variables consist of two types: strings and integers. We define a string using the dollar sign ($) and an integer using the percent sign (&). Functions are defined using the keyword **defsub**.

Labels begin with an asterisk (\*) and are used to navigate between sections of code. For example, a common use in visual novels is to jump between choices or routes. You will want to section these apart into different labels. You can jump from one label to another with the command **goto**. The command **gosub** allows you to jump to a section of code (called a subroutine) and then once it is finished, return to your previous position in the code. You could use gosub in situations where you want to reuse the same code multiple times but would rather not rewrite it all out.

07th Expansion's starting label is aptly named "\*start", so you should go there in your 0.txt (using Ctrl+F to easily find it). Recall that at the start of Umineko, the 07th Expansion logo (along with Witch-Hunt’s logo in the English version) flashes on the screen for a few seconds. This is because the game jumps to the label \*b_sakuru_logo (Japanese for ‘circle logo’). We can see this firsthand in the line:
`goto *b_sakuru_logo`
You may or may not want to keep that 07th Expansion splash screen in place. To remove it, one way is to simply delete the line. However, you may also choose to comment it out (which is what we will do). Simply place a semicolon in front of it, like so:
`;goto *b_sakuru_logo`
Adding a semicolon in front of a command will turn it into a **comment**. The most common use for a comment is to make notes for other programmers who are looking at your code. However, it is also useful as a way to quickly disable lines of code without having to delete it all. When testing complex games it might be easy just to comment the line out instead of deleting it, should you ever want to restore that line later.

The title screen is a bit too advanced to be editing right now, so let's make sure this line is commented out, and start with something simpler.

### Loading Backgrounds
This is how you insert a background:

`bg X,Y`

Where X is the name of the background, and Y is the effect number.

`bg white,22 ;This will make the screen go white, with the effect number 22, which is a fade from the previous bg to this one`

`bg rose_3ap,6 ;This loads the background for the meta-world rose garden, with effect number 6, a slow fade from bottom to top`

If you can memorize how the backgrounds are named, this should be something you can easily remember. If not, it’s simple enough to just look in the directory each time. 07th Expansion gave rather convenient names to their backgrounds for Umineko. Although Higanbana and Rose Guns Days dropped most of these conventions, they are still useful to know for Umineko fangames:

`bg rose_3ap`

The bg naturally stands for “background”. Then comes a shortened name (usually condensed into 3-4 letters) for the general area, then an underscore, then a number, then a letter (as subset of the number), then sometimes an additional letter (in this case “p” = “purple/metaworld”, or in other cases “n” = “night” or “r” = “raining”.)

Next, effect numbers! Here is a list of what effect numbers can do:

1 - Instant
2,22,42,62 - Fade
3,23,43,63 - Left to Right
4,24,44,64 - Right to Left
5,25,45,65 - Up to Down
6,26,46,66 - Down to Up
7,27,47,67 - Horizontal Slice
8,28,48,68 - Fade Circle
9,29,49,69 - Fade Right to Left
10,- Inside to Outside
11 - Fade Left to Right
30 - Middle square
31 - Wipe Diagonal

Note that the single digits are slow, 20's are fast, 40 is slowest, and 60 is fastest.
There also exist numbers for the 80’s but I haven’t found much use for them.

One effect number that I have found incredible use for is, in fact, 0.

0 is a special effect number that actually does not do anything except prepare for the next time an effect number shows up. So if you want to load two things at the same time with the same effect, you would give Sprite A effect 0 and Sprite B effect 22.
This would load Sprite A and Sprite B at the exact same time using effect 22.

### Loading Sprites
Speaking of sprites, inserting those is also simple.

`ld X,Y,Z`

Where X = l,c,r,a
Where Y = name of the sprite
Where Z = effect number

`ld c,$but_defa1,24      ;loads the center, Battler's default sprite, effect 24`
`ld l,$bea_nakua1,25      ;loads the left, Beatrice's crying sprite, effect 25`

The abbreviations for the arguments are simple too.

ld = load
l = left
c = center
r = right
a = all
but = Battler (yes 07th spelled it wrong)
def = default
a = a, b, c, etc.
1 = 1, 2, 3, etc.
24 = effect number

That's all there is to it.

As an interesting side-note, EP1-5 all used a different kind of sprite-loading system, in which a $ would be placed before the sprite name (i.e. ld c,$but_waraia1,24).

You can also clear sprites by using cl instead of ld. The format is the same otherwise.

### Displaying Text
Now we'll add text, enclosed with

` ` = used to denote English characters inside, rather than Japanese (for spacing purposes)
@ = click to advance the text on the same page
br = line break
\ = click to advance the text on the next page

Of course there are more complex commands for showing text but I'll get to those later.

One important piece of code is "wait"
`wait X`
Where X = the time in milliseconds that you want the game to wait.

### Sound Effects and Music

Last but not least, sound effects (se), music effects(?) (me), and background music (bgm)
(I’m still not sure if ME stands for music effect, but I don’t know what else would make sense. It’s a term created entirely by 07th Expansion and isn’t built into ONScripter.)

There are two ways to play SE and ME.

`se1 2 ;this command plays sound effect 2 with the current volume
se1v 2,100 ;this command plays sound effect 2, changing the volume to 100`

You can use se1, se2, and se3 to play on separate channels. Be careful:

`se1 2 : se1 55`

The colon introduced here allows you to use multiple commands on the same line.

In this scenario, both sounds use the channel 1, meaning that sound #55 would overwrite sound #2. If you truly wanted to play both on the same channel, add a wait in between to give the first sound time to play. Otherwise, to play them both at the same time, play them on separate channels.

Volume ranges from 0-100; 70 is the default.
While it is possible to go above 100, it might sound muffled, so be careful.

To play ME, it works the exact same way (but with me instead of se).

Note that 07th Expansion uses their own method to play sounds and music.
The default way in ONScripter is to use dwave or dwaveplay or dwaveloop.
Instead, 07th Expansion assigns numbers to each sound, as they do for bgm.

`bgm1 50      ;this command plays background music 50
bgmvol 100    ;this command sets the background music volume to 100`

Normally to play bgm, one would simply type

`bgmplay [file directory.ogg]``

07th Expansion once again changes things by making it:

`bgm1 X`

Where X is a pre-defined number associated with a bgm. There’s a list of them near the end of the code, so if you want to know what number the song is you can just Ctrl+F the song’s name and find it easily.

So, with everything you just learned, you can make a basic Umineko fangame!

[Previous Part](/tutorials/umineko-0.html)        ......         [Next Part](/tutorials/umineko-2.html)
