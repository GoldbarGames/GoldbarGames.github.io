---
layout: page
title: "Umineko Fan-Game Tutorial: Part 0 - Setting the Stage"
description: ""
---
{% include JB/setup %}

###Background
NScripter is a Japanese game engine by Naoki Takahashi designed for creating visual novels for Windows. NScripter dominated the early Japanese visual novel market, including hits such as Tsukihime, HaniHani, Narcissu, Saya no Uta, and Higurashi No Naku Koro Ni. Developer of Higurashi, 07th Expansion, continues to use Nscripter for their games, and this particular tutorial focuses on their sound novel Umineko no Naku Koro Ni.

The original Nscripter is closed-source. ONScripter is short for open-source NScripter, and is popular among localization groups. For instance, the English translation group Witch-Hunt used ONScripter-EN -- the English branch of ONScripter -- when translating Umineko.  PONScripter is a different branch of ONScripter designed to accommodate non-English languages and characters. Currently, both ONScripter-EN and PONScripter are maintained by [Uncle Mion](http://unclemion.com/onscripter/).

I learned how to program in ONScripter by experimenting with Umineko's code; something that was uncommon among the English fanbase. Interestingly, during Umineko's lifespan, the Japanese fanbase did not hesitate to modify the game's code to create fangames. These games were then uploaded to 07th Expansion's BBS, as well as video site Nico Nico Douga. So I was among the first of the first English authors of Umineko fangames, alongside [Jan-Poo](http://janpoolab.blogspot.it/) and [Renall](https://whabroad.wordpress.com/).

This tutorial series was written in response to the requests I have received asking how to code in ONScripter. Many Umineko fans wish to make their own gameboards using images and music from the original game, and this is most easily accomplished by editing the game itself. Specifically, this tutorial explains how to work within 07th Expansion's framework of code, and is not a general-purpose ONScripter tutorial, which I may write at some later date.

###Required Tools
The required tools are as follows:

* Umineko EP8
* Nscripter SDK
  * NSCMAKE.EXE
  * NSAARC.EXE
  * BW2ACONV.EXE (optional)
* NSDEC.EXE
* NSAOUT.EXE
* Text editor
* Image editor (optional)
* Uncle Mion's API Documentation (optional)


Of course, editing Umineko requires that you own a copy of Umineko (ideally EP8, because it contains the most resources). Our fangames will be applied as a patch to the root game folder, requiring that others will also need Umineko installed to play it. Requiring Umineko to be installed will also greatly minimize our game's file size.

The Nscripter SDK, NSDEC.EXE, and NSAOUT.EXE can be obtained [here](http://nscripter.insani.org/sdk.html).

I recommend editing ONScripter using Notepad. You can try using more advanced editors such as Notepad++ if you like, but be warned that Japanese characters can potentially be corrupted. Generally speaking, you will not need a very complicated editor to work with ONScripter code. ONScripter's open-source code is written in C++, but we will not be modifying the source code. We are only modifying a script file that ONScripter will read, and this script file bears syntax very similar to Assembly Language, for those who are familiar.

After we are done writing to the script file, we can encrypt it using NSCMAKE.EXE. This will make the file unreadable, but the process can be reversed using NSDEC.EXE. We will use NSDEC.EXE to extract Umineko's code, then NSCMAKE.EXE to encrypt it once we're done. Similarly, we can extract Umineko's game assets using NSAOUT.EXE, and if we want to compress our own custom images, we can use NSAARC.EXE to compress them into a file named "arc.nsa."

Finally, you should refer to [Uncle Mion's API](http://unclemion.com/onscripter/api/NScrAPI.html) if you are confused or have questions regarding each NScripter command.

[Next Part](/tutorials/umineko-1.html)
