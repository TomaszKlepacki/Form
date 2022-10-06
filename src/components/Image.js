import React, { useState } from "react";
import "./Image.css";

function App() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<h4>Dodaj swoje zdjęcie, przyśpieszy to weryfikacje konta:</h4>
            <img src={file} />
			<input type="file"  class="input-image"  onChange={handleChange} />
			

		</div>

	);
}

export default App;
