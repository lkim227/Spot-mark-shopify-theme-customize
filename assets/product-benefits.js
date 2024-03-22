const tabButtons = document.querySelectorAll('.benefits-right-list-item');

    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        tabButtons.forEach((item) => {
          item.classList.remove("active");
        });
        const tabId = this.getAttribute('data-benefit-tab');
        

        document.querySelectorAll('.benefits-left-item').forEach(function (tabContent) {
          tabContent.style.maxHeight = 0;
          tabContent.style.opacity = "0";
          if(screen.width > 992){
            tabContent.classList.remove('active');
          }
        });

        this.classList.add("active");
        const active_tab = document.querySelector(`.benefits-left-item[data-benefit-tab="${tabId}"]`);
        active_tab.classList.add('active');
        active_tab.style.maxHeight = active_tab.scrollHeight + "px";
        active_tab.style.opacity = "1";

      });
    });