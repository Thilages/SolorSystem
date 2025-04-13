import React, { useRef, useState, useEffect } from 'react';

import * as THREE from 'three';

const Stars = ({ numStars = 1000, size = 0.05, range = 100 }) => {
  const meshRef = useRef();
  const [positions, setPositions] = useState([]);

  // Generate random positions for the stars
  useEffect(() => {
    const tempPositions = [];
    for (let i = 0; i < numStars; i++) {
      tempPositions.push([
        Math.random() * range - range / 2, // x position
        Math.random() * range - range / 2, // y position
        Math.random() * range - range / 2, // z position
      ]);
    }
    setPositions(tempPositions);
  }, [numStars, range]);

  // Update each instance's transformation in the next frame
  useEffect(() => {
    if (meshRef.current) {
      // Loop through each star and set its position using Matrix4
      positions.forEach((position, index) => {
        const matrix = new THREE.Matrix4();
        matrix.makeTranslation(...position); // Create the translation matrix
        meshRef.current.setMatrixAt(index, matrix); // Set the matrix for the instance
      });
      meshRef.current.instanceMatrix.needsUpdate = true; // Mark the instance matrices as needing an update
    }
  }, [positions]);

  return (
    <instancedMesh ref={meshRef} args={[null, null, numStars]}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial emissive="white" emissiveIntensity={0.5} />
    </instancedMesh>
  );
};

export default Stars;
