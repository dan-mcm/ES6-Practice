//refactor using enhanced literal notation

const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red: red, blue: blue };

const COLORS = { red, blue }

//refactor using enhanced literal notation\
const fields = ['firstName', 'lastName', 'phoneNumber'];
const props = { fileds: fields };

const props = { fields };

//refactor using enhaned literal notation
const canvasDimensions = function(width, initialHeight){
  const height = initialHeight * 9 /16;
  return{
    width: width,
    height: height
  };
}

const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 /16;
  return{
    width,
    height
  };
}

//refactor using enhaned literal notation
const color = 'red';
const Car = {
  color: color,
  drive: function(){
    return 'Vroom!';
  },
  getColor: function(){
    return this.color;
  }
}

const Car = {
  color,
  drive(){
    return 'Vroom!';
  },
  getColor(){
    return this.color;
  }
}
