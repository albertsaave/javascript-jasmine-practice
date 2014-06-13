var Quo = function (string) {
  this.status = string;
}

Quo.prototype.get_status = function () {
  return this.status;
}

var myQuo = new Quo("confused");
var myQuo2 = new Quo("more confused");

document.writeln(myQuo.get_status());
document.writeln(myQuo2.get_status());
document.writeln(myQuo.get_status());
