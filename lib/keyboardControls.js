class keyControls{
  constructor () {
    this.keys = {};
    document.addEventListener("keyDown", e =>{
      if ([37,38,39,40].indexOf(e.which) >= 0) {
        e.preventDefault();
      }
      this.keys[e.which] = true;
    },false);
    document.addEventListener("keyup", e => {
      this.keys[e.which] = false;
    }, false);
  }
  get y() {
    if (this.keys[38] || this.keys[87]) {
      return -1;
    }
    if (this.keys[40] || this.keys[83]) {
      return 1;
    }
    return 0;
  }
}

export default keyControls;
