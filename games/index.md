---
layout: single
title: All Games
date: 2018-4-30
modified:
comments: true
excerpt:
tags: []
image:
  feature:
---


<h1 align="center">Completed Games</h1>

<div class="grid" itemscope itemtype="http://schema.org/ImageGallery">
  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>
  
  <table class="table">
    <tr>
      <thead><th>Game</th><th>Information</th></thead>
    </tr>
    {% for item in site.data.games %}
      <div class="grid-item">
        <tr>
          <td><a href="{{item.link}}" target="_blank"><img src="{{item.image | absolute_url }}" alt="{{item.title}}"></a></td>
          <td><p>{{item.description}}</p><p><b>Genre:</b> {{item.genre}}</p><p><b>Platforms:</b> {{item.platforms}}</p><p><b>Release Date:</b> {{item.releaseDate}}</p></td>
        </tr>
      </div>
    {% endfor %}
  </table>
</div>

<h1 align="center">Works In Progress</h1>

<div class="grid" itemscope itemtype="http://schema.org/ImageGallery">
  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>
  
  <table class="table">
    <tr>
      <thead><th>Game</th><th>Information</th></thead>
    </tr>
    {% for item in site.data.wip-games %}
      <div class="grid-item">
        <tr>
          <td><a href="{{item.link}}" target="_blank"><img src="{{item.image | absolute_url }}" alt="{{item.title}}"></a></td>
          <td><p>{{item.description}}</p><p><b>Genre:</b> {{item.genre}}</p><p><b>Platforms:</b> {{item.platforms}}</p><p><b>Release Date:</b> {{item.releaseDate}}</p></td>
        </tr>
      </div>
    {% endfor %}
  </table>
</div>

<p align="center">Our Umineko fan-games can be found <a href="https://goldbargames.com/seacats/">here.</a></p>



