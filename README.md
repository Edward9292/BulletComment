# js-library-linpao

## Getting started
### Scripts they need to include in their webpage.
<script src="/path/to/BulletComment.js"></script>

### Creating the object. Set idOfDOM be a string representing the id of the DOMScope that wants to display the effect.
let bc = new BulletComment(idOfDOM);

### or by non-default options
let bc = new BulletComment(idOfDOM, options);

### where
options = {
	MAX_COL: int,
	MAX_ROW: int
}

MAX_COL: maximum number of item can be display in a row
MAX_ROW: maximum number of row of items can be display


## Link to documentation
https://calm-reef-13427.herokuapp.com/documentation.html

## Example Webpage
https://calm-reef-13427.herokuapp.com/
