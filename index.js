function copyToClipboard(info) {
    navigator.clipboard.writeText(info)

    document.getElementById("phone").innerHTML = "Copied &checkmark;"
    // document.getElementById("phone").style = ""

}

function contact() {
    console.log("Contact Clicked")
}

