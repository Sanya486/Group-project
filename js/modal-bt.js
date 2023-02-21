
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };

    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    }
    
    const enableBodyScroll = () => {
      document.body.style.overflow = 'visible';
    }
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      if (refs.modal.classList.contains("is-hidden")) {
        enableBodyScroll();
      } else {
        disableBodyScroll(); 
      }
    }
  })();