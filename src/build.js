
function createHexagon(radius, color) {
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = false;
    var geometry = new THREE.CylinderGeometry(radius, radius, 0.1, 6);
    var hexagon = new THREE.Mesh(geometry, material);
    return hexagon;
}
// Create a hexagonal terrain piece
function createHexTerrain(rows, cols, spacing, baseSize, minHeight, maxHeight) {
    spacing = baseSize * 1.5;
    let rowHeight = Math.sqrt(3) * baseSize / 2;

    let terrain = new THREE.Group();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Offset every other row by spacing/2
            let x = (j - cols / 2) * spacing + ((i % 2) * spacing / 2) + 1;
            let z = (i - rows / 2) * rowHeight * 2;

            let height = minHeight + Math.random() * (maxHeight - minHeight);

            let baseColor;
            if (height < minHeight + (maxHeight - minHeight) * 0.4){
                baseColor = 0x4ea24e;
            } else if (height < minHeight + (maxHeight - minHeight) * 0.7){
                baseColor = 0x389638;
            } else {
                baseColor = 0x228B22;
            }

            let hex = createHexagon(baseSize, baseColor);
            hex.position.set(x, (baseSize * height) / 2, z);
            hex.scale.y = height;
            terrain.add(hex);
        }
    }
    scene.add(terrain);
}

/* Define the add shapes function */
function addShapes() {
    createHexTerrain(10, 10, 0, 5, 1, 2); // create a 10x10 grid of hexagonal terrain pieces
}