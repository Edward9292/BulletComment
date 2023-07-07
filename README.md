# BulletComment - JavaScript Library 
BulletComment.js is a cool JavaScript library that lets you easily add bullet screen comments to any application. It's also known as danmaku or barrage comments, which are super popular in video sharing platforms, especially in Asian countries. But here's the fun part: BulletComment.js can do more than just comments! You can use it to display all sorts of stuff in your app, like ads, news, or user notifications. It's a versatile tool that adds some extra pizzazz to your application!

## Getting started
Scripts need to be include in the webpage.
```
<script src="/path/to/BulletComment.js"></script>
```
Creating the object. Set idOfDOM to be a string representing the id of the DOM Scope that wants to have the effect.
```
let bc = new BulletComment(idOfDOM);
```
### or by non-default options
```
let bc = new BulletComment(idOfDOM, options);
```
### where
```
options = {
	MAX_COL: int,
	MAX_ROW: int
}
```
MAX_COL: maximum number of item can be display in a row
MAX_ROW: maximum number of row of items can be display


## Link to documentation
https://edward9292.github.io/BulletComment/documentation.html

## Example Webpage
https://edward9292.github.io/BulletComment/
