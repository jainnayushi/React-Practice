> 1. Inception

># Introduction
* React is a JavaScript `Library`

># First Program
1. Using HTML
```html
<h1>Hello from HTML</h1>
```
2. Using JavaScript 
```js
<div id="root"></div>

<script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Hello from JavaScript";
    const root = document.getElementById("root");
    root.appendChild(heading);
</script>
```
3. Using React CDN Links
* First link - Latest React core library
* Second link - Gives access to React-DOM
* Now we have React, React.createElement, ReactDOM available in our console due to CDN
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"> </script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- 
Console : React
> {Children: {…}, Fragment: Symbol(react.fragment), Profiler: Symbol(react.profi...)}

Console : ReactDOM
> {__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, cre..} 

Console : React.createElement
> f
-->
```
* Heading with CDN React using pure React
```js
<div id="root"></div>

<script>
    const heading = React.createElement("h1",{},"Heading from React CDN");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
</script>

```
* `React.createElement(type , props , ...children)`
```html
 React.createElement("h1" , {id:"title";} , "Hello")
 =>
 <h1 id="title">Hello</div> 
```
* console.log(heading) = object of type "h1"
* `Every React element is a object`
* root.render(heading); - Passing react element inside the DOM - heading gets injected inside the root
* Can we have multiple roots? - Generally we have only 1 root and 1 render method - According to React documentation, it's perfectly fine to use multiple roots to render component trees, and in fact, it's the way Facebook works with it.
* Root is the place where react actually runs!
```html
<h1>Header</h1>
<div id="root"></div>
<h1>Footer</h1>

<!--
    Header
Hello from React
Footer 
-->
```
* What if div already has some content? => `React will override the content of root div`
```html
<div id="root">
    <h1>Heading1</h1>
    <h1>Heading1</h1>
    <h1>Heading1</h1>
    <h1>Heading1</h1>
    <h1>Heading1</h1>
    <h1>Heading1</h1>
    <h1>Heading1</h1>
</div>
```
* So do following to show that root, render, react has some issue 
* If you see "Not rendered" means there's some react-root issue!
* Sometimes there's a lap between the time React is loaded into the page (Can see in Network -> All -> React files -> Takes some ms to load) At this time if we quickly refresh again and again and check - we see Not rendered for a microsec before Hello from React
```html
<div id="root">Not Rendered</div>
```
* Creating complex div with react
```html
<div id="container">
    <h1 id="title1">Heading1</h1>
    <h2 id="title2">Heading2</h2>
</div>
```
~
```js
const heading1 = React.createElement(
    "h1", 
    {
    id:"title1";
    }, 
    "Heading1");
const heading2 = React.createElement(
    "h2", 
    {
    id:"title2";
    }, 
    "Heading2");

const container = React.createElement(
    "div", 
    {
    id:"container";
    }, 
    [heading1, heading2]);

root.render(container)
```
* React came with the thought to write entire HTML, CSS inside JavaScript So React.createElement was used but its very tedious to write -> Therefore JSX came !
---