let page1El = document.getElementById("page-1");
let page2El = document.getElementById("page-2");
let page3El = document.getElementById("page-3");


function saveBasicDetails() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let first = document.getElementById("first");

    if (name === "") {
        first.textContent = "Enter First Name";
    } else if (lastname === "") {
        first.textContent = "Enter Last Name";
    } else {
        first.textContent = "";
    }
    let date = document.getElementById("date").value;
    let dateError = document.getElementById("dateError");
    if (date === "") {
        dateError.textContent = "DOB Require";
    } else {
        dateError.textContent = "";
    }

    let email = document.getElementById('email').value;
    let emailId = document.getElementById("emailId");
    if (email === "" && !(email.includes("@"))) {
        emailId.textContent = "Mail Id Reqire";
    } else if (!(email.includes(".com"))) {
        emailId.textContent = "Enter Valid Mail Id";
    } else {
        emailId.textContent = "";
    }
    let ffname = document.getElementById("ffname").value;
    let flname = document.getElementById("flname").value;
    let fatherError = document.getElementById("fatherError");
    if (ffname === "") {
        fatherError.textContent = "Enter Father First Name";
    } else if (flname === "") {
        fatherError.textContent = "Enter Father Last Name";
    } else {
        fatherError.textContent = "";
    }

    let mfname = document.getElementById("mfname").value;
    let mlname = document.getElementById("mlname").value;
    let motherError = document.getElementById("motherError");
    if (mfname === "") {
        motherError.textContent = "Enter Mother First Name";
    } else if (mlname === "") {
        motherError.textContent = "Enter Mother Last Name";
    } else {
        motherError.textContent = "";
    }
    let gender = "";
    let genderMale = document.getElementById("genderMale");
    let genderFemale = document.getElementById("genderFemale");
    let genderErr = document.getElementById("genderErr");
    if (genderMale.checked && genderMale.value === "Male") {
        gender = "Male";
    } else if (genderFemale.checked && genderFemale.value === "Female") {
        gender = "Female";
    }
    if (gender === "") {
        genderErr.textContent = "Tick a Gender";
    } else {
        genderErr.textContent = "";
    }

    let nationality = document.getElementById("nationality").value;
    let nation = document.getElementById("nation");
    if (nationality === "") {
        nation.textContent = "Enter Nationality";
    } else {
        nation.textContent = "";
    }

    let homeAdd = document.getElementById("homeAdd").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let addressErr = document.getElementById("addressErr");

    if (homeAdd === "") {
        addressErr.textContent = "Enter Address";
    } else if (city === "") {
        addressErr.textContent = "Enter City";
    } else if (country === "Select Country") {
        addressErr.textContent = "Choose country";
    } else {
        addressErr.textContent = "";
    }

    let homeNo = document.getElementById("homeNo").value;
    let mobileNo = document.getElementById("mobileNo").value;
    let mobileNoErr = document.getElementById("mobileNoErr");
    if (mobileNo === "") {
        mobileNoErr.textContent = "Phone Number is Required";
    } else if (mobileNo.length < 10) {
        mobileNoErr.textContent = "Enter Valid Phone Number";
    } else {
        mobileNoErr.textContent = "";
    }

    let registrationDetails = {
        "name": name + " " + lastname,
        "dob": date,
        "mailId": email,
        "fatherName": ffname + " " + flname,
        "motherName": mfname + " " + mlname,
        "gender": gender,
        "nationality": nationality,
        "address": homeAdd + ", " + city + ", " + country,
        "homeNumber": homeNo,
        "mobileNumber": mobileNo
    };
    if ((name && lastname && date && email && ffname && flname && mfname && mlname && gender && nationality && homeAdd && city && country && mobileNo) !== "" && (email.includes("@") && (email.includes(".com"))) && (mobileNo.length >= 10)) {
        page1El.classList.add("display-none");
        page2El.classList.remove("display-none");
        page2El.classList.add("display");
        localStorage.setItem("personal_details", JSON.stringify(registrationDetails));
    }

}

function saveEducationaDetails() {
    let hscInstitute = document.getElementById("hscInstitute").value;
    let hscInstErr = document.getElementById("hscInstErr");
    hscInstitute === "" ? hscInstErr.textContent = "HSC Institue Name require" : hscInstErr.textContent = "";

    let hscBoard = document.getElementById("hscBoard").value;
    let hscBoardErr = document.getElementById("hscBoardErr");
    hscBoard === "Select Board" ? hscBoardErr.textContent = "Choose HSC Board" : hscBoardErr.textContent = "";

    let hscPercentage = document.getElementById("hscPercentage").value;
    let hscPerErr = document.getElementById("hscPerErr");
    hscPercentage === "" ? hscPerErr.textContent = "HSC Percentage Require" : hscPerErr.textContent = "";

    let sscInstitu = document.getElementById("sscInstitu").value;
    let sscInstErr = document.getElementById("sscInstErr");
    sscInstitu === "" ? sscInstErr.textContent = "SSC Institue Name require" : sscInstErr.textContent = "";

    let sscBoard = document.getElementById("sscBoard").value;
    let sscBoardErr = document.getElementById("sscBoardErr");
    sscBoard === "Select Board" ? sscBoardErr.textContent = "Choose SSC Board" : sscBoardErr.textContent = "";

    let sscPercentage = document.getElementById("sscPercentage").value;
    let sscPerErr = document.getElementById('sscPerErr');
    sscPercentage === "" ? sscPerErr.textContent = "SSC Percentage Require" : sscPerErr.textContent = "";

    let currentPurse = document.getElementById("currentPurse").value;
    let currPurErr = document.getElementById("currPurErr");
    currentPurse === "" ? currPurErr.textContent = "Current Pursueing in Which Branch Require" : currPurErr.textContent = "";

    let currentEdu = document.getElementById("currentEdu").value;
    let currEduErr = document.getElementById("currEduErr");
    currentEdu === "" ? currEduErr.textContent = "Current Institute Name Require" : currEduErr.textContent = "";

    let overallPercentage = document.getElementById("overallPercentage").value;
    let overPerErr = document.getElementById("overPerErr");
    overallPercentage === "" ? overPerErr.textContent = "Overall Percentage Upto Last Semester Require" : overPerErr.textContent = "";

    let backlogs = document.getElementById("backlogs").value;
    let educationDetails = {
        "hscInstitute": hscInstitute,
        "hscBoard": hscBoard,
        "hscPercentage": hscPercentage,
        "sscInstitute": sscInstitu,
        "sscBoard": sscBoard,
        "sscPercentage": sscPercentage,
        "currentPursuing": currentPurse,
        "currentInstitute": currentEdu,
        "overAllPercentage": overallPercentage,
        "backlogs": backlogs
    };


    if ((hscInstitute && hscPercentage && sscInstitu && sscPercentage && currentPurse && currentEdu && overallPercentage !== "") && (hscBoard && sscBoard !== "Select Board")) {
        page2El.classList.add("display-none");
        page3El.classList.remove("display-none");
        page3El.classList.add("display");
        localStorage.setItem("education_Details", JSON.stringify(educationDetails));
    }
}

function backToPage1() {
    page1El.classList.remove("display-none");
    page2El.classList.add("display-none");
}

function backToPage2() {
    page2El.classList.remove("display-none");
    page3El.classList.add("display-none");
}


function saveAndRegister() {
    let photograph = document.getElementById("photograph");
    let photoErr = document.getElementById("photoErr");
    let photoSize = photograph.files[0];
    let photoFileName = "";
    if (photograph.value === "") {
        photoErr.textContent = "Choose Photo";
    } else if (photoSize.size >= 4000000) {
        photoErr.textContent = "File size must be less than 4MB!";
    } else {
        photoErr.textContent = "";
        photoFileName = photoSize.name;
    }

    let hscFile = document.getElementById("hscFile");
    let hscFileErr = document.getElementById("hscFileErr");
    let hscFileSize = hscFile.files[0];
    let hscFileName = "";
    if (hscFile.value === "") {
        hscFileErr.textContent = "Choose HSC Mark Sheet";
    } else if (hscFileSize.size >= 4000000) {
        hscFileErr.textContent = "File size must be less than 4MB!";
    } else {
        hscFileErr.textContent = "";
        hscFileName = hscFileSize.name;
    }

    let sscFile = document.getElementById("sscFile");
    let sscFileErr = document.getElementById("sscFileErr");
    let sscFileSize = sscFile.files[0];
    let sscFileName = "";
    if (sscFile.value === "") {
        sscFileErr.textContent = "Choose SSC Mark Sheet";
    } else if (sscFileSize.size >= 4000000) {
        sscFileErr.textContent = "File size must be less than 4MB!";
    } else {
        sscFileErr.textContent = "";
        sscFileName = sscFileSize.name;
    }

    let allSem = document.getElementById("allSem");
    let allSemErr = document.getElementById("allSemErr");
    let allSemSize = allSem.files[0];
    let allSemName = "";
    if (allSem.value === "") {
        allSemErr.textContent = "Choose All Semesters Marks in Single File";
    } else if (allSemSize.size >= 10000000) {
        allSemErr.textContent = "File size must be less than 10MB!";
    } else {
        allSemErr.textContent = "";
        allSemName = allSemSize.name;
    }

    let documentsFiles = {
        "photo": photoFileName,
        "hscMarksSheet": hscFileName,
        "sscMarksSheet": sscFileName,
        "allSemMarks": allSemName
    };


    if ((photograph.value && hscFile.value && sscFile.value && allSem.value !== "") && (photoSize.size && hscFileSize.size && sscFileSize.size && allSemSize.size <= 4000000)) {
        alert("Successfully Register");
        localStorage.setItem("documets_files", JSON.stringify(documentsFiles));
        page1El.classList.remove("display-none");
        page2El.classList.add("display-none");
        page3El.classList.add("display-none");
    }
}
