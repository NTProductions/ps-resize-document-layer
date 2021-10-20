var doc = app.activeDocument;
var layer = doc.layers[0];

doc.resizeCanvas(doc.height, doc.width);

layer.resize(200, 200);