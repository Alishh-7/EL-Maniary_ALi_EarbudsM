(() => {


    // Variables
    const hotspots = document.querySelectorAll(".Hotspot");
  
    // List
  const lists = [
    {
      image: "./images/fingerprint.svg",
      name: "Effortless Control at Your Fingertips",
      para: "Enjoy seamless control with just a touch. This innovative  allows you to effortlessly pause, accept calls, and play music, all with a single tap.",
    },
    {
      image: "./images/volumecontrole.svg",
      name: "Intuitive Volume Control at Your Fingertips",
      para: "Effortlessly control your audio volume with a simple swipe up or down, giving you smooth, precise adjustments at your fingertips.",
    },
    {
      image: "./images/wirelesscharger.svg",
      name: "Convenient Wireless Charging Solution",
      para: "Experience hassle-free power with wireless charging.",
    },
    {
      image: "./images/noisecancelation.svg",
      name: "Immersive Noise Cancellation Technology",
      para: "Enjoy clear, immersive sound with noise cancellation that blocks out background noise, perfect for staying focused wherever you are. ",
    },
  ];
  
    function loadInfo() {
      lists.forEach((list, index) => {
        const selected = document.querySelector(
          `.Hotspot[slot="hotspot-${index + 1}"]`
        );
        console.log(selected);
  
        if (selected) {
          const listImage = document.createElement("img");
          listImage.src = list.image;
  
          const listName = document.createElement("h3");
          listName.textContent = list.name;
  
          const listPara = document.createElement("p");
          listPara.textContent = list.para;
  
          selected.querySelector(".HotspotAnnotation").append(listImage);
          selected.querySelector(".HotspotAnnotation").append(listName);
          selected.querySelector(".HotspotAnnotation").append(listPara);
        }
      });
    }
  
    loadInfo();
  
    // Show and hide hotspots
    function showInfo(e) {
      const selected = e.currentTarget.querySelector(".HotspotAnnotation");
      if (selected) {
        gsap.to(selected, { autoAlpha: 1, duration: 0.5 });
      }
    }
  
    function hideInfo(e) {
      const selected = e.currentTarget.querySelector(".HotspotAnnotation");
      if (selected) {
        gsap.to(selected, { autoAlpha: 0, duration: 0.5 });
      }
    }
  
    // Add eventlisteners for showing and hiding info
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  