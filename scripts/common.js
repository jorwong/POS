function menuHTML() {
    window.location.href = "setup-menu.html"
}

function locationHTML() {
    window.location.href = "setup-location.html"
}

function locationEditGeneral() {
    window.location.href = "setup-location-edit-general.html"
}

function discountsHTML(){
    window.location.href="setup-location-edit-discounts.html"
}

function globalsettingsHTML() {
    window.location.href="setup-globalSettings.html"
}
    function staffHTML() {
        window.location.href="setup-staff.html"
    }

    function ordercancel() {
        window.location.href="setup-globalSettings-orderCancel.html"
    }

    function paymenttypes() {
        window.location.href="setup-globalSettings-paymentTypes.html"
    }

    function modifier(){
window.location.href="setup-globalSettings-modifier.html"
    }

    function combo() {
        window.location.href="setup-globalSettings-combo.html"
    }

    function superPass() {
        window.location.href="setup-globalSettings-superPass.html"
        
    }

    function menuItem() {
        window.location.href="setup-menu-addItem.html"
    }

    function taxHTML() {
        window.location.href="setup-location-edit-tax.html"
    }
    

      function pos() {
          window.location.href="pos.html"
      }

      // add menu item, add food warning
    let btnAddFW = document.querySelector("#btnAddFoodWarning");
    let foodwarningform = document.querySelector("#fwFormContainer");
    let btnSavefw = document.querySelector("#save_food_warning");

    btnAddFW.addEventListener('click', (e) => {
       foodwarningform.classList.remove("d-none");
       e.preventDefault();
    });

    btnSavefw.addEventListener('click', (e) => {
        e.preventDefault();
    });
    

      function letVarInputs() {
        
        // Get the checkbox
        var checkBox = document.getElementById("customCheck8");
        // Get the output text
        var variance_container = document.getElementById("variance_list_container");
      
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
          variance_container.classList.remove("d-none");
        } else if (checkBox.checked == false) {
            variance_container.classList.add("d-none");
        }
      }
