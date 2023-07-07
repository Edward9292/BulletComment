
function BulletComment(field, options) {
	options = options || {};
	console.log(field)
    this.MAX_COL = options.MAX_COL || 5;
	this.MAX_ROW = options.MAX_ROW || 8;
    this.spaces = [];
    this.items = [];
    this.spaceAvailable = [];
    this._init(field);
}

BulletComment.prototype._init = function(field){
  let wrapper = document.getElementById(field)
  let width = wrapper.clientWidth;
  for (let i = 0; i < this.MAX_ROW; i++) {
    let doms = [];
    for (let j = 0; j < this.MAX_COL; j++) {
      let dom = document.createElement('span');
      wrapper.appendChild(dom);
	  dom.style.position = 'absolute';
	  dom.style.visibility = 'hidden';
	  dom.style.whiteSpace = 'nowrap';
	  dom.style.transform = `translateX(${width}px)`;
	  dom.style.transition = 'null';
      dom.style.top = i * 20 + 'px';
      doms.push(dom);
      dom.addEventListener('transitionend', () => {
		dom.style.position = 'absolute';
		dom.style.visibility = 'hidden';
		dom.style.whiteSpace = 'nowrap';
		dom.style.transform = `translateX(${width}px)`;
		dom.style.transition = 'null';

        this.spaces[i].push(dom);
      });
    }
    this.spaces.push(doms);
  }
  for (let i = 0; i < this.MAX_ROW; i++) {
    this.spaceAvailable[i] = true;
  }
}

BulletComment.prototype._getAvailableRow = function() {
  for (let i = 0; i < this.MAX_ROW; i++) {
    if (this.spaceAvailable[i] && this.spaces[i].length){
		return i;
	} 
  }
  return -1;
}

BulletComment.prototype._shoot = function(dom, text, row) {
  dom.innerHTML = text;
  dom.style.transform = `translateX(${-dom.clientWidth}px)`;
  dom.className = 'bullet';
  dom.style.visibility = 'visible';
  dom.style.position = 'absolute';
  dom.style.witeSpace = 'nowrap';
  dom.style.userSelect = 'none';
  dom.style.transition = 'transform 8s linear';
  
  this.spaceAvailable[row] = false;
  setTimeout(() => {
    this.spaceAvailable[row] = true;
  }, dom.clientWidth * 10 + 1000);
}
BulletComment.prototype.clear = function(){
	this.items = [];
}
BulletComment.prototype.keepSending = function(item, timeInterval){
	timeInterval = timeInterval || 1000;
	setInterval(() => {
		console.log("keeping")
        this.items.push(item)
      }, timeInterval);
}
BulletComment.prototype.send = function(item){
    this.items.push(item);
}
BulletComment.prototype.start = function(){
    setInterval(() => {
        let availableRow;
        if (this.items.length && (availableRow = this._getAvailableRow()) != -1) {
          let dom = this.spaces[availableRow].shift();
          console.log(dom)
          let item = this.items.shift();
          this._shoot(dom, item, availableRow);
        }
      }, 1);
}
