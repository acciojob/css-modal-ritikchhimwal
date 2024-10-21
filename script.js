//your JS code here. If required.
const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementsByClassName("close-modal")[0];

    // When the user clicks the button, open the modal
    openModalBtn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on the close button, close the modal
    closeModalBtn.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks outside the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };