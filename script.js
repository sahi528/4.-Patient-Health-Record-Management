const patientRecords = [
    { 
        id: 1,
        name: "John Doe",
        age: 35,
        condition: "Hypertension",
        medicines: ["Aspirin", "Lisinopril"],
        weight: 80,
        height: 175,
        allergies: ["Penicillin"],
        surgeries: ["Appendectomy"]
    },
    { 
        id: 2,
        name: "Jane Smith",
        age: 45,
        condition: "Diabetes",
        medicines: ["Insulin", "Metformin"],
        weight: 65,
        height: 160,
        allergies: ["Sulfa drugs"],
        surgeries: ["Knee replacement"]
    },
    // Additional records
    { 
        id: 3,
        name: "Aarav Patel",
        age: 28,
        condition: "Migraine",
        medicines: ["Sumatriptan", "Propranolol"],
        weight: 70,
        height: 180,
        allergies: [],
        surgeries: []
    },
    { 
        id: 4,
        name: "Aisha Sharma",
        age: 32,
        condition: "Asthma",
        medicines: ["Albuterol", "Fluticasone"],
        weight: 55,
        height: 165,
        allergies: ["Dust"],
        surgeries: []
    },
    { 
        id: 5,
        name: "Arjun Kapoor",
        age: 40,
        condition: "Arthritis",
        medicines: ["Ibuprofen", "Methotrexate"],
        weight: 78,
        height: 175,
        allergies: [],
        surgeries: ["Hip replacement"]
    },
    { 
        id: 6,
        name: "Divya Singh",
        age: 26,
        condition: "Allergic Rhinitis",
        medicines: ["Cetirizine", "Nasal corticosteroids"],
        weight: 60,
        height: 160,
        allergies: ["Pollen"],
        surgeries: []
    },
    { 
        id: 7,
        name: "Hari Sharma",
        age: 55,
        condition: "Chronic Kidney Disease",
        medicines: ["Losartan", "Epoetin alfa"],
        weight: 75,
        height: 170,
        allergies: [],
        surgeries: []
    },
    { 
        id: 8,
        name: "Ishaan Verma",
        age: 38,
        condition: "Depression",
        medicines: ["Sertraline", "Bupropion"],
        weight: 68,
        height: 175,
        allergies: [],
        surgeries: []
    },
    { 
        id: 9,
        name: "Jaya Khanna",
        age: 48,
        condition: "Osteoporosis",
        medicines: ["Alendronate", "Calcium supplements"],
        weight: 62,
        height: 160,
        allergies: ["Vitamin D supplements"],
        surgeries: []
    },
    { 
        id: 10,
        name: "Kiran Desai",
        age: 44,
        condition: "Thyroid Disorder",
        medicines: ["Levothyroxine", "Methimazole"],
        weight: 70,
        height: 165,
        allergies: [],
        surgeries: []
    },
    { 
        id: 11,
        name: "Manoj Joshi",
        age: 60,
        condition: "Hearing Loss",
        medicines: ["Hearing aids"],
        weight: 72,
        height: 168,
        allergies: [],
        surgeries: []
    },
    { 
        id: 12,
        name: "Neha Gupta",
        age: 31,
        condition: "Gastritis",
        medicines: ["Antacids", "Omeprazole"],
        weight: 58,
        height: 155,
        allergies: ["Spicy food"],
        surgeries: []
    },
    { 
        id: 13,
        name: "Pranav Kapoor",
        age: 42,
        condition: "Insomnia",
        medicines: ["Zolpidem", "Melatonin"],
        weight: 75,
        height: 178,
        allergies: [],
        surgeries: []
    },
    { 
        id: 14,
        name: "Radhika Sharma",
        age: 36,
        condition: "Rheumatoid Arthritis",
        medicines: ["Hydroxychloroquine", "Methotrexate"],
        weight: 65,
        height: 163,
        allergies: [],
        surgeries: []
    },
    { 
        id: 15,
        name: "Rahul Kapoor",
        age: 33,
        condition: "High Cholesterol",
        medicines: ["Atorvastatin", "Ezetimibe"],
        weight: 80,
        height: 175,
        allergies: [],
        surgeries: []
    },
    { 
        id: 16,
        name: "Riya Patel",
        age: 29,
        condition: "Anxiety",
        medicines: ["Diazepam", "Escitalopram"],
        weight: 60,
        height: 162,
        allergies: [],
        surgeries: []
    },
    { 
        id: 17,
        name: "Sachin Singh",
        age: 50,
        condition: "Hypothyroidism",
        medicines: ["Levothyroxine"],
        weight: 78,
        height: 170,
        allergies: [],
        surgeries: []
    },
    { 
        id: 18,
        name: "Shreya Gupta",
        age: 27,
        condition: "Pregnancy",
        medicines: ["Prenatal vitamins", "Folic acid"],
        weight: 65,
        height: 163,
        allergies: ["None"],
        surgeries: []
    },
    { 
        id: 19,
        name: "Vikram Verma",
        age: 43,
        condition: "Gout",
        medicines: ["Colchicine", "Allopurinol"],
        weight: 85,
        height: 175,
        allergies: [],
        surgeries: []
    },
    { 
        id: 20,
        name: "Zara Khan",
        age: 35,
        condition: "Eczema",
        medicines: ["Topical steroids", "Antihistamines"],
        weight: 55,
        height: 160,
        allergies: ["None"],
        surgeries: []
    }
];
document.getElementById("loginButton").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    if (password === "sahithi") {
        loadPatientRecords();
        document.getElementById("searchContainer").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    if (searchInput.trim() !== "") {
        searchPatientRecords(searchInput);
    }
});
function loadPatientRecords() {
    displayRecords(patientRecords);
}
function searchPatientRecords(searchInput) {
    const filteredRecords = patientRecords.filter(record => 
        record.id === parseInt(searchInput) || 
        record.name.toLowerCase().includes(searchInput)
    );
    displayRecords(filteredRecords);
}

function displayRecords(records) {
    const recordsContainer = document.getElementById("recordsContainer");
    recordsContainer.innerHTML = "";
    records.forEach(record => {
        const recordDiv = document.createElement("div");
        recordDiv.classList.add("record");
        recordDiv.innerHTML = `<strong>ID:</strong> ${record.id}<br>
                               <strong>Name:</strong> ${record.name}<br>
                               <strong>Age:</strong> ${record.age}<br>
                               <strong>Condition:</strong> ${record.condition}<br>
                               <strong>Medicines:</strong> ${record.medicines.join(", ")}<br>
                               <strong>Weight:</strong> ${record.weight} kg<br>
                               <strong>Height:</strong> ${record.height} cm<br>
                               <strong>Allergies:</strong> ${record.allergies.length > 0 ? record.allergies.join(", ") : "None"}<br>
                               <strong>Past Surgeries:</strong> ${record.surgeries.length > 0 ? record.surgeries.join(", ") : "None"}<hr>`;
        recordsContainer.appendChild(recordDiv);
    });
}
