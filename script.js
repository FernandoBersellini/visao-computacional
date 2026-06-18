const URL = "https://teachablemachine.withgoogle.com/models/JaAqx3b_S/";

let model, labelContainer, maxPredictions;

// Load the image model
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    
    // Fetch metadata to get the class labels for initial display
    const response = await fetch(metadataURL);
    const metadata = await response.json();
    const classLabels = metadata.labels;

    labelContainer = document.getElementById("label-container");
    
    // Create modern label items
    for (let i = 0; i < maxPredictions; i++) { 
        const labelItem = document.createElement("div");
        labelItem.className = "label-item";
        
        const labelText = document.createElement("span");
        labelText.className = "label-text";
        labelText.innerText = classLabels[i]; // Initialize with actual class names!
        
        const labelValue = document.createElement("span");
        labelValue.className = "label-value";
        labelValue.innerText = "0%";
        
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        progressBar.style.width = "0%";
         
        labelItem.appendChild(labelText);
        labelItem.appendChild(labelValue);
        labelItem.appendChild(progressBar);
        
        labelContainer.appendChild(labelItem);
    }
}

// Handle image upload and trigger prediction
async function handleImageUpload(event) {
    if (!model) {
        alert("Please wait for the model to finish loading.");
        return;
    }

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('preview-image');
            
            // Assign onload handler BEFORE setting the source to prevent race conditions
            imgElement.onload = async function() {
                await predict(imgElement);
            }
            
            imgElement.src = e.target.result;
            imgElement.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
}

// run the image through the image model
async function predict(imageElement) {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(imageElement);
    
    for (let i = 0; i < maxPredictions; i++) {
        const item = labelContainer.children[i];
        const className = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(0);
        
        // Update DOM elements
        item.querySelector('.label-text').innerText = className;
        item.querySelector('.label-value').innerText = `${probability}%`;
        item.querySelector('.progress-bar').style.width = `${probability}%`;
    }
}

// Initialize the model on page load
init();